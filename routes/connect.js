var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	res.render('connect', {
		the_title: 'Connect | PublicNTP',
		relative_path: './',
		description: 'Sign up for our newsletter. Or drop us a line at contact@publicntp.org.',
		url: req.originalUrl
	})
})

module.exports = router;
