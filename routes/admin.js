var express = require('express');
var path = require('path');
var router = express.Router();
var multer = require('multer');
var moment = require('moment');
var models = require('../models');
var authConfig = require('../authConfig');


var uploading = multer({
    dest: path.dirname(require.main.filename) + '/public/uploads/',
    limits: { fileSize: 10000000, files:1 },
});

var isAuthenticated = function(req, res) {
	if (req.session.permission) {
		return true
	} else {
		res.redirect('/admin/login')		
	}
}

router.get('/login', function(req, res) {
	res.render('login', {})
})

router.post('/login', function(req, res) {
	if (req.body.username === authConfig.username && req.body.password === authConfig.password) {
		req.session.permission = true;
		res.redirect('/admin')
	} else {
		res.redirect('login')
	}
})

router.get('/', function(req, res) {
	if (isAuthenticated(req, res)) {
		models.Post.findAll().then(function(posts) {
			console.log('posts', posts)
			models.Post.findAndCountAll({
				limit: 10,
				raw: true
			}).then(function(posts) {
				posts = posts.rows.map(function(post, index) {
					post.time = moment(post.createdAt).format("MMM Do YYYY")
					return post
				})
				res.render('admin', {
					posts: posts
				})
			})
		})	} 
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
	}
})


router.post('/posts/new', uploading.single('image_upload'), function(req, res) {
	console.log('here', req.file)
	
	if (isAuthenticated(req, res)) {
		//models.Category.findOne({
		//	where: {
		//		name: req.body.category
		//	}
		//}).then(function(category) {
		//	category = JSON.parse(JSON.stringify(category))
		//	console.log('cat', category)
		//	var permalink = req.body.title;
		//	permalink = permalink.toLowerCase();
		//	permalink = permalink.replace(/ /g, '-');
		//	
		//	models.Post.create({
		//		CategoryId: category.id,
		//		title: req.body.title,
		//		image_url: '/uploads/' + req.file.filename, 
		//		permalink: permalink,
		//		excerpt: req.body.excerpt,
		//		content: req.body.content
		//	}).then(function(post) {
		//		console.log('post', post)	
		//		res.redirect('/admin')
		//	})
		//})

		var tags = req.body.tags.split(',')
		models.Post.findOne({
		}).then(function(post) {
			post = JSON.parse(JSON.stringify(post))
			
			
			for (var i in tags) {
				if (tags[i] != ' ') {
					models.Tag.create({
						name: tags[i],
						PostId: post.id
					}).then(function(tag) {
						tag.belongsTo(post)
						console.log('asdfadfdfdf', tag)	
					})
				}
			}
			res.redirect('/admin')
		})
		
		
	}
})

router.get('/categories/new', function(req, res) {
	if (isAuthenticated(req, res)) {
		models.Category.findAll()
		.then(function(categories) {
			res.render('new_category',{
				categories: JSON.parse(JSON.stringify(categories))
			})
		})
	}
})

router.post('/categories/new', function(req, res) {
	if (isAuthenticated(req, res)) {
		console.log('req', req.body)
		var permalink = req.body.category;
		permalink = permalink.toLowerCase();
		permalink = permalink.replace(/ /g, '-');

		models.Category.create({
			name: req.body.category,
			permalink: '/blog/categories/' + permalink,
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
