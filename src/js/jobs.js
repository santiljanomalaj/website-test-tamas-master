app.controller('jobsController', ['$scope', '$http', 'langFactory', function ($scope, $http, langFactory) {
   $scope.lang = langFactory.getLanguage();

   $scope.jobList = [
      // {
      //    de: {
      //       OpenPositionHeading: 'Werkstudent(in) Webentwicklung',
      //       OpenPositionDescription: 'Entwicklung Front-End und Back-End diverser Softwaremodule. Sammle Praxiserfahrung im Bereich Industrie 4.0. Werksstudentenvertrag bis 20 Wochenstunden während der Vorlesungszeit. Vergütung: 15€ (Verhandlungsbasis) pro Stunde mit flexiblen Homeofficezeiten. ',
      //       YourTask1: 'Mitarbeit an unseren Webprojekten und an unseren Softwaremodulen',
      //       YourTask2: 'Arbeite um als Frontend Entwickler an User Experience',
      //       YourTask3: 'Lerne als Backend Entwickler mehr über Logik und Algorithmen',
      //       YourTask4: 'Arbeite mit Versionsverwaltung, Web Entwicklertools und  Automated Testing.',
      //       YourQualification1: 'erforderlich: Lernbereitschaft, Zuverlässigkeit und Humor',
      //       YourQualification2: 'erforderlich: sicheres Programmierer in JavaScript & solide Kenntnisse in HTML5, CSS und am besten AngularJS',
      //       YourQualification3: 'interessant: Erfahrung bei der Programmierung im Team. Erfahrung CAD/CAM, ERP, Interesse für Maschinenbau'
      //    },
      //    en: {
      //       OpenPositionHeading: 'Working student web development',
      //       OpenPositionDescription: 'Front- and Backend development of multiple software modules. Get familiar with Industry 4.0.Permanent employment, Full time - Munich area. 15€ (basis for negotiation) per hour with flexible home office times. Working student contract, a maximum of 20 hours per week during lectures.',
      //       YourTask1: 'Work on our web projects and on our software modules',
      //       YourTask2: 'Work as a frontend developer on the user experience',
      //       YourTask3: 'Learn about logic and algoritms as backend developer',
      //       YourTask4: 'Use versioncontrol, web dev tools and automated testing',
      //       YourQualification1: 'general: proven skills in JavaScript & and solid understanding of HTML5, CSS, ideally AngularJS',
      //       YourQualification2: 'crucial: willingness to learn and great humor',
      //       YourQualification3: 'interesting: experience programming in a team. Experience with CAD/CAM, ERP, passion for engineering discipline'
      //    }
      // }
      // ,
      // {
      //    de: {
      //       OpenPositionHeading: 'Entwickler(in)',
      //       OpenPositionDescription: 'Für unser Entwicklungsteam suchen wir Entwickler die sich gerne komplexen Problemen der Fertigung annehmen. Festanstellung, Vollzeit - Unterschleißheim. Vergütung:  Für den Fall, dass du keine Festanstellung möchtest, würden wir dich als Freiberufler für einen angemessenen Stundensatz entlohnen.',
      //       YourTask1: 'Arbeite selbstständig in Softwareprojekten für verschiedene Industriekunden',
      //       YourTask2: 'Entwickle mit an den Modulen unserer Standard Software "Automation Pro"',
      //       YourTask3: 'Sprich mit Kunden, dokumentiere Anforderungen in Tickets, arbeite an neuen Lösungsansätzen und setze sie um.',
      //       YourTask4: 'Agile Arbeitsweise. Arbeite mit Gitlab, Docker, automatischen Softwaretests und werde vertraut mit vielen Webframewerks wie d3 oder ThreeJS',
      //       YourQualification1: 'erforderlich: Zuverlässigkeit und Lernbereitschaft',
      //       YourQualification2: 'erforderlich: Erfahrung mit NodeJS, AngularJS, Bootstrap, git; selbstständige und strukturierte Arbeitsweise; Erfahrung in der Programmierung im Team',
      //       YourQualification3: 'interessant: Praktische Erfahrung im Fräsen, Drehen oder Blechbiegen; Erfahrung in der Qualitätssicherung von Software'
      //    },
      //    en: {
      //       OpenPositionHeading: 'Developer (m/f)',
      //       OpenPositionDescription: 'We are looking for developers to tackle complex problems of the digitized manufacturing process. Conception of features, designs + mockups. Development of features. Development of server software for operations. Debugging and quality assurance (continous integration). Salary:  In case you are looking for a freelance base cooperation, we would figure out an appropiate hourly quote.',
      //       YourTask1: 'Work self-reliant on custom Software projects for different clients in the machining industry',
      //       YourTask2: 'Help to improve the modules of our standard software "Automation Pro"',
      //       YourTask3: 'Talk to customers, specifiy issues, work on new solutions and program them.',
      //       YourTask4: 'Agile workflow. Work with Gitlab, Docker, automated Testing, get familiar with many other Webframeworks like d3, ThreeJS',
      //       YourQualification1: 'Experience with NodeJS, AngularJS, Bootstrap, Git. Independent and structured work ethic. Prior experience with programming together in a team',
      //       YourQualification2: 'The will to learn and improve. Reliability.',
      //       YourQualification3: 'Hands on experience of milling, turning or metal sheet bending. Experience in QA of software. '
      //    }
      // }


   ];



}]);
