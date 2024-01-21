#!/bin/bash

set -eux

pkill -2 yoisho-clicker || true
while pgrep -u $UID -x yoisho-clicker >/dev/null; do sleep 1; done
mkdir -p ~/yc-server
cp ./target/release/yoisho-server ~/yc-server/yoisho-server
cp -r ./assets ~/yc-server/
cp .env ~/yc-server/
cp clean_log.sh ~/yc-server/
cd ~/yc-server
nohup ./yoisho-server > /dev/null 2>&1 &
