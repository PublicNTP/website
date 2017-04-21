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


router.get('/new_post', function(req, res) {
	models.Post.findAll()
	.then(function(posts) {
		models.Category.findAll()
		.then(function(categories) {
			res.render('new_post',{
				categories: JSON.parse(JSON.stringify(categories)),
				posts: JSON.parse(JSON.stringify(posts))
			})
		})
	})
})

router.post('/new_post', function(req, res) {
	models.Category.findOne({
		where: {
			name: req.body.category
		}
	}).then(function(category) {
		category = JSON.parse(JSON.stringify(category))
		console.log('cat', category)
		models.Post.create({
			CategoryId: category.id,
			title: req.body.title,
			image_url: req.body.image_url,
			permalink: req.body.permalink,
			excerpt: req.body.excerpt,
			content: req.body.content
		}).then(function(post) {
			console.log('post', post)	
		})
	})
})

router.get('/new_category', function(req, res) {
	models.Category.findAll()
	.then(function(categories) {
		res.render('new_category',{
			categories: JSON.parse(JSON.stringify(categories))
		})
	})
})

router.post('/new_category', function(req, res) {
	console.log('req', req.body)
	models.Category.create({
		name: req.body.category,
		permalink: '/blog/' + req.body.permalink,
	}).then(function() {
		models.Category.findAll()
		.then(function(categories) {
			res.render('new_category',{
				categories: JSON.parse(JSON.stringify(categories))
			})
		})
	})
})

module.exports = router;
