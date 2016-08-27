var express = require('express');
var router = express.Router();
var db = require('../util/db.js');

var ServerBoolResult = {
  bResult : false
};

router.post('/login',function(req,res){
  var checkUser = req.body.user_kakao_id;

  var sql = 'SELECT user_kakao_id FROM user WHERE user_kakao_id = ?';
  db.query(sql, checkUser, function(err, result){
    if (err) {
      res.status(500);
      //오류 발생
    } else {
      if (result[0] == null) {
        ServerBoolResult.bResult = false;
        // 신규 사용자일 경우
      }else{
        ServerBoolResult.bResult = true;
        // 기존 사용자일 경우
      }
    }
    res.json(ServerBoolResult);
  });
});
//기존 사용자인지 신규 가입자인지 확인

router.post('/register',function(req,res){

  var user = {
    user_kakao_id : req.body.user_kakao_id,
    user_kakao_profileImage : req.body.user_kakao_profileImage,
    user_nickname : req.body.user_nickname,
    user_region : req.body.user_region
  };

  var sql = 'INSERT INTO user SET ?';
  db.query(sql, user, function(err, result){
    if (err) {
      res.status(500);
      //오류 발생
    } else {
      ServerBoolResult.bResult = true;
    }
    res.json(ServerBoolResult);
  });
});
//회원가입

module.exports = router;
