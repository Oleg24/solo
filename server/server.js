var https = require('https');
var express = require('express');
var bodyParser = require('body-parser');
var partials = require('express-partials');
var connect = require('connect');  
var app = express();

app.use(partials());
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/../client'));

var token = {
	consumerKey: 'd4BjI8IzjoNfc9atD3Auyw',
	consumerSecret: 'IC_XEaeQfbjXeLQgX1qrml9tK8A',
	token: 'Ec4Bc8VrJiGugAHJifJQp0nyP6QTgqyv',
	tokenSecret: 'KiDqXG8_NUaszgAWrPcbks2F9Vw'
};

var storage;

app.post('/message',
	function(req, res){
		storage = req.body;
		console.log(storage);
		res.send(200);
	});

var yelp = function(){

};


// this is the url for the app 
// http://api.yelp.com/v2/search?term='+message.keyword+'&location='+message.location+'&limit='+5+'&deals='+message.deals

console.log('server active');
app.listen(5000);