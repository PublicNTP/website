var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('donate', {
		the_title: 'Donate | PublicNTP',
		relative_path: './'
	})
})

module.exports = router;