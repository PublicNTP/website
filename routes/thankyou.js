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
	res.render('thank_you', {
		the_title: 'Thanks | PublicNTP',
		relative_path: './',
		url: req.originalUrl,
		description: 'Thank You for Supporting PublicNTP!',
		domain: newEnv
	})
})

module.exports = router;