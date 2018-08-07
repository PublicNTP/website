var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	res.render('thank_you', {
		the_title: 'Thanks | PublicNTP',
		relative_path: './',
		url: req.originalUrl,
		description: 'Thank You for Supporting PublicNTP!'
	})
})

module.exports = router;
