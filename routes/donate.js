var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	res.render('donate', {
		the_title: 'Donate | PublicNTP',
		relative_path: './',
		description: 'Bring Time to the World. Donate to PublicNTP.',
		// image: 
		image_alt: 'Donate to PublicNTP',
		url: req.originalUrl
	})
})

module.exports = router;