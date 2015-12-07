var express = require('express');
var path = require('path');
var app = express();
var url = require('url');
var routes = require('./server/routes');
var dbinit = require('./dbinit');

dbinit.init();
app.set('port', process.env.PORT || 8000);
app.set('root_path', path.normalize(__dirname + '/'));
app.set('default_page', 'index.html');
app.use(express.static(path.join(app.get('root_path'), 'app')));

app.use(function(req, res, next) {
    res.setHeader("content-type", "application/json");
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "x_radio_partnerid, x_radio_auth, Cache-Control, ragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.use(function(req, res, next) {    
    var body = '';    
    req.on("data", function(data) {
        body += data;   
    });   
    
    req.on("end", function() {           
        
        if(req.method === 'GET') {
            parameters = url.parse(req.url, true).query; 
            next();
        } else if (req.method === 'POST'){
            try { 
                parameters = JSON.parse(body);
                next();
            }
            catch (e) {                                                
               res.end('Invalid request body');
            }
        } else {                                       
            res.end('Invalid or incomplete request');
        }                    
        
    });                    
});
  
routes.configure(app);

app.listen(app.get('port'), function() {
    console.log('Milk admin service listening on port ' + app.get('port'));
});