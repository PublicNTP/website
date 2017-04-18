var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var hbs = require('hbs');
var moment = require('moment');
var port = 3020;

var app = express();

var ENV = process.env.NODE_ENV;
var is_production = true;

if (ENV === 'development') {
  is_production = false;
}
app.locals.is_production = ENV !== 'development';

app.use(express.static(path.join(__dirname, 'public')));

hbs.registerPartials(__dirname + '/views/partials');

// // view engine setup
app.set('view engine', 'hbs');

app.set('case sensitive routing', true);

app.enable('trust proxy');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.render('home', {
    is_production: is_production
  })
})

app.get('/connect/', function(req, res) {
  res.render('connect', {
    is_production: is_production
  })
})

app.get('/report/', function(req, res) {
	var rows = [];
	var points = []
	for (var i = 200; i > 0; i = i - 20) {
		rows.push(i);
	}
	
	for (var i = 0; i < 150; i++) {
		var randGreen = 0;
		var randPurple = 0;
		if (i % 10 == 0) {
			randGreen = Math.floor((Math.random() * 80) + 1) + 20;
		} else {
			randGreen = Math.floor((Math.random() * 30) + 1) + 20;
		}
		randPurple = Math.floor((Math.random() * randGreen) + 1);
		randPurple = Math.floor((randPurple / randGreen) * 100);
		points.push({ p: randPurple, g: randGreen});
	}
  	res.render('report', {
		is_production: is_production,
		rows: rows,
		points: points
	})
})

app.listen(port, function() {
  console.log('listening on port ', port)
});
