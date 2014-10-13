// what do i need to do here?

// on change of keyword set the value of keyword to users input;
// on change of checkbox search only for places with yelp deals
// on change of location set the value of location to the users zipcode
// on pressing of submit button, send all that over to the server... 
$(document).ready(function() {
$('#keyword').blur( function(){
	var keywords = $('#keyword').val()
	console.log(keywords);
})



});