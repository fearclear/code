const express = require('express')
const router = express.Router()
const fc = require('../../business')

// 登陆
router.post('/signIn', fc.signIn)

// 注册
router.post('/signUp', fc.signUp)

module.exports = router
