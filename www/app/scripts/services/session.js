'use strict';

angular.module('wwwApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
