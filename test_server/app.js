var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send("Welcome to Spot-on-the-Fly ;)");
});

app.listen(4444, function(){
	console.log('listening on 4444');
});
