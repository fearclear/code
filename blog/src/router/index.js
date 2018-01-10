import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
const Hero = resolve => require(['@/components/Hero.vue'], resolve)

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
      path: '/hero',
      name: 'Hero',
      component: Hero
    }
  ]
})
