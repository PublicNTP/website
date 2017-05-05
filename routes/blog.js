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
		if (limit * (page + 1) < posts.count) next = '/blog?page=' + (page + 2);
		if (page != 0 && page != 1) prev = '/blog?page=' + page;
		else if (page != 0) prev = '/blog';
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
			var timeline = timelineHelpers.buildTimeline(timelinePosts);
			timeline = timelineHelpers.denullifyTimeline(timeline);

			res.render('blog', {
				posts: posts,
				deserializedPosts: JSON.stringify(timelinePosts),
				next: next,
				prev: prev,
				timeline: timeline
			})
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

module.exports = router;
