var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host:'localhost',
  port: 3306,
  user: 'root',
  password: '12345qwert!',
  database: 'posmaster'
});

connection.connect(function(err){
  if(err) {
    console.error('mysql connection error');
    console.error(err);
    throw err;
  }
});

// const goods = require('../data/goods.json');

router.get('/', function(req, res, next) {
  console.log('init goods get');
  connection.query("SELECT id, name, price, category FROM posmaster.goods", function(err, row){
    if(err) {
      res.json({
        success: false,
        message: 'no goods'
      })
    }
    console.log('connect mysql');
    res.json({ goods: row });
    // if(row.length > 0) {
    //   res.json({ goods: row });
    // }
  })
  // res.json({goods: goods});
});

module.exports = router;
