#!/bin/sh

BASE_DIR="ipa"
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
cordova plugin add org.apache.cordova.statusbar

cordova plugin add https://github.com/EddyVerbruggen/cordova-plugin-actionsheet.git
cordova plugin add https://github.com/EddyVerbruggen/cordova-plugin-googleplus.git
cordova plugin add https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin.git
cordova plugin add https://github.com/phonegap-build/PushPlugin.git
cordova plugin add de.appplant.cordova.plugin.local-notification

cordova plugin add https://github.com/katzer/cordova-plugin-email-composer.git
cordova plugin add https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin.git

cordova platform add ios

rsync -a -c ../recursos/ios/splash/* platforms/ios/Octopus/Resources/splash
rsync -a -c ../recursos/ios/icon/* platforms/ios/Octopus/Resources/icons

