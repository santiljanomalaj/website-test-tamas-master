/* eslint no-unused-vars: off  */
function slideShow () {
   var itemsClass = '.testimonials-container';
   var items = document.querySelector(itemsClass).children;
   var duration = 7000;
   var currentItem = 0;
   var currentClass = items[0].className;
   items[0].className += ' fadeIn';
   setInterval(function () {
      var lastItem = currentItem;
      currentItem++;
      if (currentItem >= items.length) {
         currentItem = 0;
      }
      items[lastItem].className = currentClass;
      items[currentItem].className += ' fadeIn';
   }, duration);
}
