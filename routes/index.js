var express = require('express');
var router = express.Router();
var locations = require('../data/locations');
var posts = require('../data/posts.json');
var ping = require('ping');
var now = require("performance-now");

// Get Time to Servers
locations.forEach(function (host, i) {
	var time;
	var start = now();
	
	ping.sys.probe(host.hostname, function (isAlive) {
		var msg = isAlive ? 'host ' + host.hostname + ' is alive' : 'host ' + host.hostname + ' is dead';
		// console.log('message:', msg);
	});

	var end = now();
	time = end - start;

	locations[i].time = time.toFixed(3);
	// console.log('new location data with time:', locations[i]);
});

router.get('/', function(req, res) {
	var post = posts[0];
	res.render('home', {
		locations: locations,
		post: post,
		the_title: 'PublicNTP',
		relative_path: './',
	})
})

module.exports = router;
