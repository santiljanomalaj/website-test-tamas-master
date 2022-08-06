# !/bin/bash

# installation for production

# ensure script is executed from main folder
currentDir=$(basename $(pwd))
if [ $currentDir = "shell" ]; then
    cd ..
fi


. 'shell/function/packageJsonValue.sh'
name="$(packageJsonValue name)"


. 'shell/function/installScreen.sh'


. 'shell/function/installExternalDependencys.sh'



printf "Switching to branch stable \n\n"
git checkout stable


printf "Get npm packages  \n\n"
npm install



printf "Create default config \n\n"
grunt copy:default



printf "Compile Code for Production \n\n"
grunt buildProd



# install pm2
if hash pm2 2>/dev/null; then
    echo "pm2 is installed. Fine."
else
    echo "could not find pm2, try to install it."
    sudo npm install -g pm2
fi
echo "\n"



printf "Starting process with pm2. For further Info about pm2 \n\n"
pm2 start server.js --name $name


if [ "$1" = "-continue" ]; then
    printf "continue installation

        "
else
   printf "Creating a startup script \n\n"
   pm2 startup

   echo "Make startup script execute on system start"
   sudo su -c "env PATH=$PATH:/usr/local/bin pm2 startup linux -u $USER --hp /home/$USER"

   pm2 save # save current process list

   echo "Installation finished.

   For further Infos about running pm2 see
   http://pm2.keymetrics.io/docs/usage/quick-start/

   "
   $SHELL # quit and leave terminal open to see output
fi
