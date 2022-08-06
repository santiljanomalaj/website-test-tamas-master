let sass = require('node-sass'); // libSass

module.exports = (grunt) => {
   // LOAD PLUGINS  AND REGISTER TASKS ////////////////////////////////////////////////////////////////
   // each of the following sections loads necessary grunt modules and the registers grunt taks

   // building
   grunt.loadNpmTasks('grunt-contrib-clean');
   grunt.loadNpmTasks('grunt-contrib-copy');
   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-contrib-symlink');
   grunt.loadNpmTasks('grunt-html-build');
   grunt.loadNpmTasks('grunt-sass');

   // dev: run app on local webserver
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-nodemon');
   grunt.loadNpmTasks('grunt-concurrent');
   // special production operations
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-contrib-htmlmin');
   // linter
   grunt.loadNpmTasks('grunt-eslint');
   grunt.loadNpmTasks('grunt-htmlhint-plus');

   grunt.loadNpmTasks('grunt-i18n-template');

   // helper tasks used in other tasks - not for direct use
   grunt.registerTask('buildBasic', ['copy:files', 'concat', 'i18n_template', 'sass', 'symlink', 'createJson', 'clean:tmp']); // helper building task used in other tasks
   grunt.registerTask('compress', ['uglify', 'cssmin', 'htmlmin']); // for production

   grunt.registerTask('createJson', () => {
      require('./createJson.js');
   });

   // REGISTER TASKS ////////////////////////////////////////////////////////////////

   // building tasks
   grunt.registerTask('buildProd', ['clean:dest', 'htmlbuild:prod', 'buildBasic', 'compress']);
   grunt.registerTask('buildDev', ['clean:dest', 'htmlbuild:dev', 'buildBasic']);

   // developement tasks
   grunt.registerTask('default', ['buildDev', 'concurrent']); // 'grunt' => do not overwrite default config
   grunt.registerTask('local', ['copy:local', 'buildDev', 'concurrent']); // 'grunt local' for local developement
   grunt.registerTask('prod', ['copy:prod', 'buildProd', 'concurrent']); // 'grunt prod': test app in production state

   // lint
   grunt.registerTask('lint', ['eslint', 'htmlhintplus']); // 'grunt eslint': lint js


   // TASK CONFIGURATIONS //////////////////////////////////////////////////////////////////////////////////////
   grunt.initConfig({

      pkg: grunt.file.readJSON('package.json'),

      /* ----------------------------------------------- File Operations Config --------------------------------------------------- */

      clean: { // delete destination folder before build => remove old trash
         dest: {
            src: ['dest']
         },
         tmp: { // remove tmp folder needed for htmlbuild
            src: ['tmp']
         }
      },
      copy: {
         files: {
            files: [{
               expand: true, //     copy images
               cwd: 'src/img',
               src: '**',
               dest: 'dest/img'
            }, {
               expand: true, //     copy robots.txt and sitemap.xml
               cwd: 'src/',
               src: ['robots.txt', 'sitemap.xml'],
               dest: 'dest/'
            }, {
               expand: true, //     copy video
               cwd: 'src/vid',
               src: '**',
               dest: 'dest/vid'
            }, {
               expand: true, //     copy video
               cwd: 'src/directives',
               src: '**',
               dest: 'dest/directives'
            }, {
               expand: true, //     copy bootstrap
               cwd: 'node_modules/bootstrap/dist/css/',
               src: 'bootstrap.min.css',
               dest: 'dest/css'
            }, {
               expand: true, //     copy fonts
               cwd: 'node_modules/bootstrap/fonts',
               src: '**',
               dest: 'dest/fonts'
            }, {
               expand: true, //     copy fonts
               cwd: 'src/fonts',
               src: '**',
               dest: 'dest/fonts'
            }]
         },
         local: {
            files: [{
               src: 'config/frontend.local.js',
               dest: 'config/frontend.js'
            },
            {
               src: 'config/backend.local.js',
               dest: 'config/backend.js'
            }]
         },
         dev: {
            files: [{
               src: 'config/frontend.local.js',
               dest: 'config/frontend.js'
            }]
         },
         prod: {
            files: [{
               src: 'config/frontend.prod.js',
               dest: 'config/frontend.js'
            }]
         }
      },

      symlink: {
         options: {
            dirmode: 'dir',
            overwrite: false,
            force: false
         },
         all: {
            files: {
               'dest/js/config.js': 'config/frontend.js',

               // WEBSITE
               'dest/de/img': 'dest/img', // de
               'dest/de/css': 'dest/css',
               'dest/de/js': 'dest/js',
               'dest/de/vid': 'dest/vid',
               'dest/de/fonts': 'dest/fonts',

               'dest/en/img': 'dest/img', // en
               'dest/en/css': 'dest/css',
               'dest/en/js': 'dest/js',
               'dest/en/vid': 'dest/vid',
               'dest/en/fonts': 'dest/fonts'
            }
         }
      },



      /* ----------------------------------------------- HTML Config --------------------------------------------------- */

      htmlbuild: {
         dev: { // compile with dev options
            src: 'src/**/*.html',
            dest: 'tmp/',
            options: {
               beautify: true,
               basePath: 'src/', // will be cut away from src file path
               sections: {
                  layout: {
                     head: 'src/snippets/head.html',
                     nav: 'src/snippets/nav.html',
                     footer: 'src/snippets/footer.html',
                     request: 'src/snippets/request.html',
                     partCarousel: 'src/snippets/partCarousel.html'
                  }
               },
               data: {
                  cadUrl: 'https://cad.rapidfacture.com',
                  homepageUrl: 'https://www.rapidfacture.com',
                  loginUrl: 'https://login.rapidfacture.com/#/login?test'
               }
            }
         },
         prod: { // compile with production options
            src: 'src/**/*.html',
            dest: 'tmp/',
            options: {
               beautify: true,
               basePath: 'src/', // will be cut away from src file path
               sections: {
                  layout: {
                     head: 'src/snippets/head.html',
                     nav: 'src/snippets/nav.html',
                     footer: 'src/snippets/footer.html',
                     request: 'src/snippets/request.html',
                     partCarousel: 'src/snippets/partCarousel.html'
                  }
               },
               data: {
                  cadUrl: 'https://cad.rapidfacture.com',
                  homepageUrl: 'https://www.rapidfacture.com',
                  loginUrl: 'https://login.rapidfacture.com/#/login?test'
               }
            }
         }
      },
      htmlmin: {
         options: {
            removeComments: true,
            collapseWhitespace: true // whitespaces are needed when heading uncluded in text
         },
         all: {
            files: [{
               expand: true,
               cwd: 'dest',
               src: '**/*.html',
               dest: 'dest/'
            }]
         }
      },
      htmllint: { // check html errors
         options: {
            ignore: /(Attribute .ng-.* | .ui-.*)|(Attribute .rf.*)|(Start tag seen without seeing a doctype.*)|( .<!DOCTYPE html>.)|(Element “head” is missing a requi.*)|(A table row was*)|(“&”*)|(The first child “option” element of a “select” element with a “required” attribute,*)/
         },
         all: {
            src: ['dest/**/*.html', '!dest/en/snippets/*', '!dest/de/snippets/*']
         }
      },

      i18n_template: { // html tempates for language
         dev: {
            options: {
               defaultLocale: 'keys',
               htmlEscape: false,
               // skipKeyRunner: true,
               // skipMessagesRunner: true, // don't look fo new messages in html (save time)
               removeEmptyKeys: false,
               locales: ['en', 'de'],
               messagesPath: 'lang', // path were csv language files will be stored
               basePath: 'tmp', // will be cut away from following file pathes:
               forceRefresh: true // refresh all for sure
            },
            files: { // "destinationFolderName" : ["sourcePath", ...]
               'dest/': ['tmp/**/*.html']
            }
         }
      },


      /* ----------------------------------------------- CSS Config --------------------------------------------------- */

      sass: { // generate CSS from SCSS
         options: {
            sourceMap: false, // sourceMapRoot: 'css' => not working yet; error is fixes in the beta; https://github.com/sindresorhus/grunt-sass/issues/204
            implementation: sass
         },
         all: {
            files: {
               'dest/css/app.css': ['dest/css/app.scss']
            }
         }
      },
      cssmin: {
         all: {
            files: [{
               expand: true,
               cwd: 'dest/css',
               src: ['*.css'],
               dest: 'dest/css',
               ext: '.css'
            }]
         }
      },



      /* ----------------------------------------------- JavaScript Config --------------------------------------------------- */


      concat: { // dev mode: just combine js files
         js: {
            files: {
               'dest/js/external.js': ['node_modules/angular/angular.min.js', 'node_modules/typed.js/lib/typed.min.js'],
               'dest/js/app.js': ['src/js/app.js', 'src/**/*.js']
            }
         },
         sass: {
            files: {
               'dest/css/app.scss': [
                  'src/style/global/variables.scss',
                  'src/style/global/mixins.scss',
                  'src/**/*.scss'
               ]
            }

         }
      },
      uglify: { // prod mode: combine js files and compress them
         all: {
            files: {
               'dest/js/app.js': ['dest/js/app.js'],
               'dest/js/external.js': ['dest/js/external.js']
            }
         },
         options: {
            banner: '/* RAPIDFACTURE Website [2014] - [2018]. All Rights Reserved. Information and technical concepts herein are property of Rapidfacture GmbH. Dissemination or reproduction is forbidden. info@rapidfacture.com */',
            mangle: true
         }
      },


      /* --------------------------------- Webserver/Watch Config for developement--------------------------------------------------- */

      nodemon: {
         server: {
            script: 'server.js',
            options: {

               watch: ['server.js']
            }
         }
      },

      watch: { // on file changes change: run defined building task and reload in browser
         options: {
            spawn: true,
            interrupt: false,
            livereload: true,
            forever: true,
            started: process.emit('build_started'),
            ended: process.emit('build_finished')
         },
         default: {
            files: ['src/**/*.*', 'lang/**/*.*'],
            tasks: ['buildDev'] // rebuild website, do not change config file
         }
      },
      concurrent: {
         default: {
            tasks: ['nodemon', 'watch'],
            options: {
               logConcurrentOutput: true
            }
         }
      },


      /* --------------------------------- Linters --------------------------------------------------- */

      eslint: {
         options: {
            configFile: '.eslintrc'
         },
         target: ['Gruntfile.js', '*.js', 'src/**/*.js']
      },

      htmlhintplus: {
         build: {
            options: {
               // http://htmlhint.com/
               rules: {
                  'href-abs-or-rel': false,
                  'tagname-lowercase': true,
                  'attr-lowercase': true,
                  'attr-value-double-quotes': false,
                  'tag-pair': true,
                  'spec-char-escape': true,
                  'id-unique': true,
                  'src-not-empty': true,
                  'attr-no-duplication': true,
                  'title-require': false,
                  'attr-value-not-empty': false,
                  'doctype-first': false
               },
               extendRules: true,
               output: ['console'],
               force: true // hint error => throw fatal error at task end
            },
            src: ['dest/**/*.html']
         }
      }
   });
};
