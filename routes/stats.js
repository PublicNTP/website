const express = require('express');
const router = express.Router();
const graphs = require('../data/graphs');
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
	res.render('stats', {
		graphs: graphs,
		the_title: 'Stats | PublicNTP',
		relative_path: './',
		url: req.originalUrl,
		description: 'Important PublicNTP Stats.',
		domain: newEnv
	})
})

module.exports = router;
