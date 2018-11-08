const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const compression = require('compression');

const indexRoutes = require('./routes/index');
// const indexDevRoutes = require('./routes/index-dev');
// const indexStagingRoutes = require('./routes/index-staging');
const blogRoutes = require('./routes/blog');
const donateRoutes = require('./routes/donate');
const thankYouRoutes = require('./routes/thankyou');
const aboutRoutes = require('./routes/about');
const learnRoutes = require('./routes/learn');
const connectRoutes = require('./routes/connect');
const historyRoutes = require('./routes/history');
// const statsRoutes = require('./routes/stats');
const termsRoutes = require('./routes/terms');
const governanceRoutes = require('./routes/governance');
const port = 3000;
const app = express();
const argv = require('yargs').argv;

process.env.NODE_ENV = argv.env;

let ENV = process.env.NODE_ENV;
let is_production = true;

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

// view engine setup
app.set('view engine', 'hbs');

app.enable('trust proxy');

app.use(bodyParser.json());
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
// app.use('/index-dev', indexDevRoutes);
// app.use('/index-staging', indexStagingRoutes);

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
