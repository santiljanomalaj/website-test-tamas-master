/** contact person directive
 *
 * @version 0.1.0
 *
 * @example
 *  <rf-contact-torsten></rf-contact-torsten>
 */

app.directive('rfContactTorsten', [function () {
   return {
      restrict: 'E', // attribute or element
      templateUrl: 'directives/contactTorsten/template.html',
      link: function () { }
   };
}
]);
