var express = require('express');
var router = express.Router();
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
	res.render('connect', {
		the_title: 'Connect | PublicNTP',
		relative_path: './',
		description: 'Sign up for our newsletter. Or drop us a line at contact@publicntp.org.',
		url: req.originalUrl,
		domain: newEnv
	})
})

module.exports = router;
