const URL = 'http://127.0.0.1:3000/api'
module.exports = {
  name: 'blog',
  CORS: ['http://127.0.0.1:3000'],
  YQL: [''],
  API: {
    signUpUrl: `${URL}/signUp`,
    signInUrl: `${URL}/signIn`
  }
}
