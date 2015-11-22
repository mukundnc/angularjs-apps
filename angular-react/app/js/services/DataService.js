'use strict';

angular.module('myApp').
    factory('DataService', ['$q', DataService]);

function DataService($q) {

    var dataService = {
        getRowsData: getRowsData
    };
    

    return dataService;
    var tableData;
    function getRowsData() {
        if (!tableData) {
            var table = {};
            table.titles = ["name", "address"]
            table.index = 2
            table.rows = [["mukundan", "pashan sus road"]];
            for (var i = 0; i < 5000; i++) {
                table.rows.push([table.rows[0][0] + ':' + i, table.rows[0][1] + ':' + i])
            }
            tableData = table;
        }
        
        var dfd = $q.defer()
        setTimeout(function (data) {
            dfd.resolve(data)
        }, 0, tableData)
        return dfd.promise
    }
}