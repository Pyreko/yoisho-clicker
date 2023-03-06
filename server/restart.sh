#!/bin/bash

set -eu

pkill -2 yoisho-server
while pgrep -u $UID -x yoisho-server >/dev/null; do sleep 1; done
mkdir -p ~/yc-server
cp ./target/release/yoisho-server ~/yc-server/yoisho-server
cp -r ./assets ~/yc-server/
cd ~/yc-server
nohup ./yoisho-server > /dev/null 2>&1 &