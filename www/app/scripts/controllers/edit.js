'use strict';

angular.module('wwwApp')
  .controller('EditCtrl', function ($scope, $http, $location) {



    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });



    $scope.user = {};
	$scope.errorMessage = '';


	// A deplacer dans un model User
	$scope.updateName = function(data) {
	$scope.user.name = data;
	};

  $scope.updateFirstname = function(data) {
    $scope.user.firstname = data;
  };

  $scope.updateIntitule = function(data) {
    $scope.user.intitule = data;
  };



  	// Au clic sur sauvegarder on envoie la requete
	$scope.save = function() {
		$http.post('/sauvegarder', $scope.user).
	    success(function(data) {
	        $location.path('/');
	    }).error(function(err) {
	        $scope.errorMessage = err;
	    });
	}


    $scope.exportpdf = function() {
    	$http.post('/export', $scope.user);
  	}


	// $scope.user = {
	//     name: 'awesome user'
	// };


});

