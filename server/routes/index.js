var express = require('express')
var router = express.Router()
const api = require('./api')

/* GET home page. */
router.all('*', function(req, res, next) {
  // if(!req.headers['x-fc-version'] || !req.headers['x-fc-terminal']) {
  //   res.status(403).send({text: '渠道标志错误'})
  // }
  // if(req.headers['x-fc-version'] !== '1.0.0') {
  //   res.status(403).send({text: '版本错误，请更新至最新版本访问，浏览器用户可清空缓存刷新'})
  // }else {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'x-fc-version, x-fc-terminal, X-Requested-With, accept, origin, content-type')
  res.header('Access-Control-Request-Headers', '*')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
  // }
})
router.use('/api', api)

module.exports = router
