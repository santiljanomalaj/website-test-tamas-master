
app.controller('softwareStandardController', ['$scope', 'langFactory', '$timeout', function ($scope, langFactory, $timeout) {

   $scope.activeAddOn = 2;
   $scope.pricesFor = 'serverBox';
   $scope.lan = langFactory.getLanguage();

   if (langFactory.getLanguage() === 'de') $scope.overview_pie = 'overview_pie_deutsch';
   if (langFactory.getLanguage() === 'en') $scope.overview_pie = 'overview_pie_english';

   document.onkeydown = checkKey;
   document.addEventListener('touchstart', handleTouchStart, false);
   document.addEventListener('touchmove', handleTouchMove, false);
   var xDown = null;
   var yDown = null;


   $scope.prices = {
      monthly: {
         licenseErpCalc: {
            choosen: true,
            price: 189
         },
         freeUsers: {
            choosen: true,
            price: 0
         },
         extraUser: {
            choosen: false,
            quantity: 0,
            price: 29,
            total: 29
         },
         freeSupport: {
            choosen: true,
            price: 0
         },
         monitoring: {
            choosen: false,
            price: 4
         },
         yearlySystemUpdates: {
            choosen: true,
            price: 0
         },
         licenseModules: {
            choosen: false,
            price: 29,
            totalPrice: 0
         },
         mailImportModul: {
            choosen: false,
            price: 29,
            modul: true
         },
         shippingModul: {
            choosen: false,
            price: 29,
            modul: true
         },
         partnerModul: {
            choosen: false,
            price: 29,
            modul: true
         },
         accountingModul: {
            choosen: false,
            price: 29,
            modul: true
         },
         hardwareRepair: {
            choosen: false,
            price: 18
         }

      },
      oneOff: {
         installation: {
            choosen: true,
            price: 360
         },
         rfServerBox: {
            choosen: true,
            price: 960
         },
         firstTraining: {
            choosen: true,
            price: 0
         },
         onlineSeminar: {
            choosen: true,
            price: 129
         },
         trainingOnSpot: {
            choosen: false,
            price: 599
         }
      }
   };


   $scope.refreshTotal = function () {
      $scope.monthlyTotal = 0;
      $scope.oneOffTotal = 0;
      $scope.prices.monthly.licenseModules.totalPrice = 0;
      $scope.monthlyTotal = calculateTotalCosts('monthly');
      $scope.oneOffTotal = calculateTotalCosts('oneOff');
   };

   $scope.refreshTotal();

   function calculateTotalCosts (regularity) {
      var costs = 0;
      var extraUsers = 0;

      for (var key in $scope.prices[regularity]) {

         // hardwareRepair can be choosen only if rf-server-box is choosen too
         if (key === 'hardwareRepair' && !$scope.prices.oneOff.rfServerBox.choosen) {
            $scope.prices[regularity][key].choosen = false;
         }

         if (key === 'extraUser') {
            extraUsers = $scope.prices[regularity][key].quantity || 0;
            var total = extraUsers * $scope.prices[regularity][key].price;
            costs += total;
            if (total > 0) {
               $scope.prices[regularity][key].choosen = true;
            } else {
               $scope.prices[regularity][key].choosen = false;
            }
         } else {
            if ($scope.prices[regularity][key].choosen) {
               if ($scope.prices[regularity][key].modul) {
                  $scope.prices.monthly.licenseModules.totalPrice += $scope.prices[regularity][key].price;
               }

               costs += $scope.prices[regularity][key].price;

            }

         }

      }
      return costs;
   }



   $scope.jumpToDemoContact = function () {
      window.location.hash = '#contact-form-second';
   };


   function changeActiveAddOn (direction) {
      if (direction === 'left' && $scope.activeAddOn !== 1) {
         $scope.activeAddOn--;
         if (!$scope.$$phase) $scope.$apply();
      } else if (direction === 'right' && $scope.activeAddOn !== 4) {
         $scope.activeAddOn++;
         if (!$scope.$$phase) $scope.$apply();
      }
   }



   function checkKey (key) {
      key = key || window.event;

      if (key.keyCode === '37' || key.keyCode === 37) {
         // left Arrow
         changeActiveAddOn('left');
      } else if (key.keyCode === '39' || key.keyCode === 39) {
         // right Arrow
         changeActiveAddOn('right');
      }
   }



   function handleTouchStart (event) {
      xDown = event.touches[0].clientX;
      yDown = event.touches[0].clientY;
   };

   function handleTouchMove (event) {
      if (!xDown || !yDown) {
         return;
      }
      var xUp = event.touches[0].clientX;
      var yUp = event.touches[0].clientY;
      var xDifference = xDown - xUp;
      var yDifference = yDown - yUp;

      if (Math.abs(xDifference) > Math.abs(yDifference)) {
         /* most significant */
         if (xDifference > 0) {
            /* right swipe */
            changeActiveAddOn('right');
         } else {
            /* left swipe */
            changeActiveAddOn('left');
         }
      } else {
         if (yDifference > 0) {
            /* up swipe */
         } else {
            /* down swipe */
         }
      }
      /* reset values */
      xDown = null;
      yDown = null;
   };



   /*
   Animation states:

   productionIsFun
   softwareIsNoFun
   sendRequest
   requestsButNoOrder
   delayedDelivery
   haveAHaeart
   maierIsTheBoss
   roomForMore

   */


   var htmlObject, svg, d3svg, letter1, letter2, logo, box, hook, bubble, truck, truck2,
      paperMountains, mouse, chair, maierStandard, maierBoss, coffee, lamp, maierAnnoyed;

   $scope.numOffers = 0;
   $scope.numRequestsReceived = 0;
   // no automation
   var numRequestsButNoOrder = 4;
   var numDelayedDelivery = 18;
   var numhaveAHaeart = 35;
   var maxNumOfLetters = 40;
   // with automation
   var numRoomForMore = 14;
   var maxNumOfLettersWithAutomation = 16;

   var minimumNumToActivateAutomation = 5;

   var letter2overrideSlow = 1;
   var letter2overrideFast = 1;
   var box2overrideFast = 0.6;
   var box2overrideSlow = 1;

   var sendRequestIntervalTime = 12; // sec

   var creatingOffer = false;
   $scope.automationActive = false;
   $scope.messageState = '';



   // check iv everything is there, then init
   var initIternval = setInterval(function () {
      htmlObject = document.querySelector('#rf-animation-box');
      svg = htmlObject.contentDocument;
      if (svg.activeElement) svg = svg.activeElement; // firefox encapsultes the doc once more
      console.log('check animation with svg ', svg, d3);

      if (svg) {
         setTimeout(function () {
            initScene();
         }, 100);
         clearInterval(initIternval);
      }
   }, 300);

   // when svg is there
   function initScene () {
      d3svg = d3.select(svg);
      letter1 = d3svg.select('#letter1');
      letter2 = d3svg.select('#letter2');
      logo = d3svg.select('#logo');
      box = d3svg.select('#box');
      hook = d3svg.select('#hook');
      bubble = d3svg.select('#bubble');
      truck = d3svg.select('#truck');
      truck2 = truck.clone(true);
      truck2
         .attr('transform', getTranslationString(70, -45))
         .attr('opacity', 0);
      mouse = d3svg.select('#mouse');
      chair = d3svg.select('#chair');
      maierStandard = d3svg.select('#maier-standard');
      maierBoss = d3svg.select('#maier-boss');
      maierBoss
         .attr('transform', getTranslationString(-135, 378))
         .attr('opacity', 0);

      maierAnnoyed = d3svg.select('#maier-annoyed')
         .attr('transform', getTranslationString(-135, 378))
         .attr('opacity', 0);

      coffee = d3svg.select('#coffee');
      lamp = d3svg.select('#lamp');


      logo.attr('opacity', 0);
      bubble.attr('opacity', 0);

      paperMountains = [d3svg.select('#paperMountain')];
      paperMountains[0].attr('opacity', 0);
      var matrixString = 'matrix(0.11437975,0,0,0.11437975,';
      ['270.84918,703.51573)', '270.84918,620.51573)', '250.84918,720.51573)'].forEach(function (string) {
         var clone = paperMountains[0].clone(true);
         clone.attr('transform', matrixString + string);
         paperMountains.push(clone);
      });


      setTimeout(function () {
         sendRequests();
      }, 1500);
      setInterval(function () {
         checkRequestsAndProduce();
         $scope.checkPaperMountain();
         checkUserHasSentRequests();
      }, 300);


      $timeout(function () {
         $scope.messageState = 'productionIsFun';
      }, 500);
      $timeout(function () {
         $scope.messageState = 'softwareIsNoFun';
      }, 6000);
      $timeout(function () {
         $scope.messageState = 'sendRequest';
      }, 12000);
   }


   function checkRequestsAndProduce () {
      if (!creatingOffer && $scope.numRequestsReceived > 0) {
         creatingOffer = true;
         $scope.createOffer(function () {
            creatingOffer = false;
            $scope.numRequestsReceived--;
            $scope.numOffers++;
            // send a package all two offers
            if ($scope.numOffers > 1) {
               $scope.moveBox(function () {
                  $scope.numOffers -= 2;
               });
            }
         });
      }
   }

   function sendRequests () {
      $scope.sendRequest();
      setTimeout(function () {
         sendRequests();
      }, sendRequestIntervalTime * 1000);
   }

   $scope.sendRequest = function (callback) {
      callback = callback || function () {};

      if ($scope.automationActive) {
         if ($scope.numRequestsReceived > numRoomForMore) {
            $scope.messageState = 'roomForMore';
            addTruck();
         }
      } else {
         removeTruck();
         if ($scope.numRequestsReceived > numhaveAHaeart) {
            $scope.messageState = 'haveAHaeart';
            maierIsAnnoyed();
         } else if ($scope.numRequestsReceived > numDelayedDelivery) {
            $scope.messageState = 'delayedDelivery';
         } else if ($scope.numRequestsReceived > numRequestsButNoOrder) {
            $scope.messageState = 'requestsButNoOrder';
            throwMouse();
         }
      }

      limitNumOfRequestsWithAutomation();

      var letter1New = letter1.clone(true);
      letter1New
         .attr('transform', getTranslationString(92, 560))
         .attr('opacity', 0)
         .transition()
         .ease(d3.easeExp)
         .duration(900)
         .attr('transform', getTranslationString(160, 520))
         .attr('opacity', 1)
         .transition()
         .ease(d3.easeLinear)
         .duration(250)
         .attr('opacity', 0)
         .remove()
         .on('end', function () {
            if ($scope.numRequestsReceived < maxNumOfLetters) {
               $scope.numRequestsReceived++;
            }
            callback();
         });
      var bubbleNew = bubble.clone(true);
      bubbleNew
         .attr('opacity', 1)
         .transition()
         .ease(d3.easeLinear)
         .duration(500)
         .transition()
         .attr('opacity', 0)
         .remove();
   };

   function checkUserHasSentRequests () {
      if ($scope.numRequestsReceived > minimumNumToActivateAutomation) {
         $scope.automationProAllowed = true;
      }
   }

   function limitNumOfRequestsWithAutomation () {
      // limit the number of requests, after automation is activated
      if (maxNumOfLettersWithAutomation < $scope.numRequestsReceived && $scope.automationActive) {
         $scope.numRequestsReceived = maxNumOfLettersWithAutomation;
      }
   }

   $scope.createOffer = function (callback) {
      callback = callback || function () {};
      var eases, durations;
      // fast
      if ($scope.automationActive) {
         durations = calculateOptions([
            100,
            500,
            100,
            200
         ], letter2overrideFast);
         eases = [d3.easeExp, d3.easeExp];
      // slow
      } else {
         durations = calculateOptions([
            1200,
            3500,
            250,
            1500
         ], letter2overrideSlow);
         eases = [d3.easeLinear, slowStartd3Ease];
      }

      letter2
         .attr('transform', getTranslationString(160, 540))
         .attr('opacity', 0)
         .transition()
         .ease(eases[0])
         .duration(durations[0])
         .attr('opacity', 1)
         .attr('transform', getTranslationString(160, 540))
         .transition()
         .ease(eases[1])
         .duration(durations[1])
         .attr('transform', getTranslationString(86, 593))
         .transition()
         .ease(d3.easeLinear)
         .duration(durations[2])
         .attr('opacity', 0)
         .on('end', callback);

      hook
         .attr('transform', getTranslationString(35, 360))
         .attr('opacity', 0)
         .transition()
         .ease(d3.easeExp)
         .duration(durations[3])
         .attr('opacity', 1)
         .transition()
         .ease(d3.easeExp)
         .duration(durations[3])
         .attr('opacity', 0);
   };

   $scope.toggleAutomation = function (callback) {
      callback = callback || function () {};
      var fromOpacity = $scope.automationActive ? 1 : 0;
      var toOpacity = fromOpacity ? 0 : 1;
      $scope.automationActive = !$scope.automationActive;

      limitNumOfRequestsWithAutomation();

      // update message after activation
      if ($scope.automationActive) {
         $scope.messageState = 'maierIsTheBoss';
         maierIsTheBoss();

      // user deactivated automation => go back in states
      } else {
         $scope.messageState = 'sendRequest';
         maierIsNormal();
         removeTruck();
      }



      // allow immediate check for next offer, when automation is activated
      if ($scope.automationActive && creatingOffer) creatingOffer = false;
      logo
         .attr('opacity', fromOpacity)
         .transition()
         .ease(d3.easeLinear)
         .duration(500)
         .attr('opacity', toOpacity)
         .on('end', callback);
   };



   /* --------------------------  animation functions  ------------------------------ */

   $scope.moveBox = function (callback) {
      callback = callback || function () {};
      var durations;
      if ($scope.automationActive) {
         // fast
         durations = calculateOptions([
            50,
            250,
            50
         ], box2overrideFast);
      } else {
         // slow
         durations = calculateOptions([
            500,
            1500,
            250
         ], box2overrideSlow);
      }

      machineBlink();

      box
         .attr('transform', getTranslationString(-103, 52))
         .attr('opacity', 0)
         .transition()
         .ease(d3.easeLinear)
         .duration(durations[0])
         .attr('opacity', 1)
         .attr('transform', getTranslationString(-103, 52))
         .transition()
         .ease(d3.easeLinear)
         .duration(durations[1])
         .attr('transform', getTranslationString(-24, 95))
         .transition()
         .ease(d3.easeLinear)
         .duration(durations[2])
         .attr('opacity', 0)
         .on('end', callback);
   };

   var paperMountainAutoMode = 0;
   $scope.checkPaperMountain = function (callback) {
      callback = callback || function () {};
      [0, 4, 6, 8].forEach(function (num, index) {
         var opacity = ($scope.numRequestsReceived > num) ? 1 : 0;
         if ($scope.automationActive) {
            if (index > 0 && paperMountainAutoMode === 0) opacity = 0;
            if (paperMountainAutoMode > 0) opacity = 0;
            paperMountainAutoMode++;
         } else {
            paperMountainAutoMode = 0;
         }
         paperMountains[index]
            .attr('opacity', opacity);
      });
   };

   function machineBlink () {
      lamp
         .style('fill', 'white')
         .transition()
         .duration(250)
         .style('fill', 'orange');
   }

   function maierIsTheBoss () {
      removeAllMaiers();
      maierBoss
         .attr('opacity', 0)
         .transition()
         .ease(d3.easeLinear)
         .duration(400)
         .attr('opacity', 1);
   }

   function maierIsNormal () {
      removeAllMaiers();
      chair
         .attr('opacity', 1);

      maierStandard
         .attr('opacity', 1);

      coffee
         .attr('opacity', 1);
   }

   function maierIsAnnoyed () {
      removeAllMaiers();

      // coordinates
      /*
         before machine:  -113, 302
         in front of car: -30, 342
         on paper mountain: -100, 342
      */

      maierAnnoyed
         .attr('opacity', 1)
         .attr('transform', getTranslationString(-135, 378))
         .transition()
         .ease(d3.easeLinear)
         .duration(200)
         .attr('transform', getTranslationString(-155, 378))
         .transition()
         .ease(d3.easeLinear)
         .duration(200)
         .attr('transform', getTranslationString(-113, 302))
         .transition()
         .ease(d3.easeLinear)
         .duration(200)
         .attr('transform', getTranslationString(-30, 342))
         .transition()
         .ease(d3.easeLinear)
         .duration(200)
         .attr('transform', getTranslationString(-135, 378))
         .transition()
         .ease(d3.easeLinear)
         .duration(200)
         .attr('transform', getTranslationString(-155, 378))
         .transition()
         .ease(d3.easeLinear)
         .duration(200)
         .attr('transform', getTranslationString(-113, 302))
         .transition()
         .ease(d3.easeLinear)
         .duration(200)
         .attr('transform', getTranslationString(-30, 342))
         .transition()
         .ease(d3.easeLinear)
         .duration(200)
         .attr('transform', getTranslationString(-100, 342))
         .transition()
         .ease(d3.easeLinear)
         .duration(100)
         .attr('transform', getTranslationString(-102, 344))
         .transition()
         .ease(d3.easeLinear)
         .duration(100)
         .attr('transform', getTranslationString(-100, 342))
         .transition()
         .ease(d3.easeLinear)
         .duration(100)
         .attr('transform', getTranslationString(-102, 344))
         .transition()
         .ease(d3.easeLinear)
         .duration(100)
         .attr('transform', getTranslationString(-100, 342))
         .transition()
         .ease(d3.easeLinear)
         .duration(100)
         .attr('transform', getTranslationString(-102, 344))
         .transition()
         .ease(d3.easeLinear)
         .duration(100)
         .attr('transform', getTranslationString(-100, 342))
         .transition()
         .ease(d3.easeLinear)
         .duration(100)
         .attr('transform', getTranslationString(-102, 344))
         .transition()
         .ease(d3.easeLinear)
         .duration(100)
         .attr('transform', getTranslationString(-100, 342))
         .transition()
         .ease(d3.easeLinear)
         .duration(100)
         .attr('transform', getTranslationString(-102, 344))
         .transition()
         .ease(d3.easeLinear)
         .duration(100);
   }

   function removeAllMaiers () {
      maierAnnoyed
         .attr('opacity', 0);
      maierBoss
         .attr('opacity', 0);
      maierStandard
         .attr('opacity', 0);
      chair
         .attr('opacity', 0);
      coffee
         .attr('opacity', 0);
   }



   function throwMouse (callback) {
      callback = callback || function () {};
      mouse
         .attr('transform', getTranslationString(0, 0))
         .attr('opacity', 1)
         .transition()
         .ease(d3.easeLinear)
         .duration(800)
         .attr('transform', getTranslationString(400, 350))
         .attr('opacity', 0)
         .transition()
         .ease(d3.easeLinear)
         .duration(10)
         .attr('transform', getTranslationString(0, 0))
         .transition()
         .ease(d3.easeLinear)
         .duration(300)
         .attr('opacity', 1)
         .on('end', callback);
   }

   function addTruck () {
      truck2
         .attr('opacity', 0)
         .transition()
         .ease(d3.easeLinear)
         .duration(300)
         .attr('opacity', 1);
   }

   function removeTruck () {
      truck2
         .attr('opacity', 0);
   }


   /* --------------------------  helper functions  ------------------------------ */

   function getTranslationString (x, y) {
      return 'translate(' + x + ',' + y + ')';
   }

   function slowStartd3Ease (t) {
      return Math.pow(t, 8);
   }

   function calculateOptions (array, override) {
      array = array || [];
      override = override || 1;
      for (var i = 0; i < array.length; i++) {
         array[i] = array[i] * override;
      }
      return array;
   }

}]);
