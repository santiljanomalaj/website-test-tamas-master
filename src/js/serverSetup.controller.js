app.controller('serverSetupController', ['$scope', '$http', 'configValue', '$timeout', function ($scope, $http, configValue, $timeout) {
    // so Sent-Message is not visible
    $scope.sendComplete = false;
 
    $scope.server = {
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
    $scope.sendServerSetup = function (callback) {
       callback = callback || function () {};
 
       $scope.validate = true;
 
       if (!$scope.serverSetupform || ($scope.serverSetupform && $scope.serverSetupform.$valid)) {
          console.log($scope.server)
          $http.post('/api/serverSetup', $scope.server, {
             timeout: 5000
          })
             .success(function (data, status, headers, config) {
                $scope.sendComplete = true;
                console.log('sendServerSetup erfolgreich');
                $scope.server = {
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
       $scope.sendServerSetup(function () {
          window.open(configValue.demoUrl);
          console.log('redirect');
       });
    };
 }]);
 