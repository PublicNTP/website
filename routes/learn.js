const express = require('express');
const path = require('path');
const router = express.Router();
const env = process.env.NODE_ENV

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
	res.render('learn', {
		the_title: 'Learn | PublicNTP',
		relative_path: './',
		url: req.originalUrl,
		description: 'Have you ever wondered how GPS or an atomic clock works? How did we decide how long a second is? Well, now you know.'
	})
})

router.get('/atomic-clock.html', function (req, res) {
	res.render('atomic_clock', {
		the_title: 'How does an Atomic Clock Work? - Learn | PublicNTP',
		relative_path: '../',
		url: req.originalUrl,
		description: 'How does an Atomic Clock Work?',
		domain: newEnv
	})
})

router.get('/amazing-atomic-clock.html', function (req, res) {
	res.render('amazing_atomic_clock', {
		the_title: 'The Amazing Atomic Clock - Learn | PublicNTP',
		relative_path: '../',
		url: req.originalUrl,
		description: 'The Amazing Atomic Clock',
		domain: newEnv
	})
})

router.get('/time-scales.html', function (req, res) {
	res.render('time_scales', {
		the_title: 'Time Scales - Learn | PublicNTP',
		relative_path: '../',
		url: req.originalUrl,
		description: 'Time Scales',
		domain: newEnv
	})
})

router.get('/what-is-a-second.html', function (req, res) {
	res.render('what_is_a_second', {
		the_title: 'What Is A Second? - Learn | PublicNTP',
		relative_path: '../',
		url: req.originalUrl,
		description: 'What Is A Second?',
		domain: newEnv
	})
})

router.get('/chrono-and-friends.html', function (req, res) {
	res.render('chrono_and_friends', {
		the_title: '\“-ology-of-ologies\”: chrono and friends - learn | publicNTP',
		relative_path: '../',
		url: req.originalUrl,
		description: '-ology-of-ologies',
		domain: newEnv
	})
})

router.get('/leap-seconds.html', function (req, res) {
	res.render('leap_seconds', {
		the_title: 'Leap Seconds - learn | publicntp',
		relative_path: '../',
		url: req.originalUrl,
		description: 'Leap Seconds',
		domain: newEnv
	})
})

router.get('/time-zones.html', function (req, res) {
	res.render('time_zones', {
		the_title: 'Time Zones - learn | publicntp',
		relative_path: '../',
		url: req.originalUrl,
		description: 'Time Zones',
		domain: newEnv
	})
})

module.exports = router;
