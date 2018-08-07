var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	res.render('terms', {
		the_title: 'Terms | PublicNTP',
		relative_path: './',
		url: req.originalUrl,
		description: 'Bring Time to the World'
	})
})

module.exports = router;
