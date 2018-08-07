var express = require('express');
var router = express.Router();
var graphs = require('../data/graphs');

router.get('/', function (req, res) {
	res.render('stats', {
		graphs: graphs,
		the_title: 'Stats | PublicNTP',
		relative_path: './',
		url: req.originalUrl,
		description: 'Important PublicNTP Stats.'
	})
})

module.exports = router;
