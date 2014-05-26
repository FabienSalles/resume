'use strict';

var api = require('./controllers/api'),
    index = require('./controllers'),
    users = require('./controllers/users'),
    pdf = require('./controllers/pdf'),
    edit = require('./controllers/edit'),
    profiles = require('./controllers/profiles'),
    session = require('./controllers/session');

var middleware = require('./middleware');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
  app.get('/api/awesomeThings', api.awesomeThings);

  app.post('/api/users', users.create);
  app.put('/api/users', users.changePassword);
  app.get('/api/users/me', users.me);
  app.get('/api/users/:id', users.show);

  app.post('/api/profiles', profiles.create);
  app.get('/api/profiles/me', profiles.me);
  app.get('/api/profiles/:id', profiles.show);
  app.put('/api/profiles/:id', profiles.update);

  app.post('/api/session', session.login);
  app.del('/api/session', session.logout);

  app.post('/api/avatar', edit.avatar);

  app.get('/export', pdf.export);

  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials);
  app.get('/*', middleware.setUserCookie, index.index);

};
