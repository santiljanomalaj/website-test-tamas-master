app.controller('aboutUsController', ['$scope', '$http', 'langFactory', function ($scope, $http, langFactory) {
   $scope.lang = langFactory.getLanguage();
   // console.log($scope.lang);

   $scope.teamListNew = [
      {
         name: 'M.Sc. Felix Furtmayr',
         img: 'felix.png',
         de: {
            line1: 'Geschäftsführung,',
            line2: 'CAD Development',
            description: 'Unternehmer, Spezialist für Kalkulation, Konfiguration, IoT und automatische Ermittlung von Fertigungsstrategien mittels AI. UI und Marketingfachmann. Fullstack Developer und NodeJS Evangelist. Ingenieur Mechantronik. Gründer und Gesellschafter.'
         },
         en: {
            line1: 'CEO,',
            line2: 'CAD Developer',
            description: 'Entrepreneur, Expert for calculation, configuration, IoT and automated finding of productions strategies with AI methods. UI and marketing professional. Fullstack Developer and NodeJS Evangelist. Mechatronical Engineer. Founder and shareholder.'
         }
      }, {
         name: 'Andrea Sonnenberg',
         img: 'andreaSonnenberg.jpg',
         de: {
            line1: 'Assistenz der Geschäftsführung',
            description: 'Finanzplanung und Controlling, Rechnungswesen, Software Vertrieb und Messeorganisation. Langjährige Erfahrung in der Geschäftsführung, auch international. Vorbereitung von Entscheidungsgrundlagen, Planung, Durchführung und Koordination administrativer Abläufe, Vertragswesen, Personalmanagement.'
         },
         en: {
            line1: 'Management Assistant',
            description: 'Finance planning and controlling, accounting, software distribution und organisation of fairs and exhibitions. Extensive experience in management. National and international. Preparation of decision, planning, execute and coordinate administrative processes, contracts, human Resource management.'
         }
      }, {
         name: 'Torsten Förster',
         img: 'torstenFoerster.jpg',
         de: {
            line1: 'Vertriebsleitung Norddeutschland',
            description: 'Fachmann für CNC Fertigung und Logistik. Langjährige Erfahrung im Bereich der Projektsteuerung, Qualitätsplanung und Sicherung.Optmierung von Einkaufs- und Herstellungsprozessen.'
         },
         en: {
            line1: 'Sales Management, Northern Germany',
            description: 'Specialist in CNC manufacturing and logistics. Many years of experience in the field of project control, quality planning and assurance. Optimization of purchasing and manufacturing processes.'
         }
      },
      {
         name: 'M.Eng. Bernhard Römer',
         img: 'bernhardRoemer.jpg',
         de: {
            line1: 'Fertigungsleiter,',
            line2: 'CAM Development',
            description: 'Produktions- und Zerspanungsfachmann, Techniker, Ingenieur für Maschinenbau und zweiter Dreher des Jahres 2008. Maschinennahe Softwareentwicklung und automatische Erstellung von NC-Programmen. Gründer und Gesellschafter.'
         },
         en: {
            line1: 'Head of Production,',
            line2: 'CAM Developer',
            description: 'Specialist for production and cutting technology, technician and mechanical engineer. Second Lathe operator of the year 2008. Shop floor software development and automated generation of NC-programs. Founder and shareholder.'
         }
      },
      {
         name: 'Alexander Kohl',
         img: 'alexKohl.jpg',
         de: {
            line1: 'Full Stack Development',
            description: 'Design, UI und Frontend Experte. NodeJS Entwickler. Gelernter Konstruktionsmechaniker und Goldschmied.'
         },
         en: {
            line1: 'Full Stack Development',
            description: 'Design, UI und Frontend Expert. NodeJS Developer. Construction mechanic and Goldsmith.'
         }
      },

      {
         name: 'B.Sc. Uli Köhler',
         img: 'uliKoehler.jpg',
         de: {
            line1: 'Backend Development',
            description: 'Programmiergenie, Experte in Regelungstechnik und Elektronik. CAD-Entwicklung und Erstellung komplexer Algorithmen und Architekturen. Bioinformatiker.'
         },
         en: {
            line1: 'Backend Development',
            description: 'Programming genius, expert for control engineering and electronics. CAD development and development of complexe algorithms and architectures. Scientist for computation and biology.'
         }
      }, {
         name: 'M.Eng. Maximilian Kanschat',
         img: 'maximilianKanschat.jpg',
         de: {
            line1: 'Full Stack Development',
            description: 'Geoinformatiker mit Erfahrung im Bereiche Robotik und IoT. Angular und NodeJS Entwickler.'
         },
         en: {
            line1: 'Full Stack Development',
            description: 'Geoinformatic with experience in the fields robtic and IoT. Angular and NodeJS developer.'
         }
      },
      {
         name: 'M.B.A. Jenette Lagueras',
         img: 'jenLagueras.jpg',
         de: {
            line1: 'Projektmanager',
            description: 'In ihrer derzeitigen Position bei Rapidfacture ist Jenette für Projektmanagement, Front-End-Programmierung, Recherche und Outsourcing zuständig, um den reibungslosen Betrieb des Unternehmens täglich sicherzustellen.'
         },
         en: {
            line1: 'Project Manager',
            description: 'In her current role in Rapidfacture, Jenette does project management, front-end programming and specializes in research and outsourcing, to ensure the smooth running of the company on a daily basis.'
         }
      }
   ];


}]);
