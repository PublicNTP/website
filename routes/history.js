var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('history', {
		the_title: 'History | PublicNTP',
		relative_path: './'
	})
})

module.exports = router;
