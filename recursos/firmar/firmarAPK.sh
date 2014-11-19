#!/bin/bash

# para obtener la huella digital de certificado de firma
# keytool -exportcert -alias apk -keystore /Users/rotoxl/dev/proyectotest/recursos/firmar/apk.jks -list -v

# keytool -genkey -keyalg RSA -alias apk -keystore apk.jks -storepass PASSWORD -validity 7600 -keysize 2048
# $ruta="/Users/rotoxl/dev/proyectotest/apk/platforms/android/ant-build/ant-build/CordovaApp"

cd "/Users/rotoxl/dev/proyectotest/apk/platforms/android/ant-build/"

rm ./CordovaApp-release-signed-unaligned.apk ./CordovaApp-release-signed-aligned.apk

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore /Users/rotoxl/dev/proyectotest/recursos/firmar/apk-key.keystore CordovaApp-release-unsigned.apk alias_name

cp CordovaApp-release-unsigned.apk CordovaApp-release-signed-unaligned.apk

/Applications/sdk/build-tools/21.0.2/zipalign -v 4 CordovaApp-release-unsigned.apk CordovaApp-release-signed-aligned.apk

