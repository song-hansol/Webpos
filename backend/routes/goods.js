var express = require('express');
var router = express.Router();
const goods = require('../data/goods.json');

router.get('/', function(req, res, next) {
  res.json({goods: goods});
});

module.exports = router;
