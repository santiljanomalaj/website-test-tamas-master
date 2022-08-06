app.controller('contactController', ['$scope', '$http', 'configValue', '$timeout', function ($scope, $http, configValue, $timeout) {
   // so Sent-Message is not visible
   $scope.sendComplete = false;

   $scope.message = {
      language: 'de'
   };
   /* $scope.message currently holds:
   firstname
   lastname
   company
   company_size
   phone
   fax
   email
   message
   language
   */

   $scope.sendContact = function (callback) {
      callback = callback || function () {};

      $scope.validate = true;

      if (!$scope.contactform || ($scope.contactform && $scope.contactform.$valid)) {
         $http.post('/api/contactform', $scope.message, {
            timeout: 5000
         })
            .success(function (data, status, headers, config) {
               $scope.sendComplete = true;
               console.log('sendContact erfolgreich');
               $scope.message = {
                  language: 'de'
               };
               callback();
               $timeout(function () {
                  $scope.sendComplete = false;
               }, 6000);

            })
            .error(function (data, status, headers, config) {
               console.log('Senden fehlgeschlagen.' + data);
               $scope.sendError = true;
               $timeout(function () {
                  $scope.sendError = false;
               }, 10000);
            });

         $scope.validate = false;

      }
   };

   $scope.redirectToDemo = function () {
      $scope.sendContact(function () {
         window.open(configValue.demoUrl);
         console.log('redirect');
      });
   };
}]);
