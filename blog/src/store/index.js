/**
 * @namespace vuex
 * @description vuex状态管理
 * @name store
 * @author fearclear
 * @export Stroe
 */

import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import user from './modules/user'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    user
  },
  actions,
  mutations
})
