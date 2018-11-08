const express = require('express');
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
	res.render('about_us', {
		the_title: 'People | PublicNTP',
		relative_path: './',
		description: 'Time to Meet the Team at PublicNTP.',
		url: req.originalUrl,
		image: 'images/people-terry.jpg',
		image_alt: 'Terry Ott - Founder of PublicNTP',
		domain: newEnv
	})
})

module.exports = router;
