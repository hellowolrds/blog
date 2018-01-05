var express = require('express');
var moment = require('moment');
var router = express.Router();
var article = require('../controller/Index');
var blog = require('../controller/Article');
var photo = require('../controller/Photo');

/* GET home page. */
router.get('/', function(req, res, next) {
	article.getData((data)=>{
		res.render('index/index', data);
	});
  	
});
router.get('/blog', (req, res, next)=> {
	blog.getAll().then(data=> {
		res.render('blog/index', data);
	});
	
})
router.get('/photo', (req, res, next)=>{
	photo.getPhotos().then((result)=>{
		res.render('photo/index', {photo: result});
	});
})
router.get('/detail/:id', (req, res, next)=> {
	blog.getDetail(req.params.id).then(result=> {
		res.render('blog/detail', {blog: result[0], moment: moment});
	});
	
})

module.exports = router;
