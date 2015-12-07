'use strict';

angular.module('myApp').
	controller('modalpopupController', ['$scope', '$uibModalInstance' , modalpopupController]);

function modalpopupController($scope, $uibModalInstance) {

  $scope.item = {};

  $scope.ok = function () {
    $uibModalInstance.close($scope.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

};