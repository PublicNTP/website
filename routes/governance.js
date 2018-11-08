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
	res.render('governance', {
		the_title: 'Governance | PublicNTP',
		relative_path: './',
		description: 'We operate with transparency. Feel free to browse our company\'s governing documents by clicking any item\'s title.',
		url: req.originalUrl,
		domain: newEnv
	})
})

module.exports = router;
