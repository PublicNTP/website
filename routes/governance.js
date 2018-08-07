var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	res.render('governance', {
		the_title: 'Governance | PublicNTP',
		relative_path: './',
		description: 'We operate with transparency. Feel free to browse our company\'s governing documents by clicking any item\'s title.',
		url: req.originalUrl
	})
})

module.exports = router;
