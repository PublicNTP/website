var express = require('express');
var router = express.Router();
var locations = require('../data/locations');
var posts = require('../data/posts.json');

router.get('/', function(req, res) {
	var post = posts[0];
	res.render('home', {
		locations: locations,
		post: post,
		the_title: 'PublicNTP',
		relative_path: './'
	})
})

module.exports = router;
