FROM node:12

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i -g pm2
RUN npm install
COPY . .
RUN node node_modules/grunt-cli/bin/grunt copy:prod
RUN node node_modules/grunt-cli/bin/grunt buildProd

EXPOSE 4001
CMD [ "pm2-runtime", "server.js" ]
