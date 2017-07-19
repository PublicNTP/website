var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('learn', {
		the_title: 'Learn | PublicNTP'
	})
})

router.get('/atomic-clock.html', function(req, res) {
	res.render('atomic_clock', {
		the_title: 'How does an Atomic Clock Work? - Learn | PublicNTP'
	})
})

router.get('/amazing-atomic-clock.html', function(req, res) {
	res.render('amazing_atomic_clock', {
		the_title: 'The Amazing Atomic Clock - Learn | PublicNTP'
	})
})

module.exports = router;
