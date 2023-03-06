#!/bin/bash

set -eux

pkill -2 yoisho-server;
while pgrep -u $UID -x yoisho-server >/dev/null; do sleep 1; done;
mkdir -p $HOME/yc-server;
cp ./target/release/yoisho-server $HOME/yc-server/yoisho-server;
cp -r ./assets $HOME/yc-server/;
cd $HOME/yc-server;
nohup ./yoisho-server > /dev/null 2>&1 &