'use strict';

describe('Controller: EditCtrl', function () {

  var $scope, controller;

  beforeEach(module('wwwApp'));

  beforeEach(inject(function ($rootScope, $controller) {
    $scope = $rootScope.$new();
    controller = $controller('EditCtrl', {
      $scope: $scope
    });
  }));

  it('should set save function', function() {
    expect($scope.save).toBeDefined();
  });

  it('should set addSkill function', function() {
    expect($scope.addSkill).toBeDefined();
  });

  it('should set avatarChanged function', function() {
    expect($scope.avatarChanged).toBeDefined();
  });

  it('should set updateLastName function', function() {
    expect($scope.updateLastName).toBeDefined();
  });

  it('should set updateFirstname function', function() {
    expect($scope.updateFirstname).toBeDefined();
  });

  it('should set updateCity function', function() {
    expect($scope.updateCity).toBeDefined();
  });

  it('should set updatePhoneNumber function', function() {
    expect($scope.updatePhoneNumber).toBeDefined();
  });

  it('should set updateJobName function', function() {
    expect($scope.updateJobName).toBeDefined();
  });

  it('should set updateAdress function', function() {
    expect($scope.updateAdress).toBeDefined();
  });

  it('should set updateCP function', function() {
    expect($scope.updateCP).toBeDefined();
  });

  it('should set updateGoogle function', function() {
    expect($scope.updateGoogle).toBeDefined();
  });

  it('should set updateTwitter function', function() {
    expect($scope.updateTwitter).toBeDefined();
  });

  it('should set updateFacebook function', function() {
    expect($scope.updateFacebook).toBeDefined();
  });

  it('should set updateDescription function', function() {
    expect($scope.updateDescription).toBeDefined();
  });

  it('should set addNameSkill function', function() {
    expect($scope.addNameSkill).toBeDefined();
  });

  it('should set addDescriptionSkill function', function() {
    expect($scope.addDescriptionSkill).toBeDefined();
  });

});
