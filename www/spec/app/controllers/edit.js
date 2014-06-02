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

  it('should call /api/profiles on $scope.updateName()', inject(function($httpBackend) {
    $scope.updateName();
    $httpBackend.expectPUT('/api/profiles').respond();
    $httpBackend.flush();
  }));

  it('should call /api/profiles on $scope.updateFirstname()', inject(function($httpBackend) {
    $scope.updateFirstname();
    $httpBackend.expectPUT('/api/profiles').respond();
    $httpBackend.flush();
  }));

});
