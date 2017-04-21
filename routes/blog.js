var express = require('express');
var router = express.Router();
var models = require('../models');
var moment = require('moment');
var request = require('request');

router.get('/', function(req, res) {
	models.Post.findAll().then(function(posts) {
		console.log('posts', posts)
		models.Post.findAndCountAll({
			limit: 10
		}).then(function(posts) {
			posts = JSON.parse(JSON.stringify(posts))
			posts = posts.rows.map(function(post, index) {
				post.time = moment(post.createdAt).format("MMM Do YYYY")
				return post
			})
			console.log('posts', posts)
			res.render('blog', {
				posts: posts
			})
		})
	})	
})


router.get('/posts/:permalink', function(req, res) {
	models.Post.findOne({
		where: {
			permalink: req.params.permalink
		}
	}).then(function(post) {
		post = JSON.parse(JSON.stringify(post))
		post.time = moment(post.createAt).format("MMMM Do, YYYY");
		res.render('blog_detail', {
			post: post
		})
	})
})

module.exports = router;
