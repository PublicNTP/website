var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	res.render('history', {
		the_title: 'History | PublicNTP',
		relative_path: './',
		description: 'The history and making of NTP.',
		url: req.originalUrl,
		image: 'images/atomic_clock.jpg',
		image_alt: 'Original Atomic Clock'
	})
})

module.exports = router;
