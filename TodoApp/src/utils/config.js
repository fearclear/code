const URL = 'http://127.0.0.1:3000'

module.exports = {
  name: 'candy-web',
  prefix: 'candy-web',
  logo: '/logo.png',
  iconFontCSS: '/iconfont.css',
  iconFontJS: '/iconfont.js',
  YQL: [],
  CORS: ['http://127.0.0.1:3000'],
  openPages: ['/login'],
  api: {
    userLogin: `${URL}/user/login`,
    userLogout: `${URL}/user/logout`,
    userInfo: `${URL}/userInfo`,
    users: `${URL}/users`,
    posts: `${URL}/posts`,
    user: `${URL}/user/:id`,
    dashboard: `${URL}/dashboard`,
    menus: `${URL}/menus`,
    v1test: `${URL}/test`,
    v2test: `${URL}/test`,
  },
}
