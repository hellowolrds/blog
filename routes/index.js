var express = require('express');
var router = express.Router();
var article = require('../controller/Index');

/* GET home page. */
router.get('/', function(req, res, next) {
	article.getData((data)=>{
		res.render('index/index', data);
	});
  	
});

module.exports = router;
