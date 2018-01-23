/**
 * @namespace 路由模块
 * @description 路由分发
 * @name router
 * @author fearclear
 * @export Router
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
const Sign = resolve => require(['@/components/sign'], resolve)

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/sign',
      name: 'Sign',
      component: Sign
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
