'use strict';

var api = require('./controllers/api'),
    index = require('./controllers'),
    users = require('./controllers/users'),
    pdf = require('./controllers/pdf'),
    edit = require('./controllers/edit'),
    profiles = require('./controllers/profiles'),
    skills = require('./controllers/skills'),
    experiences = require('./controllers/experiences'),
    degrees = require('./controllers/degrees'),
    languages = require('./controllers/languages'),
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

  app
    .post('/api/profiles', profiles.create)
    .get('/api/profiles', profiles.show)
    .put('/api/profiles', profiles.update)
  ;

  app
    .post('/api/skills', skills.create)
    .put('/api/skiils/:id', skills.update)
    .delete('/api/skills/:id', skills.delete)
  ;

  app
    .post('/api/experiences', experiences.create)
    .put('/api/experiences/:id', experiences.update)
    .delete('/api/experiences/:id', experiences.delete)
  ;

  app
    .post('/api/degrees', degrees.create)
    .delete('/api/degrees/:id', degrees.delete)

  app.post('/api/languages', languages.create);

  app.post('/api/session', session.login);
  app.del('/api/session', session.logout);

  app.post('/api/avatar', edit.avatar);

  app.get('/export', pdf.export);

  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials);
  app.get('/*', middleware.setUserCookie, index.index);

};
