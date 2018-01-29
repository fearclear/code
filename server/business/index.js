const user = require('./user')

module.exports = {
  signUp: user.signUp, // 注册
  signIn: user.signIn, // 登录
  checkUserName: user.checkUserName // 检查用户名合法性
}
