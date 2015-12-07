var cassandra = require('cassandra-driver');
var client;

var dbinit = function() {
    client = new cassandra.Client({ contactPoints: ['127.0.0.1']});
};

dbinit.prototype.init = function() {
	var queries = [
		{
			query: 'create keyspace if not exists procurement WITH REPLICATION={\'class\':\'SimpleStrategy\',\'replication_factor\':1}'
		},
		{
			query: 'Create type if not exists procurement.address(id float,street text,city text,zip_code int)'
		},
		{
			query: 'Create type if not exists procurement.customProperty(id float,displayname text,value text)'
		},
		{
			query: 'Create table if not exists procurement.Requisition(DocumentId float primary key,name text, Currency text,ItemTotalAmount decimal,Tax decimal,\
				Shipping decimal,AdditionalCharges decimal,TotalAmount decimal,IsDeleted boolean,ApproveURL text,RejectURL text,\
				CreatedByName text,DocumentType text, ApproverName text,Querytext text,ClientContactCode text, PreDocumentCode float,\
				InterfaceStatus text,TaxesAndCharges list<decimal>,MaterialItemCount int,ServiceItemCount int,IsCatalogItemsExists boolean,\
				Precision int,Comments list<text>,WorkOrderNumber text,ERPOrderType int,CommentCount int,CapitalCode text,SentForApprovalDate timestamp,\
				ApprovedRejectedDate timestamp,NextLineNumber float,Operation text,BudgetId int,MatterId text,RequesterId float,\
				BusinessUnitId float,RequesterName text, PartnerName text, CategoryName text,BusinessUnitName text,	\
				ShiptoLocation map<text, frozen<address>>,DelivertoLocation map<text, frozen<address>>,	BilltoLocation map<text, \
				frozen<address>>, OnBehalfOf float,	OnBehalfOfName text,ProgramId float,CustomProperties map<text, frozen<customProperty>>)'
		},
		{
			query: 'INSERT INTO procurement.Requisition JSON \''+'  {"documentid": 1414.0, "createdbyname": "Mukundan", "currency": "USD", \
				"customproperties": { "isurgent": {"id": 44.0, "displayname": "Is Urgent", "value": "true"}, "json": {"id": 14.0, "displayname": "json", \
				"value": "{\\"test\\":\\"test\\"}"}}, "documenttype": "Requisition", "iscatalogitemsexists": true, "name": "item 1", \
				"shiptolocation": {"home": {"id": 2200.0, "street": "pashan", "city":"Pune", "zip_code": 411021}}}' +'\''
		},
		{
			query: 'create Index on procurement.Requisition(keys(customproperties))'
		}
	];
	executeQuery(queries, executeQuery);
};

function executeQuery(queries, callback, index){
	if(index >= queries.length)
		return;
	if(!index)
		index=0;
	client.execute(queries[index].query, null, function(err, result) {  
        if(!err)
        	callback(queries, executeQuery, index+1);
    });
}

module.exports = new dbinit();