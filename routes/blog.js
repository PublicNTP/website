var express = require('express');
var router = express.Router();
var models = require('../models');
var moment = require('moment');
var request = require('request');


var getYearIndex = function(timeline, year) {
	var yearIndex = -1;
	for (var j in timeline) {
		if (timeline[j].year == year) {
			yearIndex = j;
			break;
		}
	}
	return yearIndex;
}

var pushPostToTimeline = function(timeline, year, month, monthNum, yearIndex, timelinePost) {
	if (yearIndex == -1) {
		var key = {}
		key['year'] = year;
		key['months'] = [];
		key.months[monthNum] = {};
		key.months[monthNum]['month'] = month;
		key.months[monthNum]['posts'] = [];
		key.months[monthNum]['posts'].push(timelinePost)
		timeline.push(key)
	} else if (timeline[yearIndex].months[monthNum] && timeline[yearIndex].months[monthNum]['posts']) {
		timeline[yearIndex].months[monthNum]['posts'].push(timelinePost)
	} else {
		timeline[yearIndex].months[monthNum] = {}		
		timeline[yearIndex].months[monthNum]['month'] = month;
		timeline[yearIndex].months[monthNum]['posts'] = [];
		timeline[yearIndex].months[monthNum]['posts'].push(timelinePost)
	}

	return timeline;
}
//This is the data structure of the posts
// [ {
//     2017: [ 
//     	 6: {
//        month: 'June',
//        posts: []
//	   	}]
//     ]
//   }
// ]

var buildTimeline = function(timelinePosts) {
	var timeline = []
	for (var i in timelinePosts) {
		var year = moment(timelinePosts[i].createdAt).format('Y')
		var month = moment(timelinePosts[i].createdAt).format('MMMM');
		var monthNum = parseInt(moment(timelinePosts[i].createdAt).format('M'))
		var yearIndex = getYearIndex(timeline, year);	
		timeline = pushPostToTimeline(timeline, year, month, monthNum, yearIndex, timelinePosts[i]);
	}
	return timeline;
}

var denullifyTimeline = function(timeline) {
	for (var i in timeline) {
		var tempTimeline = []
		for (var j in timeline[i].months) {
			if (timeline[i].months[j] != null)
				tempTimeline.push(timeline[i].months[j]);
		}
		timeline[i].months = tempTimeline;
	}
	return timeline;
}

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
			var timeline = buildTimeline(timelinePosts);
			timeline = denullifyTimeline(timeline);

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
