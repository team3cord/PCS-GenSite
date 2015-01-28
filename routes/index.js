var express = require('express');
var postbatch = require('SiteGen');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'N0d3 M4dN3SS!', proccessedPosts: postbatch.fileCollector});
});
// path for postbatch  
var postPath = './public/posts';
var fileCollector = [];
postbatch.postBatch(postPath,fileCollector);
console.log(postbatch.fileCollector);

postbatch.consoleMe('bill');

module.exports = router;
