/**
 * @namespace vuex
 * @description vuex状态管理
 * @name store
 * @author fearclear
 * @export Stroe
 */

import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
import user from './modules/user'
// import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production', // 开发模式才使用严格模式，生产环境使用会大幅降低性能
  modules: {
    user
  }
  // actions,
  // mutations
})
