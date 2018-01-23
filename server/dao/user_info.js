/**
 * @namespace 用户模块
 * @description 用户的增删改查
 * @name fc_user_info
 * @author fearclear
 * @export { addUser, getUser, updateUser, removeUser }
 */
const { handleResult } = require('./util')
const { mongoose } = require('./connection')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
const userSchema = new Schema({
  userId: ObjectId,
  userName: String,
  password: String,
  email: String,
  registerDate: { type: Date, default: Date.now() }
})
const UserDoc = mongoose.model('user_info', userSchema)
// 添加用户
function addUser(data) {
  data.userId = mongoose.Types.ObjectId()
  data._id = data.userId
  let userInfo = new UserDoc(data)
  return new Promise((resolve, reject) => {
    userInfo.save(handleResult.bind(this, resolve, reject))
  })
}
// 获取用户
function getUser(data) {
  if(data.userId) {
    return new Promise((resolve, reject) => {
      UserDoc.findById(data.userId, handleResult.bind(this, resolve, reject))
    })
  }else if(data.userName) {
    return new Promise((resolve, reject) => {
      UserDoc.findOne({userName: data.userName}, handleResult.bind(this, resolve, reject))
    })
  }else {
    return new Promise((resolve, reject) => {
      UserDoc.find(data, handleResult.bind(this, resolve, reject))
    })
  }
}
// 更新用户
function updateUser(data, update) {
  if(data.userId) {
    return new Promise((resolve, reject) => {
      UserDoc.findByIdAndUpdate(data.userId, update, handleResult.bind(this, resolve, reject))
    })
  }else {
    return new Promise((resolve, reject) => {
      UserDoc.findByIdAndUpdate(data, update, handleResult.bind(this, resolve, reject))
    })
  }
}
// 删除用户
function removeUser(data) {
  if(data.userId) {
    return new Promise((resolve, reject) => {
      UserDoc.findByIdAndRemove(data.userId, handleResult.bind(this, resolve, reject))
    })
  }else if(data.userName) {
    return new Promise((resolve, reject) => {
      UserDoc.findOneAndRemove(data, handleResult.bind(this, resolve, reject))
    })
  }else {
    return new Promise((resolve, reject) => {
      UserDoc.remove(data, handleResult.bind(this, resolve, reject))
    })
  }
}

module.exports = {
  addUser,
  getUser,
  updateUser,
  removeUser
}
