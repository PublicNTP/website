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
	res.render('donate', {
		the_title: 'Donate | PublicNTP',
		relative_path: './',
		description: 'Bring Time to the World. Donate to PublicNTP.',
		// image: 
		image_alt: 'Donate to PublicNTP',
		url: req.originalUrl,
		domain: newEnv
	})
})

module.exports = router;