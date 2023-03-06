use std::fs;

use axum::{
    body::Body,
    extract::{rejection::PathRejection, Path},
    handler::HandlerWithoutStateExt,
    http::{Request, StatusCode},
    response::{IntoResponse, Response},
    routing::get,
    Router,
};
use tower::util::ServiceExt;
use tower_http::services::ServeDir;
use tracing::{error, info};

#[tokio::main]
async fn main() {
    info!("Starting up yoisho clicker server...");

    let app = Router::new()
        .route("/sound/:id", get(sound))
        .fallback_service(not_found_handler.into_service());

    let addr = "127.0.0.1:8088".parse().unwrap();

    info!("Listening on {}", addr);

    if std::path::Path::new("assets/").exists() {
        let num_files = fs::read_dir("assets/").unwrap().count();
        info!("Found {} files in assets!", num_files);
    } else {
        error!("Warning - no asset/ folder found! There should be one located near the binary!");
    }

    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .with_graceful_shutdown(async {
            tokio::signal::ctrl_c().await.unwrap();
            info!("Shutdown signal received.");
        })
        .await
        .unwrap();

    info!("Shutting down server.");
}

fn not_found() -> StatusCode {
    StatusCode::NOT_FOUND
}

async fn not_found_handler() -> impl IntoResponse {
    not_found()
}

/// Returns the selected sound file if it exists.
async fn sound(id_result: Result<Path<u32>, PathRejection>) -> Response {
    if let Ok(Path(id)) = id_result {
        const PREFIX: &str = "yoisho_";
        const SUFFIX: &str = ".mp3";

        let uri = format!("/{}{:0>4}{}", PREFIX, id, SUFFIX);
        match Request::builder().uri(&uri).body(Body::empty()) {
            Ok(req) => match ServeDir::new("assets/").oneshot(req).await {
                Ok(resp) => {
                    if resp.status() == StatusCode::OK {
                        return resp.into_response();
                    }
                }
                Err(err) => {
                    error!("Failed to get a response for file {} - err: {}", uri, err);
                }
            },
            Err(err) => {
                error!("Failed to build a request for file {} - err: {}", uri, err);
            }
        }
    }

    not_found().into_response()
}
