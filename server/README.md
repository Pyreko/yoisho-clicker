# Server

The backend server component of the site. This mainly concerns itself around incrementing a global yoisho counter (we
just use a simple SQLite DB for storing one value because I'm lazy) and delivering a sound file.

## Usage

Run the `setup.sh` script to initialize the database, then run the server by doing:

```bash
cargo run --release -- -a $ASSETS_PATH
```
