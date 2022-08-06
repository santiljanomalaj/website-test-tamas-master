/**
 * @module langFactory
 * @desc provide actual language
 *
 */

app.factory('langFactory', [
   function () {
      // console.log('langFactory');

      var Services = {};

      Services.getLanguage = function () {
         var url = window.location.href;
         // do not use angulars $location here as it breaks anker links on the page!

         var urlAtributs = url.split('/');
         var activeLanguage = urlAtributs[3];

         return activeLanguage;
      };


      return Services;
   }
]);
