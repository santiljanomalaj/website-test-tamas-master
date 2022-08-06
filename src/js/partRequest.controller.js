/* eslint no-undef: off  */
app.controller('partRequestController', ['$scope', 'configValue', '$timeout',
   function ($scope, configValue, $timeout) {
      // console.log('anfrageController geladen');

      var url = configValue.apiUrl + 'partRequest';

      function initData () {
         $scope.meta = {
            'speed': 'standard',
            // 'email': 'ff88@gmx.net',
            // 'message': "testmessage",
            // 'phone': '123456456',
            'email': '',
            'message': '',
            'phone': '',
            'language': 'de',
            'name': '',
            'companyName': ''
         };
         $scope.items = []; // store quantities
         $scope.percentComplete = 0;
         scopeUpdate();
      }
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
      
      initData();

      function scopeUpdate () {
         if (!$scope.$$phase) { // if digest not already in progress
            $scope.$apply(); // new digest cycle => update scope values
         }
      }


      $scope.setFiles = function (fileList) { // HTML input[type=file] element onChange

         // files cannot be removed from a fileList (read only)
         // => have to be stored in an extra array,
         // array items can be added /removed
         for (var i = 0; i < fileList.length; i++) {
            $scope.items.push({
               quantity: [1],
               name: fileList[i].name,
               file: fileList[i]
            });
         }
         scopeUpdate();
      };


      $scope.removeItem = function (index) {
         $scope.items.splice(index, 1);
      };


      $scope.sendAll = function () {

         // perpare FormData
         var formData = new FormData();
         $scope.meta.items = [];

         for (var i = 0; i < $scope.items.length; i++) {
            formData.append('file', $scope.items[i].file, $scope.items[i].file.name);

            var req = {
               'request': [],
               'name': $scope.items[i].name
            };
            addQuantityIfDefined(req, $scope.items[i].quantity[0]);
            addQuantityIfDefined(req, $scope.items[i].quantity[1]);
            addQuantityIfDefined(req, $scope.items[i].quantity[2]);

            req.order = {
               'quantity': $scope.items[i].quantity[0],
               'price': 100
            };

            $scope.meta.items.push(req);
         }

         function addQuantityIfDefined (req, quantity) {
            if (quantity) {
               req.request.push({
                  'quantity': quantity,
                  'price': 100
               });
            }
         }

         formData.append('json', JSON.stringify($scope.meta)); // do not use $scope.items, where files are inside


         // XML request
         var xhr = new XMLHttpRequest();

         xhr.onloadstart = function (evt) {
            console.log('transmission started ' + evt);
         };
         xhr.upload.onprogress = function (evt) {
            $scope.percentComplete = Math.round(100 / evt.total * evt.loaded);
            scopeUpdate();
         };
         xhr.onerror = function (evt) {
            alert('error ' + evt);
            console.log('upload error:');
            console.log(evt);
         };
         xhr.onreadystatechange = function (e) {
            // SUCCESS
            if (xhr.readyState === 4 && (xhr.status === 201 || xhr.status === 200)) {
               $scope.uploadSuccess = true;
               $scope.validate = false; // stop validating fields
               $timeout(function () {
                  $scope.uploadSuccess = false;
               }, 4000);
               initData();
            }
         };

         xhr.open('POST', url);
         xhr.send(formData);
      };
   }
]);
