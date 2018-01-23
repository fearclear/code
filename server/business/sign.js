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
    next({
      status: 400,
      text: '用户名不可为空'
    })
  }else if(!data.password) {
    next({
      status: 400,
      text: '密码不可为空'
    })
  }else if(!data.email) {
    next({
      status: 400,
      text: '邮箱地址不可为空'
    })
  }else if(!data.passwordConfirm || data.password !== data.passwordConfirm) {
    next({
      status: 400,
      text: '两次密码不一致'
    })
  }else {
    dao.userInfo.getUser(data)
      .then(doc => {
        if(doc) {
          if(doc.userName === data.userName) {
            next({
              status: 400,
              text: '用户名已存在'
            })
          }else if(doc.email === data.email) {
            next({
              status: 400,
              text: '邮箱已注册'
            })
          }
        }else {
          dao.userInfo.addUser(data)
            .then(doc => {
              res.send({
                status: 200,
                text: '注册成功'
              })
            }, err => next(err))
        }
      })
  }
}
// 登录
function signIn(req, res, next) {
  let data = req.body
  if(!data.userName || !data.password) {
    next({
      status: 400,
      text: '用户名密码不可为空'
    })
  }else {
    dao.userInfo.getUser(data)
      .then((doc) => {
        if(doc) {
          if(doc.password === data.password) {
            let data = {
              userId: doc.userId,
              userName: doc.userName,
              registerDate: doc.registerDate,
              email: doc.email
            }
            res.send(data)
          }else {
            next({
              status: 400,
              text: '密码错误'
            })
          }
        }else {
          next({
            status: 400,
            text: '用户不存在'
          })
        }
      }, err => next(err))
  }
}

module.exports = {
  signUp, // 注册
  signIn // 登陆
}
