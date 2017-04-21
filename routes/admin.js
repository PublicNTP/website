var express = require('express');
var router = express.Router();
var models = require('../models');
var moment = require('moment');
var authConfig = require('../authConfig')


var isAuthenticated = function(req, res) {
	if (req.session.permission) {
		return true
	} else {
		res.redirect('/admin/login')		
	}
}

router.get('/', function(req, res) {
	if (isAuthenticated(req, res)) {
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
				res.render('admin', {
					posts: posts
				})
			})
		})	
	} 
})

router.get('/login', function(req, res) {
	res.render('login', {})
})

router.post('/login', function(req, res) {
	if (req.body.username === authConfig.username && req.body.password === authConfig.password) {
		req.session.permission = true;
		console.log('re', req.session)
		res.redirect('/admin')
	} else {
		res.redirect('login')
	}
})

router.get('/posts/:id/destroy', function(req, res) {
	if (isAuthenticated(req, res)) {
		models.Post.destroy({
			where: {
				id: req.params.id
			}
		}).then(function() {
			res.redirect('/admin/')
		})
	}
})

router.get('/posts/new', function(req, res) {
	if (isAuthenticated(req, res)) {
		models.post.findall()
		.then(function(posts) {
			models.category.findall()
			.then(function(categories) {
				res.render('new_post',{
					categories: json.parse(json.stringify(categories)),
					posts: json.parse(json.stringify(posts))
				})
			})
		})
	}
})

router.get('/posts/new', function(req, res) {
	if (isAuthenticated(req, res)) {
		models.post.findall()
		.then(function(posts) {
			models.category.findall()
			.then(function(categories) {
				res.render('new_post',{
					categories: json.parse(json.stringify(categories)),
					posts: json.parse(json.stringify(posts))
				})
			})
		})
	}
})

router.post('/posts/new', function(req, res) {
	if (isAuthenticated(req, res)) {
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
	}
})

router.get('/new_category', function(req, res) {
	if (isAuthenticated(req, res)) {
		models.Category.findAll()
		.then(function(categories) {
			res.render('new_category',{
				categories: JSON.parse(JSON.stringify(categories))
			})
		})
	}
})

router.post('/new_category', function(req, res) {
	if (isAuthenticated(req, res)) {
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
	}
})

module.exports = router;
