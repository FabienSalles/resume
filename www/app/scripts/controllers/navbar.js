'use strict';

angular.module('wwwApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Accueil',
      'link': '/'
    }, {
      'title': 'Editer',
      'link': '/edit',
    }, {
      'title': 'Voir',
      'link': '/show'
    },{
      'title': 'Exporter',
      'link': '/pdf'
    }];
    
    $scope.logout = function() {
      Auth.logout()
      .then(function() {
        $location.path('/login');
      });
    };
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
