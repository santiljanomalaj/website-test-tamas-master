app.controller('designController', ['$scope', 'langFactory', function ($scope, langFactory) {

   var lan = langFactory.getLanguage();

   if (lan === 'de') {
      $scope.navigationItems = [{
         group: 'Werkstoffe',
         name: 'Festigkeit Blankstahl',
         tip: 'Festigkeit von Blankstählen',
         standard: 'DIN EN 10277',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/de/din10277/iframe'
      }, {
         group: 'Werkstoffe',
         name: 'Festigkeit Baustahl',
         tip: 'Festigkeit von Baustählen',
         standard: 'DIN EN 10025',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/de/din10025/iframe'
      }, {
         group: 'Werkstoffe',
         name: 'Festigkeit Grauguss',
         tip: 'Festigkeit von Grauguss',
         standard: 'DIN EN 1561',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/de/din1561/iframe'
      }, {
         group: 'Werkstoffe',
         name: 'Härterechner',
         tip: 'Härteumrechner, Umrechnung nach Werksnorm',
         standard: 'Werksnorm',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/de/haerteumrechner/iframe'
      }, {
         group: 'Werkstoffe',
         name: 'Sphäroguss',
         tip: 'Festigkeit von Gusseisen mit Kugelgraphit',
         standard: 'DIN EN 1563',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/de/din1563/iframe'
      }, {
         group: 'Werkstoffe',
         name: 'Vergütungsstahl',
         tip: 'Festigkeit von Vergütungsstählen',
         standard: 'DIN EN 10083',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/de/din10083/iframe'
      }, {
         group: 'Werkstoffe',
         name: 'Wöhlerlinie',
         tip: 'Wöhlerlinie, Festigkeit nach Werksnorm',
         standard: 'Werksnorm',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/de/woehlerlinie/iframe'
      }, {
         group: 'Maschinenelemente',
         name: 'Passung',
         tip: 'Toleranzen und Passungen',
         standard: 'DIN EN ISO 286',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/de/din286/iframe'
      }, {
         group: 'Maschinenelemente',
         name: 'Keilwelle',
         tip: 'Maße von Keilwellen',
         standard: 'DIN 14',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/de/din14/iframe'
      }, {
         group: 'Maschinenelemente',
         name: 'Querpressverband',
         tip: 'Nachweis von Querpressverbänden',
         standard: 'DIN 7190',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/de/din7190/iframe'
      }, {
         group: 'Maschinenelemente',
         name: 'Scheibenfeder',
         tip: 'Maße von Scheibenfedern',
         standard: 'DIN 6888',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/de/din6888/iframe'
      }, {
         group: 'Maschinenelemente',
         name: 'Schrumpfscheibe',
         tip: 'Geometrie und Auswahl von Schrumpfscheiben, Auswahl nach Werksnorm',
         standard: 'Werksnorm',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/de/schrumpfscheibe/iframe'
      }, {
         group: 'Maschinenelemente',
         name: 'Spannsatz',
         tip: 'Geometrie und Auswahl von Spannsätzen, Auswahl nach Werksnorm',
         standard: 'Werksnorm',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/de/spannsatz/iframe'
      }, {
         group: 'Maschinenelemente',
         name: 'Welle',
         tip: 'Nachweis von Wellen',
         standard: 'DIN 743',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/de/din743/iframe'
      }, {
         group: 'Passfeder',
         name: 'Maße',
         tip: 'Maße von Passfedern',
         standard: 'DIN 6885',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/de/din6885/iframe'
      }, {
         group: 'Passfeder',
         name: 'Nachweis ausführlich',
         tip: 'Nachweis von Passfedern (ausführlich)',
         standard: 'DIN 6892 B',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/de/din6892b/iframe'
      }, {
         group: 'Passfeder',
         name: 'Nachweis (einfach)',
         tip: 'Nachweis von Passfedern (einfach)',
         standard: 'DIN 6892 C',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/de/din6892c/iframe'
      }, {
         group: 'Zahnrad',
         name: 'Bezugsprofile',
         tip: 'Bezugsprofile von Zahnrädern',
         standard: 'DIN 867',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/de/din867/iframe'
         /* Calculator not provided by mechanicalcheck up to now
      }, {
         group: 'Maschinenelemente',
         name: 'Zahnrad',
         tip: 'Toleranzen von Zahnrädern',
         standard: 'Toleranzen nach DIN 3961',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/de/din3961/iframe'
         */
      }, {
         group: 'Zahnrad',
         name: 'Toleranz Achsabstand',
         tip: 'Toleranzen für Achsabstände von Zahnrädern',
         standard: 'DIN 3964',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/de/din3964/iframe'
      }, {
         group: 'Zahnrad',
         name: 'Toleranz Zahndicke',
         tip: 'Toleranzen für Zahndicken von Zahnrädern',
         standard: 'DIN 3967',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/de/din3967/iframe'
      }, {
         group: 'Zahnrad',
         name: 'Profil Werkzeug',
         tip: 'Bezugsprofile von Werkzeugen für Zahnräder',
         standard: 'DIN 3972',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/de/din3972/iframe'
      }, {
         group: 'Zahnrad',
         name: 'Geometrie',
         tip: 'Geometrie von Zahnrädern',
         standard: 'DIN ISO 21771',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/de/din21771/iframe'
      }, {
         group: 'Zahnrad',
         name: 'Profil',
         tip: 'Bezugsprofile für Zahnräder',
         standard: 'ISO 53',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/de/iso53/iframe'
      }, {
         group: 'Zahnrad',
         name: 'Flanken Toleranz',
         tip: 'Toleranzen für die Flanken von Zahnrädern',
         standard: 'ISO 1328',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/de/iso1328/iframe'
         /* Calculator not provided by mechanicalcheck up to now
      }, {
         group: 'Maschinenelemente',
         name: 'Zahnrad',
         tip: 'Nachweis von Zahnrädern',
         standard: 'ISO 6336',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/de/iso6336/iframe'
        */
      }];
   } else if (lan === 'en') {
      $scope.navigationItems = [{
         group: 'Materials',
         name: 'Bright steel',
         tip: 'Strength of bright steels',
         standard: 'DIN EN 10277',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/en/din10277/iframe'
      }, {
         group: 'Materials',
         name: 'Grey cast iron',
         tip: 'Strength of grey cast iron',
         standard: 'DIN EN 1561',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/en/din1561/iframe'
      }, {
         group: 'Materials',
         name: 'Hardness-converter',
         tip: 'Hardness-converter',
         standard: 'Factory standard',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/en/hardness-converter/iframe'
      }, {
         group: 'Materials',
         name: 'Quenched steel',
         tip: 'Strength of quenchd and tempered steels',
         standard: 'DIN EN 10083',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/en/din10083/iframe'
      }, {
         group: 'Materials',
         name: 'S-N-curve',
         tip: 'S-N-curve',
         standard: 'Factory standard',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/en/s-n-curve/iframe'
      }, {
         group: 'Materials',
         name: 'Ductile iron',
         tip: 'Strength of spheroidal graphite cast iron',
         standard: 'DIN EN 1563',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/en/din1563/iframe'
      }, {
         group: 'Materials',
         name: 'Structural steel',
         tip: 'Strength of structural steels',
         standard: 'DIN EN 10025',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/en/din10025/iframe'
      }, {
         group: 'Machine element',
         name: 'Fits',
         tip: 'Tolerances and fits',
         standard: 'DIN EN ISO 286',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/en/din286/iframe'
      }, {
         group: 'Machine element',
         name: 'Interference fit',
         tip: 'Verification of interference fits',
         standard: 'DIN 7190',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/en/din7190/iframe'
      }, {
         group: 'Machine element',
         name: 'Locking-assembly',
         tip: 'Geometry and selection of locking-assemblies',
         standard: 'Factory standard',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/en/locking-assembly/iframe'
      }, {
         group: 'Machine element',
         name: 'Mechanical shaft',
         tip: 'Verification of shafts',
         standard: 'DIN 743',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/en/din743/iframe'
      }, {
         group: 'Machine element',
         name: 'Shrink-disc',
         tip: 'Geometry and selection of shrink-discs',
         standard: 'Factory standard',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/en/shrink-disc/iframe'
      }, {
         group: 'Machine element',
         name: 'Splined shaft',
         tip: 'Geometry of splined shafts',
         standard: 'DIN 14',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/en/din14/iframe'
      }, {
         group: 'Machine element',
         name: 'Woodruff key',
         tip: 'Geometry of Woodruff keys',
         standard: 'DIN 6888',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/en/din6888/iframe'
      }, {
         group: 'Parallel key',
         name: 'Geometry',
         tip: 'Geometry of Parallel keys',
         standard: 'DIN 6885',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/en/din6885/iframe'
      }, {
         group: 'Parallel key',
         name: 'Verification (professional)',
         tip: 'Verification of Parallel keys (professional)',
         standard: 'DIN 6892 B',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/en/din6892b/iframe'
      }, {
         group: 'Parallel key',
         name: 'Verification (easy)',
         tip: 'Verification of Parallel keys (easy)',
         standard: 'DIN 6892 C',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/en/din6892c/iframe'
      }, {
         group: 'Gears',
         name: 'Profiles',
         tip: 'Reference profiles of gears',
         standard: 'DIN 867',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/en/din867/iframe'
         /* Calculator not provided by mechanicalcheck up to now
         }, {
            group: 'Machine element',
            name: 'Gears',
            tip: 'Tolerances of gears',
            standard: 'DIN 3961',
            href: 'https://www.mechanicalcheck.com/for/rapidfacture/en/din3961/iframe'
          */
      }, {
         group: 'Gears',
         name: 'Centre distance tolerances',
         tip: 'Tolerances for centre distances of gears',
         standard: 'DIN 3964',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/en/din3964/iframe'
      }, {
         group: 'Gears',
         name: 'Tolerances tooth thickness',
         tip: 'Tolerances for tooth thickness of gears',
         standard: 'DIN 3967',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/en/din3967/iframe'
      }, {
         group: 'Gears',
         name: 'Profiles cutting tools',
         tip: 'Reference profiles for gear-cutting tools',
         standard: 'DIN 3972',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/en/din3972/iframe'
      }, {
         group: 'Gears',
         name: 'Geometry',
         tip: 'Geometry of Gearss',
         standard: 'DIN ISO 21771',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/en/din21771/iframe'
      }, {
         group: 'Gears',
         name: 'Reference profiles',
         tip: 'Reference profiles of gears',
         standard: 'ISO 53',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/en/iso53/iframe'
      }, {
         group: 'Gears',
         name: 'Tolerances flanks',
         tip: 'Tolerances for flanks of gears',
         standard: 'ISO 1328',
         href: 'https://www.mechanicalcheck.com/for/rapidfacture/en/iso1328/iframe'
         /* Calculator not provided by mechanicalcheck up to now
         }, {
            group: 'Machine element',
            name: 'Gears',
            tip: 'Verification of gears',
            standard: 'ISO 6336',
            href: 'https://www.mechanicalcheck.com/for/rapidfacture/en/iso6336/iframe'
            */
      }];
   } else {
      console.log('wrong_language');
   }


   $scope.navigationItems = $scope.navigationItems.sort(function (a, b) {
      return (a.group > b.group) - (a.group < b.group);
   });


   // sidebar init
   $scope.activeSite = $scope.navigationItems[0].name; // set the name

   // set the iframe
   var iframe = document.getElementById('main-iframe');
   iframe.src = $scope.navigationItems[0].href;

}]);
