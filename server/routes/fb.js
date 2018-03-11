var express = require('express');
var router = express.Router();
var FB = require('fb');


router.get('/',function(req,res){
  console.log(req.body.token)
  FB.api('/me', function (res) {
    if(!res || res.error) {
    console.log(!res ? 'error occurred' : res.error);
    return;
    }
    console.log(res.id);
    console.log(res.name);
  });
});


module.exports = router;