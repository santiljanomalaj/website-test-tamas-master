#!/bin/bash


# import
. 'shell/function/packageJsonValue.sh'


# STARTSCREEN DESCRIPTION ################
name="$(packageJsonValue name)"
desc="$(packageJsonValue description)"

echo "
    _______   ___    _   ___ ___ ___  ___  _   ___ _____ _   _ ___ ___
   /       / | _ \  /_\ | _ \_ _|   \| __|/_\ / __|_   _| | | | _ \ __|
  /  ( )  /  |   / / _ \|  _/| || |) | _|/ _ \ (__  | | | |_| |   / _|
 /_______/   |_|_\/_/ \_\_| |___|___/|_|/_/ \_\___| |_|  \___/|_|_\___|



$name Installation

$desc

"
