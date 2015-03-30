var express = require('express');
var hello = require('./hello.js');

var app = express();

app.get('/', function(request, response){
	response.send('helloooo' + hello.hello2);
});

app.listen(5000, function(){
	console.log('woop');
});


