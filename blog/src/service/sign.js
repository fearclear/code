import { request, config } from '../util'

const { API } = config
const { signInUrl } = API

async function signIn(data) {
  return request({
    url: signInUrl,
    method: 'post',
    data
  })
}

module.exports = {
  signIn
}
