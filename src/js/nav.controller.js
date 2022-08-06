app.controller('navController', ['$scope', 'langFactory', function ($scope, langFactory) {


   var url = window.location.href;
   // do not use angulars $location here as it breaks anker links on the page!

   var urlAtributs = url.split('/');
   var urlString = '';
   $scope.lan = langFactory.getLanguage();

   for (var i = 4; i < urlAtributs.length; i++) {
      urlString += '/' + urlAtributs[i];
   }

   $scope.collapsedNav = '';
   $scope.smallCollapsedNav = '';

   $scope.thisPage = urlString;

   if (url.indexOf('software') >= 0) {
      $scope.state = 'software';
   } else {
      $scope.state = 'production';
   }

   $scope.closeNav = function () {
      $scope.collapsedNavCompany = false;
      $scope.collapsedNavProduction = false;
      $scope.collapsedNavSoftware = false;
      $scope.toggle = false;
   };

   $scope.collapse = function (name) {
      if ($scope.collapsedNav === name) $scope.collapsedNav = '';
      if ($scope.collapsedNav !== name) $scope.collapsedNav = name;
   };

   $scope.collapseSmall = function (name) {
      if ($scope.smallCollapsedNav === name) {
         $scope.smallCollapsedNav = '';
      } else if ($scope.smallCollapsedNav !== name) $scope.smallCollapsedNav = name;
   };

   $scope.holdCollapse = function (mouseVariant, name) {
      if (mouseVariant === 'leave') {
         $scope.collapsedNav = '';
         $scope.toggle = false;
      } else {
         $scope.collapsedNav = name;
      }
   };


}]);
