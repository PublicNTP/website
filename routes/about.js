var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('about_us', {
		the_title: 'About Us | PublicNTP'
	})
})

module.exports = router;
