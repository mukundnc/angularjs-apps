'use strict';

angular.module('myApp', [
    //'ngRoute'
    'ui.router'
    ,'react' 
    ,'ui.bootstrap'   
]).
    config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "partials/main.html"
            })
            .state('home.cassandra', {
                url: "/cassandra",
                templateUrl: "partials/tabgrid.html",
                controller: 'dbController',
                controllerAs: 'vm',
                resolve: {
                    tableData: ['DataService', function (DataService) {
                        return DataService.getAllRequisitions();
                    }]
                }
            })
            .state('home.reporting', {
                url: "/reporting",
                templateUrl: "partials/reactgrid.html",
                controller: 'dbgController',
                controllerAs: 'vm'
            })
            // .state('home.mongo', {
            //     url: "/mongo",
            //     templateUrl: "partials/reactgrid.html",
            //     controller: 'dbController',
            //     controllerAs: 'vm',
            //     resolve: {
            //         tableData: ['DataService', function (DataService) {
            //             return DataService.getAllRequisitions();
            //         }]
            //     }
            // })
            // .state('home.sql', {
            //      url: "/sql",
            //     templateUrl: "partials/reactgrid.html",
            //     controller: 'dbController',
            //     controllerAs: 'vm',
            //     resolve: {
            //         tableData: ['DataService', function (DataService) {
            //             return DataService.getAllRequisitions();
            //         }]
            //     }
            // })
            // .state('home.elastic', {
            //      url: "/elastic",
            //     templateUrl: "partials/reactgrid.html",
            //     controller: 'dbController',
            //     controllerAs: 'vm',
            //     resolve: {
            //         tableData: ['DataService', function (DataService) {
            //             return DataService.getAllRequisitions();
            //         }]
            //     }
            // })

    }]);