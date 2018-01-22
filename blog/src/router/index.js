import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
const SignIn = resolve => require(['@/components/sign/signIn.vue'], resolve)

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
      path: '/signIn',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
