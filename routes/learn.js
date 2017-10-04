var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('learn', {
		the_title: 'Learn | PublicNTP',
		relative_path: './'
	})
})

router.get('/atomic-clock.html', function(req, res) {
	res.render('atomic_clock', {
		the_title: 'How does an Atomic Clock Work? - Learn | PublicNTP',
		relative_path: '../'
	})
})

router.get('/amazing-atomic-clock.html', function(req, res) {
	res.render('amazing_atomic_clock', {
		the_title: 'The Amazing Atomic Clock - Learn | PublicNTP',
		relative_path: '../'
	})
})

router.get('/time-scales.html', function(req, res) {
	res.render('time_scales', {
		the_title: 'Time Scales - Learn | PublicNTP',
		relative_path: '../'
	})
})

router.get('/what-is-a-second.html', function(req, res) {
	res.render('what_is_a_second', {
		the_title: 'What Is A Second? - Learn | PublicNTP',
		relative_path: '../'
	})
})

router.get('/chrono-and-friends.html', function(req, res) {
	res.render('chrono_and_friends', {
		the_title: '\“-ology-of-ologies\”: chrono and friends - learn | publicNTP',
		relative_path: '../'
	})
})

router.get('/leap-seconds.html', function(req, res) {
	res.render('leap_seconds', {
		the_title: 'Leap Seconds - learn | publicntp',
		relative_path: '../'
	})
})

router.get('/time-zones.html', function(req, res) {
	res.render('time_zones', {
		the_title: 'Time Zones - learn | publicntp',
		relative_path: '../'
	})
})

module.exports = router;
