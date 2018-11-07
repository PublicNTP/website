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
	res.render('terms', {
		the_title: 'Terms | PublicNTP',
		relative_path: './',
		url: req.originalUrl,
		description: 'Bring Time to the World',
		domain: newEnv
	})
})

module.exports = router;
