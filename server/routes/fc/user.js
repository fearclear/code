const express = require('express')
const router = express.Router()
const fc = require('../../business')

// 登陆
router.post('/signIn', fc.signIn)

// 注册
router.post('/signUp', fc.signUp)

// 检查用户名合法性
router.get('/checkUserName', fc.checkUserName)

module.exports = router
