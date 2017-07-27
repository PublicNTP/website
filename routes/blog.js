var express = require('express');
var router = express.Router();
var models = require('../models');
var moment = require('moment');
var timelineHelpers = require('../helpers/timelineHelpers');


router.get('/', function(req, res) {
	var limit = 10;
	var page = 0;
	if (req.query.page) {
		page = parseInt(req.query.page) - 1;
	}
	models.Post.findAndCountAll({
		limit: limit,
		offset: page * limit,
		distinct: true,
		order: [
			['id', 'DESC']
		],
		include: [{
			model: models.Tag,
			as: 'Tags'
		}, {
			model: models.Image,
			as: 'Images'
		}]
	}).then(function(posts) {
		posts = JSON.parse(JSON.stringify(posts))
		var next = null;
		var prev = null;
		if (limit * (page + 1) < posts.count) next = '/blog.html?page=' + (page + 2);
		if (page != 0 && page != 1) prev = '/blog.html?page=' + page;
		else if (page != 0) prev = '/blog.html';
		posts = posts.rows.map(function(post, index) {
			post.time = moment(post.createdAt).format("<b>MMM</b> D, YYYY")
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
			var timeline = timelineHelpers.buildTimeline(timelinePosts);
			timeline = timelineHelpers.denullifyTimeline(timeline);

			res.render('blog', {
				posts: posts,
				deserializedPosts: JSON.stringify(timelinePosts),
				next: next,
				prev: prev,
				timeline: timeline,
				the_title: 'Blog | PublicNTP'
			})
		})
	})
})

router.get('/posts/:permalink.html', function(req, res) {
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
		post.time = moment(post.createdAt).format("<b>MMMM</b> D, YYYY");
		res.render('blog_detail', {
			post: post,
			the_title: post.title + ' - Blog | PublicNTP'
		})
	})
})

module.exports = router;
