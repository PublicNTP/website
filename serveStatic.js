var express = require('express');
var path = require('path');
var fs = require('fs');
var port = 3020;

app = express();

var publicdir = __dirname + '/dist';

app.use(function(req, res, next) {
  if (req.path.indexOf('.') === -1) {
    var file = publicdir + req.path + '.html';
    fs.exists(file, function(exists) {
      if (exists)
        req.url += '.html';
      next();
    });
  }
  else next();
});

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(port, function() {
	console.log('listening on port ', port)
});
