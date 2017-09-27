// request 是我们封装的一个网络请求库
import request from '../utils/request';
import qs from 'querystring';

export async function query(params) {
  console.log('get query')
  return request(`/api/users?${qs.stringify(params)}`);
}
