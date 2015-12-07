'use strict';

angular.module('myApp').
	controller('dbController', ['$state', 'tableData', dbController]);

function dbController($state, tableData) {
    var vm = this;
    vm.name = $state.current.url.substr(1);
	vm.table = tableData.data.result;
}