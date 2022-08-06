app.controller('materialController', ['$scope', '$http', 'configValue', function ($scope, $http, configValue) {

   $http.post(configValue.apiUrl + 'materialStock', null, {
      timeout: 5000
   })
      .success(function (data, status, headers, config) {

         for (var x = 0; x < data.length; x++) {

            var material = data[x];

            material.items.sort(function (a, b) {
               return a.diameter - b.diameter;
            });

            for (var i = 0; i < material.items.length; i++) {
               var currentItem = material.items[i];
               var nextItem = material.items[i + 1];

               if (nextItem && currentItem.diameter === nextItem.diameter) {
                  currentItem.length += nextItem.length;
                  material.items.splice(1 + i, 1);
                  i--;
               }

               currentItem.length = parseFloat(currentItem.length).toFixed(1);
            }

         }


         $scope.materials = data;
      })
      .error(function (err, status, headers, config) {
         console.log('Could not get materials' + err);
      });
}]);
