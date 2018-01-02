var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('governance', {
		the_title: 'Governance | PublicNTP',
		relative_path: './'
	})
})

module.exports = router;
