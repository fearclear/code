const URL = 'http://127.0.0.1:3000/blog'
module.exports = {
  name: 'blog',
  CORS: ['http://127.0.0.1:3000/blog'],
  YQL: [''],
  API: {
    signIn: `${URL}/signIn`
  }
}
