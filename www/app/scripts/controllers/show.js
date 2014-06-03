'use strict';

angular.module('wwwApp')
.controller('ShowCtrl', function ($scope, $http, $location) {

	$scope.user = {};
	$scope.errorMessage = '';

	$http.get('/api/profiles').success(function(user) {

		$scope.user = user;

		// Mock
		$scope.user.skills = [{
      			name: "PHP",
      			description: "lol"
    		},{
      			name: "JS",
      			description: "fdhdfghrsfdhg"
    		}];

    	$scope.user.diplomes = [{
      			name: "BAC STI",
      			year1: 2000,
      			year2: 2002,
      			description: "Mon BAC"
    		},{
      			name: "BTS IG",
      			year1: 2010,
      			year2: 2011,
      			description: "Mon BTS"
    		}]
		
    });


});

