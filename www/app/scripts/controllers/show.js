'use strict';

angular.module('wwwApp')
.controller('ShowCtrl', function ($scope, $http, $location) {

	$scope.user = {};
	$scope.errorMessage = '';

	$http.get('/api/profiles').success(function(user) {
		$scope.user = user;	
  });


});

