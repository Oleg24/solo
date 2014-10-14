var https = require('https');
var express = require('express');
var bodyParser = require('body-Parser');
var partials = require('partials'); 
var app = express();

app.use(partials());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

