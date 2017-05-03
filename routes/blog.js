var express = require('express');
var router = express.Router();
var models = require('../models');
var moment = require('moment');
var request = require('request');

router.get('/', function(req, res) {
	models.Post.findAndCountAll({
		limit: 10,
		include: [{
			model: models.Tag,
			as: 'Tags'
		}, {
			model: models.Image,
			as: 'Images'
		}]
	}).then(function(posts) {
		posts = JSON.parse(JSON.stringify(posts))
		posts = posts.rows.map(function(post, index) {
			post.time = moment(post.createdAt).format("MMM Do YYYY")
			return post
		})
		models.Post.findAll({
			attributes: [ 'id', 'createdAt', 'title', 'permalink' ],
			include: [{
				model: models.Tag,
				as: 'Tags'
			}]
		}).then(function(timelinePosts) {
			timelinePosts = JSON.parse(JSON.stringify(timelinePosts))
			var tlp = {} 
			var years = []
			for (var i in timelinePosts) {
				var year = moment(timelinePosts[i].createdAt).format('Y')
				var month = parseInt(moment(timelinePosts[i].createdAt).format('M'))
				if (tlp[year] && tlp[year][month]) {
					tlp[year][month].push(timelinePosts[i])
				} else if (tlp[year] && !tlp[year][month]) {
					tlp[year][month] = []
					tlp[year][month].push(timelinePosts[i])
				} else {
					tlp[year] = [] 
					tlp[year][month] = []
					tlp[year][month].push(timelinePosts[i])
				}
			}
			console.log('tlp2', tlp)
			res.render('blog', {
				posts: posts,
				deserializedPosts: JSON.stringify(timelinePosts)
			})
		})
	})
})

router.post('/search', function(req, res) {
	var search = req.body.search;
	models.Post.findAll({
		where: {
			$or: [
				{ 'title': { $iLike: '%' + search + '%' } },
				{ '$Tags.name$': { $iLike: '%' + search + '%' } }
			]
		},
		include: [{
			model: models.Tag,
			as: 'Tags'
		}]
	}).then(function(posts) {
		res.render('partials/searchItem', {
			layout: false,
			searchPosts: posts
		})
	})
})

router.get('/posts/:permalink', function(req, res) {
	models.Post.findOne({
		where: {
			permalink: req.params.permalink
		},
		include: [{
			model: models.Image,
			as: 'Images'
		}]	
	}).then(function(post) {
		post = JSON.parse(JSON.stringify(post))
		post.time = moment(post.createAt).format("MMMM Do, YYYY");
		res.render('blog_detail', {
			post: post
		})
	})
})

router.get('/tags', function(req, res) {
	models.Tag.findAll({
	}).then(function(tags) {
		tags = JSON.parse(JSON.stringify(tags))
	})
})


module.exports = router;
