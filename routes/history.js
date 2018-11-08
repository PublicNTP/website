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
	res.render('history', {
		the_title: 'History | PublicNTP',
		relative_path: './',
		description: 'The history and making of NTP.',
		url: req.originalUrl,
		image: 'images/atomic_clock.jpg',
		image_alt: 'Original Atomic Clock',
		domain: newEnv
	})
})

module.exports = router;
