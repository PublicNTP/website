var express = require('express');
var router = express.Router();



router.get('/', function(req, res) {
	rrd.last(filename, function (last) {
		console.log('last',last);
	});
	var rows = [];
	var points = []
	for (var i = 200; i > 0; i = i - 20) {
		rows.push(i);
	}
	
	for (var i = 0; i < 150; i++) {
		var randGreen = 0;
		var randPurple = 0;
		if (i % 10 == 0) {
			randGreen = Math.floor((Math.random() * 80) + 1) + 20;
		} else {
			randGreen = Math.floor((Math.random() * 30) + 1) + 20;
		}
		randPurple = Math.floor((Math.random() * randGreen) + 1);
		randPurple = Math.floor((randPurple / randGreen) * 100);
		points.push({ p: randPurple, g: randGreen});
	}
	res.render('stats', {
		rows: rows,
		points: points
	})
})

module.exports = router;
