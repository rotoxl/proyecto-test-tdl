#!/bin/sh

BASE_DIR="apk"
cordova create $BASE_DIR es.octopus.cli $BASE_DIR
cd $BASE_DIR

rm -rf www/*
rsync -a -c ../lnk www
rsync -a -c ../recursos/config.xml .

cordova plugin add org.apache.cordova.inappbrowser
cordova plugin add org.apache.cordova.contacts
cordova plugin add org.apache.cordova.dialogs
cordova plugin add org.apache.cordova.network-information
cordova plugin add org.apache.cordova.device

cordova plugin add https://github.com/EddyVerbruggen/cordova-plugin-actionsheet.git
cordova plugin add https://github.com/EddyVerbruggen/cordova-plugin-googleplus.git
cordova plugin add https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin.git
cordova plugin add https://github.com/phonegap-build/PushPlugin.git
cordova plugin add de.appplant.cordova.plugin.local-notification

cordova plugin add https://github.com/katzer/cordova-plugin-email-composer.git
cordova plugin add https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin.git

cordova platform add android

# rm -rf /Users/rotoxl/dev/proyectotest/$BASE_DIR/platforms/android/res/drawable

rm -rf /Users/rotoxl/dev/proyectotest/$BASE_DIR/platforms/android/res/drawable-land-hdpi
rm -rf /Users/rotoxl/dev/proyectotest/$BASE_DIR/platforms/android/res/drawable-land-ldpi
rm -rf /Users/rotoxl/dev/proyectotest/$BASE_DIR/platforms/android/res/drawable-land-mdpi
rm -rf /Users/rotoxl/dev/proyectotest/$BASE_DIR/platforms/android/res/drawable-land-xdpi
rm -rf /Users/rotoxl/dev/proyectotest/$BASE_DIR/platforms/android/res/drawable-land-xhdpi

rm -rf /Users/rotoxl/dev/proyectotest/$BASE_DIR/platforms/android/res/drawable-port-hdpi
rm -rf /Users/rotoxl/dev/proyectotest/$BASE_DIR/platforms/android/res/drawable-port-ldpi
rm -rf /Users/rotoxl/dev/proyectotest/$BASE_DIR/platforms/android/res/drawable-port-mdpi
rm -rf /Users/rotoxl/dev/proyectotest/$BASE_DIR/platforms/android/res/drawable-port-xdpi
rm -rf /Users/rotoxl/dev/proyectotest/$BASE_DIR/platforms/android/res/drawable-port-xhdpi

# rm -rf /Users/rotoxl/dev/proyectotest/$BASE_DIR/platforms/android/res/drawable-hdpi
# rm -rf /Users/rotoxl/dev/proyectotest/$BASE_DIR/platforms/android/res/drawable-ldpi
# rm -rf /Users/rotoxl/dev/proyectotest/$BASE_DIR/platforms/android/res/drawable-mdpi
# rm -rf /Users/rotoxl/dev/proyectotest/$BASE_DIR/platforms/android/res/drawable-xhdpi
# rm -rf /Users/rotoxl/dev/proyectotest/$BASE_DIR/platforms/android/res/drawable-xxhdpi

rsync -a -c ../recursos/android/res /Users/rotoxl/dev/proyectotest/$BASE_DIR/platforms/android/
