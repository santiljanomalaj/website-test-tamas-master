// var config = require('./config/backend.js');
var fs = require('fs');
var marked = require('marked');
var path = require('path');
var moment = require('moment');


function blogJson (data, index, filename, locale, content) {

   var contentMarked = marked(content);
   var categories = [];
   var imageList = [];
   var videoList = [];
   var images = void 0;
   var tags = void 0;
   var videos = void 0;
   var regexTag = /\[category\](.+?)\[category\]/gm;
   var regexImg = /<img(.+?)>/gm;
   var regexVideo = /<iframe(.+?)><\/iframe>/gm;
   var title = content.split('[title]');
   var dateString = content.split('[date]');
   dateString = dateString[1];
   console.log(dateString);
   var dateMoment = moment(dateString, 'DD.MM.YYYY');
   var description = content.split('[description]');
   description[1] = description[1] || '';
   var indexDot = description[1].indexOf('.', 200);
   while ((tags = regexTag.exec(content)) !== null) {
      if (tags.index === regexTag.lastIndex) {
         regexTag.lastIndex++;
      }
      tags.forEach(function (element, index) {

         if (index === 1) {
            categories.push(element);
         }
      });
   }
   while ((videos = regexVideo.exec(content)) !== null) {
      if (videos.index === regexVideo.lastIndex) {
         regexVideo.lastIndex++;
      }
      videos.forEach(function (element, index) {

         if (index === 0) {
            videoList.push(element);
         }
      });
   }
   while ((images = regexImg.exec(contentMarked)) !== null) {
      if (images.index === regexImg.lastIndex) {
         regexImg.lastIndex++;
      }
      images.forEach(function (element, index) {
         if (index === 0) {
            imageList.push(element);
         }
      });
   }

   var article = {
      name: filename,
      id: index,
      title: title[1],
      date: dateString,
      month: dateMoment.format('MM'),
      created: dateMoment.format('MMMM YYYY'),
      year: dateMoment.format('YYYY'),
      categories: categories,
      images: imageList,
      videos: videoList,
      descriptionFull: marked(description[1]),
      descriptionShort: marked(description[1].length <= 200 ? description[1] : description[1].slice(0, indexDot) + '...')
   };
   data.push(article);
}

function teamJson (data, index, content) {
   var fullName = content.split('[fullName]');
   var position = content.split('[position]');
   var img = content.split('[img]');

   var worker = {
      id: index,
      fullName: fullName[1],
      position: position[1],
      img: img[1]
   };
   data.push(worker);
}

function createJson (type, data, index, filename, locale, content) {
   switch (type) {
      case 'blog':
         blogJson(data, index, filename, locale, content);
         break;
      case 'team':
         teamJson(data, index, content);
         break;
      default:
         console.error('Type ' + type + ' not exist \n');
         break;
   }
}

function parseFilesToJson (type, soucePath, toFile) {
   var dataEn = [];
   var dataDe = [];
   var dirs = fs.readdirSync(soucePath);
   if (dirs.length !== 0) {
      dirs.forEach(function (dir, index) {
         var filenames = fs.readdirSync(path.resolve(soucePath, dir));
         if (filenames.length !== 0) {
            filenames.forEach(function (filename, index) {
               var content = fs.readFileSync(path.resolve(soucePath, dir, filename), 'utf-8');
               console.log(dir + '/' + filename + ' upload to ' + dir + '/' + toFile + '.json');
               switch (dir) {
                  case 'en':
                     createJson(type, dataEn, index, filename, dir, content);
                     break;
                  case 'de':
                     createJson(type, dataDe, index, filename, dir, content);
                     break;
                  default:
                     console.error('add a folder ' + dir + ' to the switch construct and create an array \n');
                     break;
               }
            });
            switch (dir) {
               case 'en':
                  fs.writeFileSync(path.resolve('dest', dir, toFile + '.json'), JSON.stringify(dataEn));
                  break;
               case 'de':
                  fs.writeFileSync(path.resolve('dest', dir, toFile + '.json'), JSON.stringify(dataDe));
                  break;
               default:
                  console.error('add a folder ' + dir + ' to the switch construct and create an array \n');
                  break;
            }
         } else {
            return 'Folder ' + dir + ' is empty \n';
         }
      });
   } else {
      return 'Folder "lang" is empty \n';
   }
}

// create the blog.json file on server startup
parseFilesToJson('blog', 'src/blog', 'blogList');
console.log('Blog file parsed \n');
