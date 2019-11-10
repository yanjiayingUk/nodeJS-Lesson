var express = require('express');
var router = express.Router();
const fs=require("fs");
const path=require("path");
var filePath=path.join(__dirname,"/data.json");
var fileContent=fs.readFileSync(filePath);
var content=JSON.parse(fileContent);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render("login",content.users[0]);   
});

router.post('/list',function(req,res,next){
  var title=req.body.username;
  var pwd=req.body.pwd;

  if(title==content.users[0].username && pwd==content.users[0].password){
      res.render("list",{chapterList:content.chapterList});   
  }
  else{
    res.writeHead(200, { "Content-Type": "text/plain;charset=utf-8" });
    res.write("用户名或密码错误");
    res.end();
  }
})

// router.get('/list', function(req, res, next) {
//   res.render("list",{chapterList:content.chapterList});   
// });

module.exports = router;
