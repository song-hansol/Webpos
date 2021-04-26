const LocalStrategy = require('passport-local').Strategy;
const users = require('../data/users.json');
//DB 연결
// const bcrypt = require('bcrypt');

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
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

exports.config = (passport) => {

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    const result = users.filter((user) => user.id === id);
    if(result.length > 0){
      done(null, result[0]);
    }
  });

  passport.use(new LocalStrategy({
    usernameField: 'id',
    passwordField: 'password',
  }, (id, password, done) => {

    connection.query('SELECT * FROM posmaster.user WHERE id="'+id+'"', function(err,row){
      if(err) {
        res.json({
          success: false,
          message: 'Login failed please check your id or password'
        })
      }
      if(row[0] !== undefined && row[0].id == id) {

        if(row.length > 0){
          const user = row[0];
          if(password === user.password){
            console.log("id, pw 모두일치 ");
            done(null, user);
          }
          else {
            console.log(" pw not correct ");
            done(null, false, {message: "비밀번호 틀림"});
          }
        }
        else{
          console.log(" no user ");
          done(null, false, {message: "가입되지 않은 회원"});
        }
      }
    });

    // const result = users.filter((user) => user.id === id);


    // if(result.length > 0){
    //   const user = result[0];
    //   if(password === user.password){
    //     done(null, user);
    //   }
    //   else {
    //     done(null, false, {message: "비밀번호 틀림"});
    //   }
    // }
    // else{
    //   done(null, false, {message: "가입되지 않은 회원"});
    // }
  }));
}
