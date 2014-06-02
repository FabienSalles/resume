'use strict';

angular.module('wwwApp')
.controller('EditCtrl', function ($scope, $http, $location) {

	$scope.user = {};

	$http.get('/api/profiles').success(function(user) {
		$scope.user = {
			email: user.email,
			name: user.lastName,
			firstname: user.fisrtName,
			phone: user.phoneNumber,
			intitule: user.jobName,
			age: user.age,
			city: user.city,
			adress: user.adress,
			cp: user.cp,
			avatar: user.avatar,
			facebook: user.facebook,
			twitter: user.twitter,
			google: user.google,
			description: user.description
		};
		
    });


	// $scope.user = {
	// 	id: 1,
	// 	name: 'Renaud',
	// 	firstname: 'Yves',
	// 	profil: 'Je suis motivé!',
	// 	experience: 'Je suis un expert!',
	// 	facebook: 'https://www.facebook.fr/',
	// 	twitter: 'https://www.twitter.fr/',
	// 	google: 'https://www.google.fr/',
	// 	//avatar: 'images/avatars/avatar_user.jpg', // TODO le rendre unique
	// 	skills: [{
	//     	id: 1, name: 'PHP', desc: 'Mes compétences en PHP'
	//     },{
	//     	id: 2, name: 'HTML', desc: 'Mes compétences en HTML'
	//     }],
	//     diplomes: [{
	//     	id: 1,
	//     	name: 'BAC STI',
	//     	desc: 'J\'ai passé mon bac au lycée.'
	//     }]
	// };



	$scope.errorMessage = '';



	// A deplacer dans un model User
	$scope.updateName = function(data) {
		$http.put('/api/profiles', { 'lastName' : data });
	};

	$scope.updateFirstname = function(data) {
		$http.put('/api/profiles', { 'firstName' : data });
	};

	$scope.updateIntitule = function(data) {
		$http.put('/api/profiles', { 'jobName' : data });
	};

	$scope.updateAddresse = function(data) {
		$http.put('/api/profiles', { 'adress' : data });
	};

	$scope.updateCity = function(data) {
		$http.put('/api/profiles', { 'city' : data });
	};

	$scope.updateCP = function(data) {
		$http.put('/api/profiles', { 'cp' : data });
	};

	$scope.updatePhone = function(data) {
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


  	// Ajoute un champ pour saisir une compétence
	$scope.addSkill = function() {
		$scope.inserted = {
		  id: $scope.user.skills.length + 1,
		  name: ''
		};
		$scope.user.skills.push($scope.inserted);
	};

	// Ajoute un champ pour saisir un diplome
	$scope.addDiplome = function() {
		$scope.inserted = {
		  id: $scope.user.diplomes.length + 1,
		  name: ''
		};
		$scope.user.diplomes.push($scope.inserted);
	};

	$scope.removeSkill = function(index) {
    	$scope.user.skills.splice(index, 1);
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

