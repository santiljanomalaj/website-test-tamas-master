#!/bin/bash
# check if programs installed, otherwise install


# ensure script is executed from main folder
currentDir=$(basename $(pwd))
if [ $currentDir = "shell" ]; then
    cd ..
fi




echo "Checking external dependencies

"


# NODE.JS ###################
# https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions
if hash node 2>/dev/null; then
    echo "node is installed. Fine."
else
    echo "could not find node, try to install it."
    curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi
echo "\n"



# grunt available?
if hash grunt 2>/dev/null; then
    echo "grunt is installed. Fine."
else
    echo "could not find grunt, try to install it."
    sudo npm install -g grunt-cli
fi
echo "\n"



# other dependencies
checkInstall() {
    echo "\n"

    if hash $1 2>/dev/null; then
        echo $1" is already installed. Fine."
    else
        echo "could not find "$1", try to install it."
        tryInstall $1
    fi
}
tryInstall() {
    echo "\n"
    # check if this is ubuntu,
    # can "apt" be used?
    if hash apt 2>/dev/null; then
        sudo apt install $1
    else
        echo "Error: Could not find package manger 'apt'. Please install "$1" manual."
    fi
}


# checkInstall freecad
