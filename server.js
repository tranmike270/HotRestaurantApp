var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var htmlRoutes = require('./app/routing/htmlRouting.js');
// var apiRoutes = require('./app/routing/apiRoutes.js');


var app = express();


// configure body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname + "/app")));
app.use('/', htmlRoutes);
// app.use('/', apiRoutes);


app.listen(process.env.PORT || 8888);

