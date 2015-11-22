'use strict';

angular.module('myApp').
	controller('sample2Controller', ['$state', 'tableData', sample2Controller]);

function sample2Controller($state, tableData) {
    var sc2 = this;
    sc2.name = $state.current.name;
	sc2.table = tableData;
}