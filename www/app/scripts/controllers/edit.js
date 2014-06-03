'use strict';

angular.module('wwwApp')
.controller('EditCtrl', function ($scope, $http, $location) {

	$scope.user = {};

	$http.get('/api/profiles').success(function(user) {
		$scope.user = user;
    });


	$scope.errorMessage = '';


	// A deplacer dans un model User
	$scope.updateLastName = function(data) {
		$http.put('/api/profiles', { 'lastName' : data });
	};

	$scope.updateFirstname = function(data) {
		$http.put('/api/profiles', { 'firstName' : data });
	};

	$scope.updateJobName = function(data) {
		$http.put('/api/profiles', { 'jobName' : data });
	};

	$scope.updateAdress = function(data) {
		$http.put('/api/profiles', { 'adress' : data });
	};

	$scope.updateCity = function(data) {
		$http.put('/api/profiles', { 'city' : data });
	};

	$scope.updateCP = function(data) {
		$http.put('/api/profiles', { 'cp' : data });
	};

	$scope.updatePhoneNumber = function(data) {
		$http.put('/api/profiles', { 'phoneNumber' : data });
	};

	$scope.updateFacebook = function(data) {
		$http.put('/api/profiles', { 'facebook' : data });
	};

	$scope.updateGoogle = function(data) {
		$http.put('/api/profiles', { 'google' : data });
	};

	$scope.updateTwitter = function(data) {
		$http.put('/api/profiles', { 'twitter' : data });
	};

	$scope.updateDescription = function(data) {
		$http.put('/api/profiles', { 'description' : data });
	};

	$scope.updateEmail = function(data) {
		$http.put('/api/profiles', { 'email' : data });
	};

	$scope.addNameSkill = function(data, idSkill) {
		console.log(idSkill);
		$http.put('/api/skills', { 'id': idSkill, 'name' : data });
	};

	$scope.addDescriptionSkill = function(data, idSkill) {
		$http.put('/api/skills', { 'id': idSkill, 'description' : data });
	};



  	// Au clic sur sauvegarder on envoie la requete
  	$scope.save = function() {
  		$http.post('/sauvegarder', $scope.user).
  		success(function(data) {
  			console.log(data);
  			$location.path('/');
  		}).error(function(err) {
  			$scope.errorMessage = err;
  		});
  	};


  	$scope.export = function() {
  		console.log('angular export');
  		$http.get('/export');
  	};

	// Ajoute un champ pour saisir un diplome
	$scope.addDiplome = function() {
		$scope.inserted = {
		  id: $scope.user.diplomes.length + 1,
		  name: ''
		};
		$scope.user.diplomes.push($scope.inserted);
	};


  	// Ajoute un champ pour saisir une compétence
	$scope.addSkill = function() {
		var skill = $http.post('/api/skills', { 'name' : 'Une compétence' });
		$scope.user.skills.push(skill);
	};


	$scope.removeSkill = function(skill) {
	  	$http.delete('/api/skills/' + skill._id).
        success(function(data,status){
            console.log('skill deleted');
        }).
        error(function(err){
            console.log('error delete skill');
        });

        var index = $scope.user.skills.indexOf(skill);
        if (index > -1) {
    		$scope.user.skills.splice(index, 1);
		}
  	};

  	$scope.removeDiplome = function(index) {
    	$scope.user.diplomes.splice(index, 1);
  	};

  	$scope.avatarChanged = function(file) {

		var fd = new FormData();

	    // Recupere le premier fichier
	    fd.append('file', file);


	    console.log(file);

	    $http.post('/api/avatar', fd, {
	        withCredentials: true,
	        headers: { 'Content-Type': undefined },
	        transformRequest: angular.identity
	    }).success(function(){
	    	console.log('UPLOAD DONE');
	    }).error(function(){
	    	console.log('ERROR UPLOAD');
	    });


	    // MAJ le model
    	//$http.put('/api/profiles', { 'avatar' : 'images/avatar.jpg' });

	};


});

