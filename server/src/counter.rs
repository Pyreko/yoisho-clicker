use std::sync::Arc;

use axum::{Extension, Json, http::StatusCode, response::Result};
use serde::Deserialize;
use sqlx::{Pool, Sqlite};
use tracing::{error, warn};

/// Returns the count from a SQLite database.
pub async fn get_count(pool: Arc<Pool<Sqlite>>) -> std::result::Result<u64, sqlx::Error> {
    match pool.acquire().await {
        Ok(mut conn) => {
            match sqlx::query!("SELECT count FROM counts WHERE name = 'yoisho'")
                .fetch_one(&mut *conn)
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

#[derive(Deserialize)]
pub struct IncrementRequest {
    amount: i32,
}

/// Increments the count by `n` and returns the new count.
pub async fn increment(
    Extension(pool): Extension<Arc<Pool<Sqlite>>>,
    Json(request): Json<IncrementRequest>,
) -> Result<Json<u64>> {
    let mut conn = pool.acquire().await.unwrap();
    let id = request.amount;

    if id > 0 {
        match sqlx::query!(
            "UPDATE counts SET count = count + ? WHERE name = 'yoisho' RETURNING count",
            id
        )
        .fetch_one(&mut *conn)
        .await
        {
            Ok(res) => {
                return Ok(Json(res.count as u64));
            }
            Err(err) => {
                error!("Failed to increment in DB - err: {}", err);
            }
        }
    }

    Err(StatusCode::BAD_REQUEST.into())
}
