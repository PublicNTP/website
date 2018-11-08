const express = require('express');
const router = express.Router();
const locations = require('../data/locations');
const posts = require('../data/posts.json');
const ping = require('ping');
const now = require('performance-now');
const argv = require('yargs').argv;
const env = process.env.NODE_ENV

// Get Time to Servers
locations.forEach(function (host, i) {
  var time;
  var regex = /(<)/;
  var start = now();
  var end;
  var url = host.hostname.split('<')[0];
  // console.log('its a url: ', url);

  ping.sys.probe(url, function (isAlive) {
    var msg = isAlive
      ? 'host ' + url + ' is alive'
      : 'host ' + url + ' is dead';
    end = now();
    time = end - start;
    // console.log('Time', time);

    if (isAlive) {
      locations[i].time = time.toFixed(3) + ' ms';
    }
  });
});

console.log('this is the env', env);
switch (env) {
  case 'dev':
    newEnv = 'http://dev.publicntp.org'
    break;
  case 'staging':
    newEnv = 'https://staging.publicntp.org'
    break;
  case 'production':
    newEnv = 'https://publicntp.org'
    break;

  default:
    newEnv = 'https://publicntp.org'
    break;
}

router.get('/', function (req, res) {
  var post = posts[0];
  res.render('home', {
    locations: locations,
    post: post,
    the_title: 'PublicNTP',
    relative_path: './',
    domain: newEnv
  });
});

module.exports = router;
