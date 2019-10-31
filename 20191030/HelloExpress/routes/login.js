var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list', function(req, res, next) {
  res.render("list",{userName:"zhangsan",newList:[{
    "newId":1,newTitle:"脱贫"
  },{
    "newId":2,newTitle:"人民"
  }]});   
});

module.exports = router;