// WEBSERVER

var config = require('./config/backend.js');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var port = config.port || 4004;
var compression = require('compression');

app.use(compression({
   filter: function (req, res) {
      if (req.headers['x-no-compression']) {
         // don't compress responses with this request header
         return false;
      }
      // fallback to standard filter function
      return compression.filter(req, res);
   }
}));


// allow cross origin requests
app.use(function (req, res, next) {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Methods', 'POST');
   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

   // if (!res.get('Cache-Control')) {
   //    res.set('Cache-Control', 'public, max-age=' + 50000);
   // }
   next();
});


// Serve static files

app.use(express.static(path.join(__dirname, '/dest'), { maxage: '100d' }));

app.use(bodyParser.raw({ // support raw buffer bodies till 50Mb
   limit: '50mb'
}));
app.use(bodyParser.json({ // support JSON-encoded bodies till 50Mb
   extended: false,
   limit: '50mb'
}));
app.use(bodyParser.urlencoded({ // support URL-encoded bodies till 50Mb
   extended: false,
   limit: '50mb'
}));

app.listen(port, function () {
   console.log('Webserver created running on localhost:' + port);
});


app.get('/', function (req, res) {
   var language = req.acceptsLanguages('de', 'en');

   // checking request.acceptsLanguages for value
   if (!language) {
      language = 'de';
   }
   res.redirect(language + '/');
});


// website contact forms

var simpleTemplateMailer = require('simple-template-mailer');
var mailer = simpleTemplateMailer(config.mail.mailer); // create a instance

function sendMail(template, message, res) {
   message.from = message.from || config.mail.contactMail;
   message.replyTo = message.replyTo || config.mail.contactMail;

   mailer.send(template, message, function (data, info) {
      res.status(200).send('Mail sent: ' + info);
      console.log('Mail sent ', info);
   }, function (err, info) {
      res.status(500).send('Mailer error: ' + err);
      console.log('Mailer error: ', err);
   });
};


app.post('/api/contactform', function (req, res) {
   console.log('received post to /api/contactform', req.body);
   sendMail({
      name: 'contactform',
      language: 'de',
      data: req.body
   }, {
      to: [config.mail.contactMail],
      from: req.body.email
   }, res);
});

app.post('/api/serverSetup', function (req, res) {
   console.log('received post to /api/contactform', req.body);
   sendMail({
      name: 'serverSetwegup',
      language: 'de',
      data: req.body
   }, {
      to: [config.mail.contactMail],
      from: req.body.email
   }, res);
});

