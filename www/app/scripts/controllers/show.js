'use strict';

angular.module('wwwApp')
.controller('ShowCtrl', function ($scope, $http, $location) {

	$scope.user = {};
	$scope.errorMessage = '';

	$http.get('/api/profiles').success(function(user) {
		$scope.user = {
			email: user.email,
			name: user.lastName,
			firstname: user.fisrtName,
			phone: user.phoneNumber,
			intitule: user.jobName,
			age: user.age,
			adress: user.adress,
			city: user.city,
			cp: user.cp,
			avatar: user.avatar,
			facebook: user.facebook,
			twitter: user.twitter,
			google: user.google,
			description: user.description,
			skills : [{
      			name: "PHP",
      			description: "lol"
    		},{
      			name: "JS",
      			description: "fdhdfghrsfdhg"
    		}],
    		diplomes : [{
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
		};
		
    });


});

