var express = require('express');
var router = express.Router();
var locations = require('../data/locations');
var posts = require('../data/posts.json');

router.get('/', function(req, res) {
	var post = posts[0];
	console.log('post', post);
	res.render('home', {
		locations: locations,
		post: post,
		the_title: 'PublicNTP'
	})
})

module.exports = router;
