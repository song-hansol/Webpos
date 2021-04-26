const express = require('express');
const passport = require('passport');
const router = express.Router();

// const users = require('../data/users.json');

// router.get('/', function(req,res,next){
//   res.json({ user : users[0] });
// });

router.get('/', function(req,res,next){

  if(req.isAuthenticated() && req.user){
    return res.json({user: req.user});
  }

  return res.json({user: null});
});

router.post('/', function(req,res,next){

  if(req.isAuthenticated()){
    return res.redirect('/');
  }

  passport.authenticate('local', (authError,user,info) => {
    if(authError){
      console.error(authError);
      return nex(authError);
    }
    if(!user){
      return res.json(info);
    }
    return req.login(user,(loginError) => {
      if(loginError){
        console.error(loginError);
        return next(loginError);
      }
      return res.json({user});
    });
  })(req,res,next);
});  //미들웨어 호출

router.post('/logout', function (req, res) {
  console.log("logout~~server");
  req.logout();
  res.redirect('/');
});
module.exports = router;
