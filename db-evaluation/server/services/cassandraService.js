
var cassandra = require('cassandra-driver');
var client;

var cassandraService = function() {
    client = new cassandra.Client({ contactPoints: ['127.0.0.1'], keyspace:'procurement' });
};

module.exports = new cassandraService();

cassandraService.prototype.getRequisitionData = function(parameters, callback) {
    var query = 'SELECT * FROM Requisition where DocumentId = ?';
    client.execute(query ,parameters.id , function(err, result) {  
        callback(buildTableResponse(result));
    });        
};

cassandraService.prototype.saveRequisitionData = function(parameters, callback) {
    var query = 'INSERT INTO Requisition JSON \'' + JSON.stringify(parameters.data) + '\'' ;
    client.execute(query, null, function(err, result) {  
        callback(result);
    });        
};

cassandraService.prototype.getAllRequisitionsForReporting = function(parameters, callback) {
    var query = 'SELECT \
        Name,\
        DocumentId,\
        Currency,\
        CreatedByName,\
        DocumentType,\
        IsCatalogItemsExists,\
        CustomProperties \
        FROM Requisition';
    if(parameters.data)
        query = query + ' where CustomProperties contains key \'' + parameters.data + '\'';
    client.execute(query ,null , function(err, result) {  
        callback(buildTableResponse(result));
    });        
};

cassandraService.prototype.getAllRequisitions = function(parameters, callback) {
    var query = 'SELECT JSON \
        Name,\
        DocumentId,\
        Currency,\
        CreatedByName,\
        DocumentType,\
        IsCatalogItemsExists,\
        ShiptoLocation,\
        CustomProperties \
        FROM Requisition';
    client.execute(query ,null , function(err, result) {  
        callback(buildRowsResponse(result));
    });        
};

function buildTableResponse(dbResult){
    var table = {};
    table.titles = new Array();
    for (var i = 0; i < dbResult.columns.length; i++) {
        table.titles.push(dbResult.columns[i].name); 
    }
    table.rows = dbResult.rows;
    return table;
}

function buildRowsResponse(dbResult){
    var table = {};
    table.rows = new Array();
    table.titles = new Array();
    for (var i = 0; i < dbResult.rows.length; i++) {
        table.rows.push(JSON.parse(dbResult.rows[i]["[json]"]));
    }
    return table;
}

