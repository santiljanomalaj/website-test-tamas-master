/** Filters
 *
 * @example in HTML:
 *  {{item.price | currency}}
 *
 * @example in JS:
 *  var description = $filter('rfDrawingDescriptionString');
 */



app

   .filter('unsafe', ['$sce', function ($sce) {
      return function (html) {
         return $sce.trustAsHtml(html);
      };
   }])


;
