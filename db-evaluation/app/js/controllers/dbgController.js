'use strict';

angular.module('myApp').
	controller('dbgController', ['$state', 'DataService', dbgController]);

function dbgController($state, DataService) {
    var vm = this;
    vm.name = $state.current.url.substr(1);
	vm.table = {};
	DataService.getAllRequisitionsForReporting(vm.customprop, function(data){
		vm.table = data.result;
	});

	vm.apply = function(){
		DataService.getAllRequisitionsForReporting(vm.customprop, function(data){
			vm.table = data.result;
		});
	}
}