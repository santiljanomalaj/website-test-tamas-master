/** Notification directive
 * @desc
 *  note fixed on the screen
 *
 * @version 0.1.0
 *
 * @example
 *  <rf-software-note></rf-software-note>
 */

app.directive('rfSoftwareNote', [function () {
   return {
      restrict: 'E', // attribute or element
      templateUrl: 'directives/softwareNote/template.html',
      link: function ($scope, elem, attr, ctrl) {

         // $scope.showNote = true;

      }
   };
}
]);
