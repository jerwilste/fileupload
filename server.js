var express = require('express');
var port = process.env.PORT || '8080';
var app = express();
var path = require('path');
app.get('/', function(req, res){
        res.sendfile(path.join(__dirname, '/index.html'));
});
app.listen(port);
