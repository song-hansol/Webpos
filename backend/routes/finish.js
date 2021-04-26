var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var async =require('async');

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

router.post('/', function(req, res){
  console.log("ggochu");
  console.log(req.body.object);
  console.log(req.body.object.Items[0]);

  var stmt_multiple_insert = 'insert into posmaster.transaction (saledate, posno, trnum, goodsname, counts, amt, totalamt) values ?;'; // 쿼리문

  var v = [];
  for(var i=0;i<req.body.object.Items.length;i++){
    var temp = [req.body.object.date, req.body.object.posNo, req.body.object.trnum, req.body.object.Items[i].item.name, req.body.object.Items[i].count, req.body.object.Items[i].price, req.body.object.totalPrice];
    v.push(temp);
  }
  console.log(v);
  var str_query = connection.query(stmt_multiple_insert, [v], function (err, result) {
      if (err) {
          console.log(err);
          res.json({
            success: false,
            message: 'insert fail'
          })
      } else {
          console.log(str_query.sql);
          res.json({
            success: true,
            message: 'insert succes'
          })
      }
  });

});

module.exports = router;
