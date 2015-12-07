var express = require('express');
var apiRouter = express.Router();
var cassandraController = require('./controllers/cassandraController');
var jsonRpcRenderer = require('./views/jsonrpcview.js');

apiRouter.use(function (req, res, next) {
    next();
});

var controllerMethods = {
  getRequisitionData: {
    call:cassandraController.getRequisitionData
  },
  getAllRequisitions: {
    call:cassandraController.getAllRequisitions
  },
  saveRequisitionData: {
    call:cassandraController.saveRequisitionData
  },
  getAllRequisitionsForReporting: {
    call:cassandraController.getAllRequisitionsForReporting
  }
};

function configure(app) {
  function indexRoute(req, res){
    res.redirect('/app/index.html');
  }

  function defaultRoute(req, res){
    res.sendFile(path.join(app.get('root_path'), 'public', app.get('default_page')));
  }


  app.post('/api/v1', function (req, res) {
   var param = parameters;
    if (typeof controllerMethods[param.method] === 'undefined') {
      return jsonRpcRenderer.onError(res, {
                code: -503,
                message: 'Method not found : ' + param.method
              }, param.id);
    }
    try {
        controllerMethods[param.method].call(param, res);
    } catch (e) {
      jsonRpcRenderer.onError(res, {
        code: -503,
        message: 'Method call failure: ' + param.method + ' Error Message: ' + e.message      
      }, param.id);

    }
  });

  app.get('/',  indexRoute); 
  app.get('/app/index.html',  defaultRoute);  
  app.get('/app/:pageName?',  indexRoute);   
  
}

exports.configure = configure;
