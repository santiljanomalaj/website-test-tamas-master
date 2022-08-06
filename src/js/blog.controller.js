app.controller('blogController', ['$scope', '$http', function ($scope, $http) {


   $scope.blogRecords = [];
   $scope.categories = [];
   $scope.years = [];
   $scope.currentFilter = '';


   $http.get('blogList.json').success(function (data) {
      $scope.blogRecords = data;
      // console.log($scope.blogRecords);


      $scope.categories = [];
      $scope.years = [];

      // extract years and categories
      $scope.blogRecords.forEach(function (record) {


         // new categeory => add it to list
         if (record.categories) {
            record.categories.forEach(function (categeoryName) {
               if ($scope.categories.indexOf(categeoryName) === -1) {
                  $scope.categories.push(categeoryName);
               }
            });
         }

         // new year => add it to list
         if (record.date) {
            var year = record.date.slice(-4);
            if ($scope.years.indexOf(year) === -1) {
               $scope.years.push(year);
            }
         }

      });

      // console.log('$scope.categories', $scope.categories);
      // console.log('$scope.years', $scope.years);

   });

}]);


app.filter('unsafe', function ($sce) {
   return $sce.trustAsHtml;
});
