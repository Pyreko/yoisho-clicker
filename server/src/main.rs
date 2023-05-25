mod counter;
use counter::*;

mod sound;
use sound::*;
use tower_http::{cors::CorsLayer, trace::TraceLayer};

use std::{fs, sync::Arc};

use axum::{
    handler::HandlerWithoutStateExt,
    http::{HeaderValue, Method, StatusCode},
    response::IntoResponse,
    routing::{get, post},
    Extension, Router,
};
use clap::Parser;
use sqlx::SqlitePool;
use tracing::{error, info};

#[derive(Parser, Debug)]
struct Args {
    #[arg(short, long, default_value = "counts.sqlite")]
    database_url: String,

    #[arg(short, long)]
    assets_path: std::path::PathBuf,
}

#[tokio::main]
async fn main() {
    let args = Args::parse();

    info!("Starting up YC server!");
    info!("Connecting to SQLite pool...");
    let pool = Arc::new(
        SqlitePool::connect(&format!("sqlite://{}", args.database_url))
            .await
            .unwrap(),
    );

    // Assert that the database works before initialization.
    get_count(pool.clone())
        .await
        .expect("Database has the correct columns.");

    let addr = "127.0.0.1:8088".parse().unwrap();
    info!("Listening on {}...", addr);

    let cors = CorsLayer::new()
        .allow_methods(vec![Method::GET, Method::POST])
        .allow_origin([
            HeaderValue::from_str("http://localhost:3000").unwrap(),
            HeaderValue::from_str("https://yoisho.clicker").unwrap(),
        ]);

    info!("Setting up router...");
    let app = Router::new()
        .route("/sound/:id", get(sound))
        .route("/increment", post(increment))
        .route("/count", get(count))
        .route("/num-files", get(num_audio_tracks))
        .layer(Extension(pool.clone()))
        .layer(Extension(args.assets_path.clone()))
        .layer(TraceLayer::new_for_http())
        .layer(cors)
        .fallback_service(not_found_handler.into_service());

    if args.assets_path.exists() {
        let num_files = fs::read_dir(args.assets_path).unwrap().count();
        info!("Found {num_files} files in assets!");
    } else {
        error!("Warning - no assets folder found!");
    }

    info!("Starting up Axum server...");
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .with_graceful_shutdown(async {
            tokio::signal::ctrl_c().await.unwrap();
            info!("Shutdown signal received.");
        })
        .await
        .unwrap();

    info!("Shutting down YC server.");
}

fn not_found() -> StatusCode {
    StatusCode::NOT_FOUND
}

async fn not_found_handler() -> impl IntoResponse {
    not_found()
}

#[cfg(test)]
mod tests {
    // TODO: Add tests to verify endpoints.
}
