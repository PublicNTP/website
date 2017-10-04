var express = require('express');
var router = express.Router();
var moment = require('moment');
var posts = require('../data/posts.json');
var _ = require('lodash');
var timelineHelpers = require('../helpers/timelineHelpers');


router.get('/', function(req, res) {
	var limit = 10;
	var page = 0;
	if (req.query.page) {
		page = parseInt(req.query.page) - 1;
	}
	var next = null;
	var prev = null;
	if (limit * (page + 1) < posts.count) next = '/blog.html?page=' + (page + 2);
	if (page != 0 && page != 1) prev = '/blog.html?page=' + page;
	else if (page != 0) prev = '/blog.html';
	posts = posts.map(function(post, index) {
		post.time = moment(post.timestamp).format("<b>MMM</b> D, YYYY")
		return post
	})
	var timeline = timelineHelpers.buildTimeline(posts);
	timeline = timelineHelpers.denullifyTimeline(posts);

	res.render('blog', {
		posts: posts,
		deserializedPosts: JSON.stringify(posts),
		next: next,
		prev: prev,
		timeline: timeline,
		the_title: 'Blog | PublicNTP',
		relative_path: '../'
	})
})

router.get('/posts/:permalink.html', function(req, res) {
	var post = _.find(posts, { 'permalink': req.params.permalink });
	post.time = moment(post.timestamp).format("<b>MMMM</b> D, YYYY");
	res.render('blog_detail', {
		post: post,
		the_title: post.title + ' - Blog | PublicNTP',
		relative_path: '../../'
	})
})

module.exports = router;
