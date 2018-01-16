const { mongoose } = require('./connection')
const Schema = mongoose.Schema
/* 用户模块 */
const userSchema = new Schema({
  userId: String,
  userName: String,
  nickName: String,
  registerDate: {type: Date, default: Date.now()},
  age: Number,
  sex: Number,
  birthDay: Date
})
const UserDoc = mongoose.model('fc_user_info', userSchema)

let one = new UserDoc({
  userId: '1234',
  userName: 'Mike',
  age: 17
})

function foo() {
  return new Promise((resolve, reject) => {
    one.save((err, doc) => {
      if(err) {
        reject(err)
      }else {
        resolve(doc)
      }
    })
  })
}
async function bar() {
  await foo()
}
bar()

function addUser(data) {
  let userInfo = new UserDoc(data)
  userInfo.save((err, doc) => {
    if(err) {
      throw err
    }else {

    }
  })
}
exports.addUser = addUser
