var express = require('express');
var postbatch = require('SiteGen');
var router = express.Router();

  
var postPath = './public/posts'; // path for postbatch
var jadeArray = postbatch.postBatch(postPath);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'N0d3 M4dN3SS!', proccessedPosts: jadeArray});
});


module.exports = router;
