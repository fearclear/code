var express = require('express');
const fs = require('fs');
const util = require('util');
var router = express.Router();
let uuid = require('uuid');
let users = require('../business/users')

/* GET home page. */
router.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, accept, origin, content-type");
  res.header("Access-Control-Request-Headers", "*");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

router.get('/add', function(req, res, next){
  res.json([{ad: 123}])
})
router.get('/', function(req, res, next) {
  res.send(123);
});
module.exports = router;
