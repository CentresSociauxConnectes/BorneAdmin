CS project


INSTALLATION 
- Install HOMEBREW
- $ brew install npm -g
- $ npm install nwjs-builder -g
-------- INFOS NW BUILDER --------
https://www.npmjs.com/package/nwjs-builder

BUILDER L'APP
# Build application for win32,osx64.
$ nwb nwbuild -v 0.14.4-sdk -p win32,win64,osx64 --win-ico icon_1024.ico --mac-icns icon_1024.icns --side-by-side ./app/
