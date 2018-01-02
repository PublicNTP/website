var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('connect', {
		the_title: 'Connect | PublicNTP' 
	})
})

module.exports = router;
