var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.end('news');
});

router.get('/haha', function(req, res, next) {
  res.end('kekeke');
});
module.exports = router;