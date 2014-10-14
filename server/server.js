var express = require('express');
var bodyParser = require('body-parser');
var partials = require('express-partials');
var connect = require('connect');  
var request = require('request')
var app = express();
var yelp = require("yelp").createClient({
  consumer_key: "d4BjI8IzjoNfc9atD3Auyw", 
  consumer_secret: "IC_XEaeQfbjXeLQgX1qrml9tK8A",
  token: "Ec4Bc8VrJiGugAHJifJQp0nyP6QTgqyv",
  token_secret: "KiDqXG8_NUaszgAWrPcbks2F9Vw"
});

app.use(partials());
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/../client'));

var storage = {};

app.post('/message',
	function(req, res){
		storage = req.body;
		
		yelp.search({term: storage.keyword, location: storage.location, limit: storage.limit, deals_filter: storage.deals}, function(error, data) {
		  console.log(error);
		  var random = Math.ceil(Math.random()*20)
		  console.log(random);
		  var response = data[random];
		  res.send(data.businesses[random]);
		  console.log('sent');
		});
		
	});

console.log('server active');
app.listen(5000);