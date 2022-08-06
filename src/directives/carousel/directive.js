/** Notification directive
 * @desc
 *  note fixed on the screen
 *
 * @version 0.1.0
 *
 * @example
 * <div class="rf-carousel" autoplay>
     <button class="prev">
         <span class="glyphicon glyphicon-chevron-left"></span>
     </button>
     <ol class="content">
         <li>
             <img src="img/slider/a.jpg" alt="[[couplingPins]]">
             <ul class="text">
             Text to pic
             </ul>
         </li>
      </ol>
   </div>
 *
 */

app.directive('rfCarousel', [function () {
   return {
      restrict: 'C', // attribute or element
      link: function ($scope, elem, attr, ctrl) {

         // autoplay: enabled as default
         var autoplayDisabled = (attr.autoplay === 'false');

         // slider animation
         var carouselInterval;

         function carousel (e) {
            // console.log('elem', elem);
            var box = elem[0];
            if (!box) {
               return;
            }
            var next = box.querySelector('.next'),
               prev = box.querySelector('.prev'),
               items = box.querySelectorAll('ol > li'),
               intervalTime = 5000, // ms
               counter = 0,
               amount = items.length,
               current = items[0];

            function navigate (direction) { // move to next/previous picture
               current.classList.remove('current');
               counter = counter + direction;
               if (direction === -1 &&
                     counter < 0) {
                  counter = amount - 1;
               }
               if (direction === 1 &&
                     !items[counter]) {
                  counter = 0;
               }
               current = items[counter];
               current.classList.add('current');
            }

            if (!autoplayDisabled) { // spin the carousel in interval
               carouselInterval = setInterval(function () {
                  navigate(1);
               }, intervalTime);
            }

            next.addEventListener('click', function (ev) {
               navigate(1);
            });
            prev.addEventListener('click', function (ev) {
               navigate(-1);
            });
            box.addEventListener('click', function (ev) { // stopp interval, when user clicked
               clearInterval(carouselInterval);
            });
            navigate(0);

         };

         setTimeout(function () {
            carousel();
         }, 500);


      }
   };
}
]);
