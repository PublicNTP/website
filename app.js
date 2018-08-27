var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var hbs = require('hbs');
var compression = require('compression');

var indexRoutes = require('./routes/index');
var indexDevRoutes = require('./routes/index-dev');
var indexStagingRoutes = require('./routes/index-staging');
var blogRoutes = require('./routes/blog');
var donateRoutes = require('./routes/donate');
var thankYouRoutes = require('./routes/thankyou');
var aboutRoutes = require('./routes/about');
var learnRoutes = require('./routes/learn');
var connectRoutes = require('./routes/connect');
var historyRoutes = require('./routes/history');
var statsRoutes = require('./routes/stats');
var termsRoutes = require('./routes/terms');
var governanceRoutes = require('./routes/governance');
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

app.use(compression());

app.use(express.static(path.join(__dirname, 'public')));

hbs.registerPartials(__dirname + '/views/partials');

// // view engine setup
app.set('view engine', 'hbs');

app.enable('trust proxy');
try {
  app.use(bodyParser.json());
} catch (error) {
  console.log('Body Parser JSON ERROR: ', error);
}

app.use(bodyParser.urlencoded({ extended: false }));

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

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

app.use('/', indexRoutes);
app.use('/index-dev', indexDevRoutes);
app.use('/index-staging', indexStagingRoutes);

app.use('/blog', blogRoutes);
app.use('/blog.html', blogRoutes);
app.use('/learn', learnRoutes);
app.use('/donate.html', donateRoutes);
app.use('/thank-you.html', thankYouRoutes);
app.use('/learn.html', learnRoutes);
app.use('/connect.html', connectRoutes);
app.use('/history.html', historyRoutes);
app.use('/people.html', aboutRoutes);
// app.use('/stats.html', statsRoutes);
app.use('/terms.html', termsRoutes);
app.use('/governance.html', governanceRoutes);

app.get('/history.html', function (req, res) {
  res.render('history', {
    relative_path: './'
  });
});

app.listen(port, function () {
  console.log('listening on port ', port);
});
