'use strict';

angular.module('myApp').
    controller('sample1Controller', ['$state', sample1Controller]);

function sample1Controller($state) {
    var sc1 = this;
    sc1.name = $state.current.name;
    sc1.person = {name:"Mukundan"};
}