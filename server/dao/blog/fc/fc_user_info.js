/**
 * @namespace 用户模块
 * @description 用户的增删改查
 * @name fc_user_info
 * @author fearclear
 * @export { addUser, getUser, updateUser, removeUser }
 */
const { handleResult } = require('../../util')
const { mongoose } = require('../connection')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
const userSchema = new Schema({
  userId: ObjectId,
  userName: String,
  registerDate: { type: Date, default: Date.now() },
  age: Number,
  sex: Number,
  birthDay: Date
})
const UserDoc = mongoose.model('fc_user_info', userSchema)
function _addUser(data) {
  let userInfo = new UserDoc(data)
  return new Promise((resolve, reject) => {
    userInfo.save(handleResult.bind(this, resolve, reject))
  })
}

async function addUser(data) {
  let doc = await getUser({userName: data.userName})
  if(doc) {
    return '用户名重复'
  }else {
    return _addUser(data)
  }
}

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
