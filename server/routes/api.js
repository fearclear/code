const express = require('express')
const router = express.Router()
const fc = require('./fc')

/* 版本监控 */
router.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'x-fc-version, x-fc-terminal, X-Requested-With, accept, origin, content-type')
  res.header('Access-Control-Request-Headers', '*')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('Content-Type', 'application/json;charset=utf-8')
  if(!req.headers['x-fc-version'] || !req.headers['x-fc-terminal'] || req.headers['x-fc-version'] !== '1.0.0') {
    res.status(403)
  }
  if(!req.headers['x-fc-version'] || !req.headers['x-fc-terminal']) {
    res.end({text: '渠道标志错误'})
  }
  if(req.headers['x-fc-version'] !== '1.0.0') {
    res.end({text: '版本错误，请更新至最新版本访问，浏览器用户可清空缓存刷新'})
  }else {
    next()
  }
})
/* GET api listing. */
router.get('/', function(req, res, next) {
  res.send({text: '404'})
})

router.use('/user', fc.user)

module.exports = router
