var moment = require('moment');

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

  console.log('timeline', timeline)

	return timeline;
}

module.exports = {

	buildTimeline: function(timelinePosts) {
		var timeline = []
		for (var i in timelinePosts) {
			var year = moment(timelinePosts[i].timestamp).format('Y')
			var month = moment(timelinePosts[i].timestamp).format('MMMM');
			var monthNum = parseInt(moment(timelinePosts[i].timestamp).format('M'))
      var yearIndex = getYearIndex(timeline, year);
			timeline = pushPostToTimeline(timeline, year, month, monthNum, yearIndex, timelinePosts[i]);
		}
		return timeline;
	},
	denullifyTimeline: function(timeline) {
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
}
