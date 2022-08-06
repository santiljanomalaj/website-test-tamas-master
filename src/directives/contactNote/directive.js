/** Notification directive
 * @desc
 *  note fixed on the screen
 *
 * @version 0.1.0
 *
 * @example
 *  <rf-fixed-note></rf-fixed-note>
 */

app.directive('rfContactNote', [function () {
   return {
      restrict: 'E', // attribute or element
      templateUrl: 'directives/contactNote/template.html',
      link: function ($scope, elem, attr, ctrl) { }
   };
}
]);
