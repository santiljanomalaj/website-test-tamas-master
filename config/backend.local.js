/* Configuration */

// Backend
// module.exports = {
//    port: 4001,
//    mail: {
//       mailer: {
//          transporter: {
//             host: 'smtp.rapidfacture.com',
//             requiresAuth: true,
//             tls: {
//                rejectUnauthorized: false
//             },
//             auth: {
//                user: 'testuser',
//                pass: 'testpassword'
//             }
//          },
//          translationsPath: 'config/mail/translations',
//          templatesPath: 'config/mail/templates',
//          defaultLanguage: 'de'
//       },
//       contactMail: 'info@rapidfacture.com',
//       softwareMail: 'software@rapidfacture.com'
//    }
// };

//test
module.exports = {
   port: 4001,
   mail: {
      mailer: {
         transporter: {
            host: 'smtp.gmail.com',
            requiresAuth: true,
            tls: {
               rejectUnauthorized: false
            },
            auth: {
               user: 'greatmother489@gmail.com',
               pass: 'kgs775!@%JHJ'
            }
         },
         translationsPath: 'config/mail/translations',
         templatesPath: 'config/mail/templates',
         defaultLanguage: 'de'
      },
      contactMail: 'darkbomb2345@outlook.com',
      softwareMail: 'software@rapidfacture.com'
   }
};
