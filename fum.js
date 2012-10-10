var express = require('express');
var app = express();
var content = require('fs');
var guardarAweb = function (err, data) {
	if (err) {
		console.log(err);
		throw err; 
	}
	web = data;
	console.log(web);
};
var web;

content.readFile(__dirname+ '/index.html', 'UTF-8', guardarAweb);

app.get('/', function(req, res){
	res.send(web);
});

app.listen(80);