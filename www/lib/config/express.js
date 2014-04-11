'use strict';

var express        = require('express'),
    path           = require('path'),
    config         = require('./config'),
    passport       = require('passport'),
    logger         = require('morgan'),
    favicon        = require('static-favicon'),
    errorHandler   = require('errorhandler'),
    methodOverride = require('method-override'),
    cookieParser   = require('cookie-parser'),
    bodyParser     = require('body-parser'),
    session        = require('express-session'),
    mongoStore     = require('connect-mongo')({session: session});

/**
 * Express configuration
 */
module.exports = function(app) {
  var env = process.env.NODE_ENV || 'development';

  if ('development' === env) {
    app.use(require('connect-livereload')());

    // Disable caching of scripts for easier testing
    app.use(function noCache(req, res, next) {
      if (req.url.indexOf('/scripts/') === 0) {
        res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.header('Pragma', 'no-cache');
        res.header('Expires', 0);
      }
      next();
    });

    app.use(express.static(path.join(config.root, '.tmp')));
    app.use(express.static(path.join(config.root, 'app')));
    app.use(errorHandler());
    app.set('views', config.root + '/app/views');
  }

  if ('production' === env) {
    app.use(favicon(path.join(config.root, 'public', 'favicon.ico')));
    app.use(express.static(path.join(config.root, 'public')));
    app.set('views', config.root + '/views');
  }

  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'ejs');
  app.use(logger('dev'));
  app.use(bodyParser());
  app.use(methodOverride());
  app.use(cookieParser());

  // Persist sessions with mongoStore
  app.use(session({
    secret: 'angular-fullstack secret',
    store: new mongoStore({
      url: config.mongo.uri,
      collection: 'sessions'
    })
  }));

  //use passport session
  app.use(passport.initialize());
  app.use(passport.session());
};
