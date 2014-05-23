'use strict';

angular.module('wwwApp')
.controller('EditCtrl', function ($scope, $http, $location) {


	$scope.user = {};
	$scope.errorMessage = '';

	$scope.skills = [
	    {
	    	id: 1, name: 'PHP', desc: 'Mes compétences en PHP'
	    },{
	    	id: 2, name: 'HTML', desc: 'Mes compétences en HTML'
	    }
  	]; 

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


  	$scope.export = function() {
  		console.log('angular export');
  		$http.get('/export');
  	}


  	// Ajoute un champ pour saisir une compétence
	$scope.addSkill = function() {
		$scope.inserted = {
		  id: $scope.skills.length + 1,
		  name: ''
		};
		$scope.skills.push($scope.inserted);
	};

});

