#!/bin/sh

BASE_DIR="tapp37"
cordova create $BASE_DIR co.tapp37 $BASE_DIR
cd $BASE_DIR

rm -rf www/*
rsync -a -c ../lnk www
rsync -a -c ../cordova/android/res /Users/rotoxl/dev/proyectotest/$BASE_DIR/platforms/android/res
rsync -a -c ../cordova/config.xml .

# cordova plugin add org.apache.cordova.device
# cordova plugin add org.apache.cordova.network-information
cordova plugin add org.apache.cordova.inappbrowser

cordova platform add android

# rm -rf /Users/rotoxl/dev/proyectotest/$BASE_DIR/platforms/android/res/drawable

rm -rf /Users/rotoxl/dev/proyectotest/$BASE_DIR/platforms/android/res/drawable-hdpi
rm -rf /Users/rotoxl/dev/proyectotest/$BASE_DIR/platforms/android/res/drawable-land-hdpi
rm -rf /Users/rotoxl/dev/proyectotest/$BASE_DIR/platforms/android/res/drawable-land-ldpi
rm -rf /Users/rotoxl/dev/proyectotest/$BASE_DIR/platforms/android/res/drawable-land-mdpi
rm -rf /Users/rotoxl/dev/proyectotest/$BASE_DIR/platforms/android/res/drawable-land-xdpi
rm -rf /Users/rotoxl/dev/proyectotest/$BASE_DIR/platforms/android/res/drawable-land-xhdpi

# rm -rf /Users/rotoxl/dev/proyectotest/$BASE_DIR/platforms/android/res/drawable-ldpi

rm -rf /Users/rotoxl/dev/proyectotest/$BASE_DIR/platforms/android/res/drawable-mdpi
rm -rf /Users/rotoxl/dev/proyectotest/$BASE_DIR/platforms/android/res/drawable-port-hdpi
rm -rf /Users/rotoxl/dev/proyectotest/$BASE_DIR/platforms/android/res/drawable-port-ldpi
rm -rf /Users/rotoxl/dev/proyectotest/$BASE_DIR/platforms/android/res/drawable-port-mdpi
rm -rf /Users/rotoxl/dev/proyectotest/$BASE_DIR/platforms/android/res/drawable-port-xdpi
rm -rf /Users/rotoxl/dev/proyectotest/$BASE_DIR/platforms/android/res/drawable-port-xhdpi
rm -rf /Users/rotoxl/dev/proyectotest/$BASE_DIR/platforms/android/res/drawable-xhdpi
rm -rf /Users/rotoxl/dev/proyectotest/$BASE_DIR/platforms/android/res/drawable-xxhdpi

