use std::path::PathBuf;

use axum::{
    body::Body,
    extract::{rejection::PathRejection, Path},
    http::{Request, StatusCode},
    response::{IntoResponse, Response},
    Extension, Json,
};
use tower::util::ServiceExt;
use tower_http::services::ServeDir;
use tracing::error;

use crate::not_found;

/// Returns the selected sound file if it exists.
pub async fn sound(
    id: Result<Path<u64>, PathRejection>,
    Extension(assets_path): Extension<PathBuf>,
) -> Response {
    if let Ok(Path(id)) = id {
        const PREFIX: &str = "yoisho_";
        const SUFFIX: &str = ".mp3";

        let uri = format!("/{}{:0>4}{}", PREFIX, id, SUFFIX);
        match Request::builder().uri(&uri).body(Body::empty()) {
            Ok(req) => match ServeDir::new(assets_path).oneshot(req).await {
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

/// Returns the number of audio tracks available.
pub async fn num_audio_tracks(Extension(assets_path): Extension<PathBuf>) -> Json<u64> {
    let num_tracks = match std::fs::read_dir(assets_path) {
        Ok(rd) => rd
            .filter(|de| match de {
                Ok(de) => match de.path().extension() {
                    Some(ext) => ext == "mp3",
                    None => false,
                },
                Err(_) => false,
            })
            .count() as u64,
        Err(_) => 0,
    };

    Json(num_tracks)
}
