#!/bin/bash

set -eu

pkill -2 yoisho-clicker-server
while pgrep -u $UID -x yoisho-clicker-server >/dev/null; do sleep 1; done
mkdir -p ~/yc-server
cp ./target/release/yoisho-clicker-server ~/yc-server/yoisho-clicker-server
cp -r ./assets ~/yc-server/
cd ~/yc-server
nohup ./yoisho-clicker-server > /dev/null 2>&1 &