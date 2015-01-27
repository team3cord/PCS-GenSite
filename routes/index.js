var express = require('express');
var postbatch = require('sitegen');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'N0d3 M4dN3SS!' });
});

postbatch.consoleMe('bill');
module.exports = router;
