
var jsonRpcRenderer = function () {
};	

jsonRpcRenderer.prototype.onSuccess = function(res, result, requestId) {
		
	res.statusCode = 200;
	res.end(JSON.stringify({
		result: result,
		id: requestId
	}));
};
	
jsonRpcRenderer.prototype.onError = function(res, err, requestId) {
	
	res.statusCode = 500;
	res.end(JSON.stringify({
		error: err,
		id: requestId
	}));
};

jsonRpcRenderer.prototype.onAuthenticationFailure = function(res, err, requestId) {

    res.statusCode = 403;
    res.end(JSON.stringify({
        error: err,
        id: requestId
    }));
};

module.exports = new jsonRpcRenderer();