var express = require('express');
var path = require('path');
var fs = require('fs');
var port = 3000;

app = express();

var publicdir = __dirname + '/dist';

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(port, function () {
	console.log('listening on port ', port)
});
