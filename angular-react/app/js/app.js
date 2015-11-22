'use strict';

angular.module('myApp', [
    //'ngRoute'
    'ui.router'
    ,'react'    
]).
    config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "partials/main.html"
            })
            .state('home.sample1', {
                url: "/sample1",
                templateUrl: "partials/sample1.html",
                controller: 'sample1Controller',
                controllerAs: 'sc1'
            })
            .state('home.sample2', {
                url: "/sample2",
                templateUrl: "partials/sample2.html",
                controller: 'sample2Controller',
                controllerAs: 'sc2',
                resolve: {
                tableData: ['DataService', function (DataService) {
                        return DataService.getRowsData();
                        }]
                    }
            })
            .state('home.sample3', {
                url: "/sample3",
                templateUrl: "partials/sample3.html",
                controller: 'sample2Controller',
                controllerAs: 'sc2',
                resolve: {
                    tableData:  ['DataService', function (DataService) {
                        return DataService.getRowsData();
                    }]
                }
            })

    }]);