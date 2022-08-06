#!/bin/sh

# ensure script is executed from main folder
currentDir=$(basename $(pwd))
if [ $currentDir = "shell" ]; then
    cd ..
fi


. 'shell/function/installScreen.sh'
. 'shell/function/installExternalDependencys.sh'


echo "Get npm packages

"
npm install

echo "Create default config

"
grunt copy:default

echo "

Installation finished.

Run 'grunt' in terminal of the project folder to start development.
"

$SHELL # leave terminal open to see output; executed on PC via double click
