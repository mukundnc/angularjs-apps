'use strict';

angular.module('myApp').
    factory('DataService', ['$http', 'ENV', DataService]);

function DataService($http, ENV) {

    var dataService = {
        getAllRequisitions: getAllRequisitions,
        getAllRequisitionsForReporting, getAllRequisitionsForReporting,
        getRequisitionData: getRequisitionData,
        saveRequisition: saveRequisition
    };    

    return dataService;

    function saveRequisition(item){
        var postData = {
            method: "saveRequisitionData",
            data: item,
            id: 1
        };
        return $http.post(ENV.apiEndPoint, JSON.stringify(postData)).success(function(response) {
           return response;
        }).error(function(error) {
           return error;
        });
    }
    
    function getAllRequisitions() {
        var postData = {
            method: "getAllRequisitions",
            id: 1
        };
        return $http.post(ENV.apiEndPoint, JSON.stringify(postData)).success(function(response) {
           return response;
        }).error(function(error) {
           return error;
        });
    }

    function getAllRequisitionsForReporting(prop, callback) {
        var postData = {
            method: "getAllRequisitionsForReporting",
            data: prop,
            id: 1
        };
        $http.post(ENV.apiEndPoint, JSON.stringify(postData)).success(function(response) {
           callback(response);
        }).error(function(error) {
           callback(error);
        });
    }

    function getRequisitionData(reqid) {
        var postData = {
            method: "getRequisitionData",
            id: reqid
        };
        return $http.post(ENV.apiEndPoint, JSON.stringify(postData)).success(function(response) {
           return response;
        }).error(function(error) {
           return error;
        });
    }
}