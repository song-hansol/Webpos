var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.sendfile(path.join(__dirname,'../public/index.html'));
  console.log("index?");
  res.render('index', { title: 'Express' });
});

module.exports = router;
