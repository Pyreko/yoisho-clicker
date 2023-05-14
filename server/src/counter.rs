use std::sync::Arc;

use axum::{
    extract::{rejection::PathRejection, Path},
    http::StatusCode,
    response::Result,
    Extension, Json,
};
use sqlx::{Pool, Sqlite};
use tracing::{error, warn};

/// Returns the count from a SQLite database.
pub async fn get_count(pool: Arc<Pool<Sqlite>>) -> std::result::Result<u64, sqlx::Error> {
    match pool.acquire().await {
        Ok(mut conn) => {
            match sqlx::query!("SELECT count FROM counts WHERE name = 'volume'")
                .fetch_one(&mut conn)
                .await
            {
                Ok(query) => Ok(query.count as u64),
                Err(err) => {
                    warn!("SQLite query for count failed - err: {}", err);
                    Err(err)
                }
            }
        }
        Err(err) => {
            error!("Failed to get pool connection to SQLite DB - err: {}", err);
            Err(err)
        }
    }
}

/// Returns the current count.
pub async fn count(Extension(pool): Extension<Arc<Pool<Sqlite>>>) -> Json<u64> {
    match get_count(pool).await {
        Ok(count) => Json(count),
        Err(_) => Json(0),
    }
}

/// Increments the count by `n` and returns the new count.
pub async fn increment(
    id: Result<Path<i32>, PathRejection>,
    Extension(pool): Extension<Arc<Pool<Sqlite>>>,
) -> Result<Json<u64>> {
    let mut conn = pool.acquire().await.unwrap();

    if let Ok(Path(id)) = id {
        if id > 0 {
            match sqlx::query!(
                "UPDATE counts SET count = count + ? WHERE name = 'volume' RETURNING count",
                id
            )
            .fetch_one(&mut conn)
            .await
            {
                Ok(res) => match res.count {
                    Some(count) => {
                        return Ok(Json(count as u64));
                    }
                    None => {
                        error!("count was missing! Re-initialize the database!");
                    }
                },
                Err(err) => {
                    error!("Failed to increment in DB - err: {}", err);
                }
            }
        }
    }

    Err(StatusCode::BAD_REQUEST.into())
}
