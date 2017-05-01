var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var hbs = require('hbs');
var moment = require('moment');
var session = require('cookie-session');

var indexRoutes = require('./routes/index');
var blogRoutes = require('./routes/blog');
var adminRoutes = require('./routes/admin');
var timelineRoutes = require('./routes/timeline');
var models = require('./models');
var authConfig = require('./authConfig');
var port = 3020;


var app = express();

var ENV = process.env.NODE_ENV;
var is_production = true;

if (ENV === 'development') {
  is_production = false;
} else {
	process.env.NODE_ENV = 'production';
	ENV = 'production';
}

app.locals.is_production = ENV !== 'development';

app.use(express.static(path.join(__dirname, 'public')));

hbs.registerPartials(__dirname + '/views/partials');

// // view engine setup
app.set('view engine', 'hbs');

app.use(session({
	secret: authConfig.secret,
	resave: true,
	saveUninitialized: true
}))
app.set('case sensitive routing', true);

app.enable('trust proxy');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

models.sequelize.sync().then(function() {
  app.on('error', onError);
});


function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

app.use('/', indexRoutes)

app.use('/blog', blogRoutes);
app.use('/admin', adminRoutes);
app.use('/timeline', timelineRoutes);

app.get('/connect/', function(req, res) {
  res.render('connect', {
    is_production: is_production
  })
})

app.get('/learn/', function(req, res) {
  res.render('learn', {
    is_production: is_production
  })
})
	
app.get('/history/', function(req, res) {
  res.render('history', {
    is_production: is_production
  })
})

app.get('/stats/', function(req, res) {
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
  	res.render('stats', {
		is_production: is_production,
		rows: rows,
		points: points
	})
})

app.listen(port, function() {
  console.log('listening on port ', port)
});
