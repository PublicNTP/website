var express = require('express');
var path = require('path');
var router = express.Router();
var multer = require('multer');
var moment = require('moment');
var models = require('../models');
// var authConfig = require('../authConfig');




var uploading = multer({
	storage: multer.diskStorage({
		destination: function (req, file, cb) {
			cb(null, path.dirname(require.main.filename) + '/public/uploads')
		},
		filename: function (req, file, cb) {
			cb(null, file.fieldname + '-' + Date.now())
	  	}
	})
});

// var isAuthenticated = function(req, res) {
// 	if (req.session.permission) {
// 		return true
// 	} else {
// 		res.redirect('/admin/login')
// 	}
// }

var isAuthenticated = true;

router.get('/login', function(req, res) {
	res.render('login', {})
})

router.post('/login', function(req, res) {
	if (true) {
	// if (req.body.username === authConfig.username && req.body.password === authConfig.password) {
		req.session.permission = true;
		res.redirect('/admin')
	} else {
		res.redirect('login')
	}
})

router.get('/', function(req, res) {
	if (isAuthenticated(req, res)) {
		models.Post.findAll().then(function(posts) {
			models.Post.findAndCountAll({
				limit: 10,
				raw: true,
				order: [
					['id', 'DESC']
				]
			}).then(function(posts) {
				posts = posts.rows.map(function(post, index) {
					post.time = moment(post.createdAt).format("MMM Do YYYY")
					return post
				})
				console.log(posts)
				res.render('admin', {
					posts: posts
				})
			})
		})
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


router.post('/posts/new', uploading.array('image_upload', 12), function(req, res) {

	if (isAuthenticated(req, res)) {
		models.Category.findOne({
			where: {
				name: req.body.category
			}
		}).then(function(category) {
			category = JSON.parse(JSON.stringify(category))
			var permalink = req.body.title;
			permalink = permalink.toLowerCase();
			permalink = permalink.replace(/ /g, '-');

			models.Post.create({
				CategoryId: category.id,
				title: req.body.title,
				permalink: permalink,
				excerpt: req.body.excerpt,
				content: req.body.content
			}).then(function(post) {
				var tags = req.body.tags.split(',')
				post = JSON.parse(JSON.stringify(post))
				var images = req.files;
				for (var i in images) {
					models.Image.create({
						file_name: '/uploads/' + images[i].filename,
						PostId: post.id
					}).then(function(img) {
					})
				}

				for (var i in tags) {
					if (tags[i] != ' ') {
						models.Tag.create({
							name: tags[i],
							PostId: post.id
						}).then(function(tag) {
						})
					}
				}
				res.redirect('/admin')
			})
		})
	}
})

router.get('/posts/:id/edit', function(req, res) {
	if (isAuthenticated(req, res)) {
		models.Post.findOne({
			where: {
				id: req.params.id
			},
			include: [{
				model: models.Category,
				as: 'Category'
			}, {
				model: models.Tag,
				as: 'Tags'
			}, {
				model: models.Image,
				as: 'Images'
			}]
		})
		.then(function(post) {
			models.Category.findAll()
			.then(function(categories) {
				res.render('edit_post',{
					categories: JSON.parse(JSON.stringify(categories)),
					post: JSON.parse(JSON.stringify(post))
				})
			})
		})
	}
})

router.post('/posts/:id/update', uploading.array('image_upload', 12), function(req, res) {

	if (isAuthenticated(req, res)) {
		models.Category.findOne({
			where: {
				name: req.body.category
			}
		}).then(function(category) {
			category = JSON.parse(JSON.stringify(category))
			var permalink = req.body.title;
			permalink = permalink.toLowerCase();
			permalink = permalink.replace(/ /g, '-');

			models.Post.findOne({
				where: {
					id: req.params.id
				}
			}).then(function(post) {
				console.log('here')
				post.updateAttributes({
					CategoryId: category.id,
					title: req.body.title,
					permalink: permalink,
					excerpt: req.body.excerpt,
					content: req.body.content
				}).then(function(post) {
					var tags = req.body.tags.split(',')
					post = JSON.parse(JSON.stringify(post))
					var images = req.files;
					for (var i in images) {
						models.Image.create({
							file_name: '/uploads/' + images[i].filename,
							PostId: post.id
						}).then(function(img) {
						})
					}

					for (var i in tags) {
						if (tags[i] != ' ') {
							models.Tag.create({
								name: tags[i],
								PostId: post.id
							}).then(function(tag) {
							})
						}
					}
					res.redirect('/admin')
				})
			})

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

router.get('/image/:id/destroy', function(req, res) {
	if (isAuthenticated(req, res)) {
		models.Image.destroy({
			where: {
				id: req.params.id
			}
		}).then(function() {
			res.redirect('/admin')
		})
	}
})

router.get('/tags/:id/destroy', function(req, res) {
	if (isAuthenticated(req, res)) {
		models.Tag.destroy({
			where: {
				id: req.params.id
			}
		}).then(function() {
			res.redirect('/admin')
		})
	}
})

module.exports = router;
