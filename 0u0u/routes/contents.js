var express = require('express');
var router = express.Router();
var db = require('../util/db.js');

var ServerBoolResult = {
  bResult : false
};

router.post('/write',function(req,res){

    var content = {
      contents_title : req.body.contents_title,
      contents_image : req.body.contents_image,
      contents_description : req.body.contents_description,
      contents_status : req.body.contents_status,
      contents_owner : req.body.contents_owner
    };

    var sql = 'INSERT INTO contents SET ?';
    db.query(sql, content, function(err, result){
      if (err) {
        res.status(500);
        //오류 발생
      } else {
        ServerBoolResult.bResult = true;
      }
      res.json(ServerBoolResult);
    });
});


module.exports = router;
