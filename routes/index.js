var express = require('express');
var router = express.Router();
var models = require('../models');
var locations = require('../data/locations');

router.get('/', function(req, res) {
	models.Post.findAll().then(function(posts) {
		models.Post.findOne({
			raw: true
		}).then(function(post) {
			res.render('home', {
				locations: locations,
				post: post
			})
		})
	})	
})

module.exports = router;
