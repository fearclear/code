/**
 * @namespace 登陆登出模块
 * @description 登陆相关请求
 * @name sign
 * @author fearclear
 * @export { signUp, signIn }
 */
import { request, config } from '../utils'

const { API } = config
const { signUpUrl, signInUrl } = API

async function signUp(data) {
  return request({
    url: signUpUrl,
    method: 'post',
    data
  })
}

async function signIn(data) {
  return request({
    url: signInUrl,
    method: 'post',
    data
  })
}

module.exports = {
  signUp,
  signIn
}
