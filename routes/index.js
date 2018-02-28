var express = require('express');
var router = express.Router();
var locations = require('../data/locations');
var posts = require('../data/posts.json');
var ping = require('ping');
var now = require('performance-now');

// Get Time to Servers
locations.forEach(function(host, i) {
  var time;
  var regex = /(<)/;
  var start = now();
  var end;
  var url = host.hostname.split('<')[0];
  // console.log('its a url: ', url);

  ping.sys.probe(url, function(isAlive) {
    var msg = isAlive ? 'host ' + url + ' is alive' : 'host ' + url + ' is dead';
    end = now();
    time = end - start;
    // console.log('Time', time);

    if (isAlive) {
      locations[i].time = time.toFixed(3) + ' ms';
    }
  });
});

router.get('/', function(req, res) {
  var post = posts[0];
  res.render('home', {
    locations: locations,
    post: post,
    the_title: 'PublicNTP',
    relative_path: './',
  });
});

module.exports = router;
