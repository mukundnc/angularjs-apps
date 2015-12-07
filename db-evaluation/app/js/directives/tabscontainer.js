'use strict';

angular.module('myApp').    
    directive('tabscontainer', ['$uibModal', 'DataService', tabscontainer])

function tabscontainer($uibModal, DataService) {
    return {
        restrict: 'E',
        scope: {
          content: '=content'
        },
        templateUrl: 'partials/tabscontainer.html',
        controller: function ($scope, $element) {
            $scope.activeTab = 0;
            $scope.selectTab = function(idx){
                $scope.activeTab = idx;
            };
            $scope.addCustomProperty = function(){
                var modalInstance = $uibModal.open({
                    templateUrl: 'partials/modalpopup.html',
                    controller: 'modalpopupController'
                });

                modalInstance.result.then(function (item) {
                    $scope.content[$scope.activeTab].customproperties[item.name] = {
                        id: parseInt(item.id),
                        displayname: item.displayname,
                        value: item.value
                    };
                    DataService.saveRequisition($scope.content[$scope.activeTab]);
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
            }
        }
    };   
}

