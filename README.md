# RAPIDFACTURE Website

* Rapidfacture Website
* Static pages
* Languages: Englisch and German


## Installation

### Automatic via script
Clone the Repo
> git clone projectUrl/Website.git

Shell scripts work on Ubuntu and Linux mint. For other systems you have to install manual. Choose one of the following install scripts.

For local development:
> sh /shell/installDev.sh

For production on server:
> sh /shell/installProd.sh


### Manual installation on Ubuntu
```sh
# install Node version 8 and above
apt-get install -y nodejs

# install grunt version 1.0.0 or above
npm install -g grunt-cli

# choose a location
cd /home/user/Rapidfacture/git

# clone and step in folder
git clone projectUrl/Website.git && cd Website

# project setup
npm i
copy:default # generates a backend config, starts webserver for development
# alternative Copy the frontend.local.js manual to frontend.js

```


## Development

Start this module for development by typing in terminal:

> grunt

Grunt starts server.js and restarts on code changes (please DISABLE THE CASH in your browser to see the updates)

* Please ensure you use eslint in your texteditor
* We use 3 spaces as indentation in every language (HTML, JS, CSS)
* This module is using: [Grunt](http://gruntjs.com/), [Node](https://nodejs.org/) (Webserver runs with Express), [npm](https://www.npmjs.com/), [AngularJS 1](https://angularjs.org/), Bootstrap, jQuery.
* Translation is done via grunt to multiple static html files for SEO
* [Angular JS 1 design Style Guide.](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)



## Testing
HTML liter and eslint over giltab CI. Run the linters manual with:

> grunt lint


## Deployment

Deployment is done with [PM2](http://pm2.keymetrics.io/). To the [PM2 Cheatsheet](http://pm2.keymetrics.io/docs/usage/quick-start/#cheatsheet).
In Development System: just push. The dev server will be updated all 3 minutes and pull your changes.

> git push origin master

Production: The authorized person has to merge the stable branch from the master and push to the git server.


## Folder structure

```
root
 |
 |_config
 |
 |_dest => webserver path; code created from `src` via grunt
 |
 |_lang => translation files
 |
 |_shell => install and update script
 |
 |_src => the frontend source code
 |
 |_.eslintrc => we use eslint for our js
 |
 |_ Gruntfile.js
 |
 |_package.json
 |
 |_server.js => node server backend


```


## License
[2014] - [2020] RAPIDFACTURE GmbH. All Rights Reserved.

All information, intellectual and technical concepts contained herein are
property of RAPIDFACTURE GmbH and are protected by trade secret or copyright law.
Dissemination of this information or reproduction of this material is strictly
forbidden unless prior written permission is obtained from RAPIDFACTURE GmbH.

info@rapidfacture.com
