'use strict';

var NodePDF = require('nodepdf');

exports.export = function (req, res) {

    console.log("express exportpdf");  

    // last argument is optional, sets the width and height for the viewport to render the pdf from. (see additional options)
    var pdf = new NodePDF('http://20.20.20.15:9000/show', 'cv.pdf', {
        'viewportSize': {
            'width': 1440,
            'height': 900
        }, 
        'args': '--debug=true'
    });

    pdf.on('error', function(msg){
        console.log(msg);
    });

    pdf.on('done', function(pathToFile){
        console.log(pathToFile);
    });

    // listen for stdout from phantomjs
    pdf.on('stdout', function(stdout){
         // handle
    });

    // listen for stderr from phantomjs
    pdf.on('stderr', function(stderr){
        // handle
    });

    res.download('./cv.pdf');


};