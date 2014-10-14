var express = require('express');
var partials = require('express-partials');
var bodyParser = require('body-parser');
//  var client = require('../client/*.js');
var requestHandler = require('./request-handler');

var app = express();

app.use(partials());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/client'));

console.log('server active');
app.listen(8000);


// this is the url for the app 
// http://api.yelp.com/v2/search?term='+message.keyword+'&location='+message.location+'&limit='+5+'&deals='+message.deals