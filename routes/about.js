var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('about_us', {
		the_title: 'People | PublicNTP',
		relative_path: './'
	})
})

module.exports = router;
