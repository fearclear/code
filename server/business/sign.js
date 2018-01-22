/**
 * @namespace 登陆
 * @description 登陆逻辑
 * @name signIn
 * @author fearclear
 */
const dao = require('../dao')

// 注册
function signUp(req, res, next) {
  let data = req.body
  if(!data.userName) {
    res.status(403).send('请输入用户名')
  }else if(!data.password) {
    res.status(403).send('请输入密码')
  }else if(!data.email) {
    res.status(403).send('请输入邮箱地址')
  }else if(!data.passwordConfirm || data.password !== data.passwordConfirm) {
    res.status(403).send('两次密码不一致')
  }
  dao.getUser(data).then(res => console.log(res), err => console.log(err, 'err'))
  res.send('......')
}
// 登录
function signIn(req, res, next) {
  let data = req.body
  if(!data.userName || !data.password) {
    res.status(403).send('请输入正确的用户名或密码')
  }
  dao.userInfo.getUser(data)
    .then((doc) => {
      if(doc.password === data.password) {
        console.log(doc)
        res.send(doc)
      }
    }, err => next(err))
}

module.exports = {
  signUp, // 注册
  signIn // 登陆
}
