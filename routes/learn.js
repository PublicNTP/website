var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('learn', {})
})

router.get('/atomic_clock.html', function(req, res) {
	res.render('atomic_clock', {})
})

module.exports = router;
