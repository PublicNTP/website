var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	res.render('about_us', {
		the_title: 'People | PublicNTP',
		relative_path: './',
		description: 'Time to Meet the Team at PublicNTP.',
		url: req.originalUrl,
		image: 'images/terry.jpg',
		image_alt: 'Terry Ott - Founder of PublicNTP'
	})
})

module.exports = router;
