var express = require('express');
var postbatch = require('SiteGen');
var router = express.Router();

// path for postbatch  
var postPath = './public/posts';
var jadeArray = postbatch.postBatch(postPath);
console.log(jadeArray);

postbatch.consoleMe('bill');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'N0d3 M4dN3SS!', proccessedPosts: jadeArray});
});


module.exports = router;
