#!/bin/bash

set -eux

pkill -2 yoisho-server || true;
while pgrep -u $UID -x yoisho-server >/dev/null; do sleep 1; done;
rm -r $HOME/yc-server;
mkdir -p $HOME/yc-server;
cp ./target/release/yoisho-server $HOME/yc-server/yoisho-server;
cd $HOME/yc-server;
nohup ./yoisho-server -a $HOME/yoisho-server/assets > /dev/null 2>&1 &