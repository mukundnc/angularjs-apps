'use strict';

angular.module('myApp')
    .filter('sampleFilter', convertToUpperCaseFilter);

function convertToUpperCaseFilter() {
    return convertToUpperCase;
}

function convertToUpperCase(str) {
    return str.toUpperCase();
}