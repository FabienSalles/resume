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

  // it('should call /api/avatar on $scope.avatarChanged()', inject(function($httpBackend) {
  //   $scope.avatarChanged();
  //   $httpBackend.expectPOST('/api/avatar').respond();
  //   $httpBackend.flush();
  // }));

});
