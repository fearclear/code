import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
const SignIn = resolve => require(['@/components/sign/signIn.vue'], resolve)
const SignUp = resolve => require(['@/components/sign/signUp.vue'], resolve)

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
      path: '/signUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
