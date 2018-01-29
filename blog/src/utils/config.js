const URL = 'http://127.0.0.1:3000/api'
module.exports = {
  name: 'blog',
  CORS: ['http://127.0.0.1:3000'],
  YQL: [''],
  API: {
    signUpUrl: `${URL}/user/signUp`,
    signInUrl: `${URL}/user/signIn`,
    checkUserNameUrl: `${URL}/user/checkUserName`
  }
}
