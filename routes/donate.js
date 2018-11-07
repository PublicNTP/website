var express = require('express');
var router = express.Router();
var { env } = require('../gulpfile.js');

console.log('env here: ', env);
let newEnv;

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
		// domain: 'https://publicntp.org'
	})
})

module.exports = router;