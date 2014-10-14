// what do i need to do here?

// on change of keyword set the value of keyword to users input;
// on change of checkbox search only for places with yelp deals
// on change of location set the value of location to the users zipcode
// on pressing of submit button, send all that over to the server... 

$(document).ready(function() {

var postUrl = 'http://127.0.0.1:5000/message'

var message = {
	location: $('#location').val(),
	keyword: $('#keyword').val(),
	deals: false,
	limit: 20, 
}

$('#keyword').blur( function(){
	message.keyword = $('#keyword').val()
	console.log(message.keywords);
})

$('#location').blur( function(){
	message.location = $('#location').val()
	console.log('zip code' + message.location);
});

$('#deals').on('click', function(){  
	$("#deals").prop("checked") ? message.deals = true : message.deals = false;
	});

$('#submit').on('click', function(){
	// message = JSON.stringify(message);
	// handleSubmit(message);
	send(message);
});
var results = [];

send = function(message){
    $.ajax({
      type: 'POST',
      url: postUrl,
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function(response){
      	console.log(response);
      }
    });
  }

});

