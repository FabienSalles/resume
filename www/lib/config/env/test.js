'use strict';

var fs = require('fs'),
  path = require('path')
;

// Bootstrap models
// Model BDD

var modelsPath = path.join(__dirname, '../../models/');
fs.readdirSync('lib/models').forEach(function (file) {
  require(modelsPath + file);
});

module.exports = {
  env: 'test',
  mongo: {
    uri: 'mongodb://localhost/fullstack-test'
  }
};
