var express = require('express');
var router = express.Router();
var models = require('../models');
var locations = require('../data/locations');

router.get('/', function(req, res) {
	models.Post.findOne({
		order: [
			[ 'id', 'DESC' ]
		],
		include: [{
			model: models.Image,
			as: 'Images'
		}]
	}).then(function(post) {
		post = JSON.parse(JSON.stringify(post))
		res.render('home', {
			locations: locations,
			post: post,
			the_title: 'PublicNTP'
		})
	})
})

module.exports = router;
