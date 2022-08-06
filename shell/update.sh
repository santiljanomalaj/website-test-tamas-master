#!/bin/bash

# example: sh update.sh dev
# example: sh update.sh prod

installationMode=$1

updateDev(){
   printf "git pull origin master ... \n"
   git pull origin master

   printf "Get npm packages ... \n"
   npm install

   printf "switch configuration file to conf.prod... \n"
   grunt copy:dev

   printf "build the production code ... \n"
   grunt buildDev

   printf "restart all pm2 apps ... \n"
   pm2 restart all
}


updateProd(){
   printf "git pull origin stable ... \n"
   git pull origin stable

   printf "Get npm packages ... \n"
   npm install

   printf "switch configuration file to conf.prod... \n"
   grunt copy:prod

   printf "build the production code ... \n"
   grunt buildProd

   printf "restart all pm2 apps ... \n"
   pm2 -m restart all
}



# git: test if repo is up to date, or user has to do something
git fetch

pushNeeded=$(git status | grep --count -E 'modified|Untracked|ahead')
pullNeeded=$(git status | grep --count -E 'behind')
upToDate=$(git status | grep --count -E 'up-to-date.')


if [ "$pushNeeded" != "0" ]; then
    echo "need to push"
    # this is a problem => tell the parent script
    exit 1
fi


if [ "$pullNeeded" != "0" ]; then
    printf "a pull is needed  \n"
    if [ "$installationMode" = "prod" ] ; then
      printf "update in production mode ... \n"
      updateProd
    else
      printf "update in dev mode ... \n"
      updateDev
    fi
    # update done, fine
    exit 0
fi


if [ "$upToDate" != "0" ]; then
    echo "repo is up to date"
    # nothing to do, fine
    exit 0
fi



# $SHELL

# update all projects => call each update.sh script
#
# updateProject(){
#    folderName=$1
#    printf "updating project $folderName ... \n\n"
#    cd $folderName"/shell"
#    status=$(sh update.sh)
#    # echo $status
#    if [ "$status" = "need to push" ]; then
#       cd ..
#       cd ..
#       printf "repo $folderName cannot be updated due to local changes \n"
#       debugFile="debug.log"
#       if [ -f "$debugFile" ];then
#        	printf "$debugFile found, adding message to it \n"
#       else
# 	         printf "no $debugFile found, creating it, and sending a message \n"
#           # TODO: send a message here, that update was not possible
#       fi
#       echo "repo $folderName cannot be updated" >> $debugFile
#    else
#       printf "\n\n project $folderName updated \n\n"
#       cd ..
#       cd ..
#     fi
# }
#
# # list of projects to be updated
# updateProject cad prod
# updateProject login prod
# updateProject website prod
#
# exit 0
