
var jsonRpcRenderer = require('../views/jsonrpcview.js');
var service = require('../services/cassandraService.js');

var cassandraController = function() {
};

module.exports = new cassandraController();

cassandraController.prototype.getRequisitionData = function(parameters, res) {
    service.getRequisitionData(parameters, function(result){
        jsonRpcRenderer.onSuccess(res, result, parameters.id);
    });        
};

cassandraController.prototype.getAllRequisitions = function(parameters, res) {
    service.getAllRequisitions(parameters, function(result){
        jsonRpcRenderer.onSuccess(res, result, parameters.id);
    });        
};

cassandraController.prototype.getAllRequisitionsForReporting = function(parameters, res) {
    service.getAllRequisitionsForReporting(parameters, function(result){
        jsonRpcRenderer.onSuccess(res, result, parameters.id);
    });        
};

cassandraController.prototype.saveRequisitionData = function(parameters, res) {
    service.saveRequisitionData(parameters, function(result){
        jsonRpcRenderer.onSuccess(res, result, parameters.id);
    });        
};

