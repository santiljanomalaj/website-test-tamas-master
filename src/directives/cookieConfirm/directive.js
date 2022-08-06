/** cookie confirm directive
 *
 * @version 0.1.0
 *
 * @example
 *  <rf-cookie-confirm></rf-cookie-confirm>
 */

app.directive('rfCookieConfirm', [function () {
   return {
      restrict: 'E', // attribute or element
      templateUrl: 'directives/cookieConfirm/template.html',
      link: function ($scope, elem, attr, ctrl) {
         $scope.hidebanner = window.localStorage.getItem('cookieConfirm');

         $scope.confirm = function () {
            $scope.hidebanner = true;
            window.localStorage.setItem('cookieConfirm', 'true');
         };

      }
   };
}
]);
