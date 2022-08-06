/** contact person directive
 *
 * @version 0.1.0
 *
 * @example
 *  <rf-contact-felix></rf-contact-felix>
 */

app.directive('rfContactFelix', [function () {
   return {
      restrict: 'E', // attribute or element
      templateUrl: 'directives/contactFelix/template.html',
      link: function () { }
   };
}
]);
