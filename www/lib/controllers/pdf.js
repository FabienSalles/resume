'use strict';


//var wkhtml = require('node-wkhtml');
var path = require('path');
var mime = require('mime');
var fs = require('fs');
var htmlToPdf = require('wkhtmltopdf');
var createWriteStream = require('fs').createWriteStream;



/**
 * Login
 */
exports.export = function (req, res) {

  console.log("express exportpdf");



    // var result = htmlToPdf(res.render('pdf/index', { title: 'CV nom' })).pipe(res);

  
    //   res.setHeader('Content-Type', 'application/pdf');
    //   res.setHeader("Content-Disposition", "attachment; filename=" + "MonCV.pdf");
    //   res.end(result, 'binary');

  // res.send(html);

  // var user = req.body;

  //console.log(typeof res);

  // On recupere toute les infos de l'utilisateur qu'on passe a la vue
  //res.render('pdf/index', { title: 'CV nom' }, function(err, html) {

      //htmlToPdf(html, { output: 'temp.pdf' } ).pipe(res);

      //res.setHeader('Content-Type', 'application/pdf');
      //res.setHeader("Content-Disposition", "attachment; filename=" + "MonCV.pdf");
      //htmlToPdf(html).pipe(res);
      

      //console.log(html);

//    htmlToPdf(html, { output: 'temp.pdf' } ).pipe(res);

    // var file = 'temp.pdf';
    // var filename = path.basename(file);
    // var mimetype = mime.lookup(file);

    // res.setHeader('Content-disposition', 'attachment; filename=' + "MonCV.pdf");
    // res.setHeader('Content-type', mimetype);

    // var filestream = fs.createReadStream(file);
    // //console.log(res);
    // filestream.pipe(res);


    // });







   // res.download("temp.pdf", "MonCV.pdf", function(err){
   //  console.log("dfsd");
   //       if (err) {
   //          // handle error, keep in mind the response may be partially-sent
   //          // so check res.headerSent
   //          console.log(err);
   //        } else {
   //          // decrement a download credit etc
   //        }
   //    });


  res.download('temp.pdf');

};