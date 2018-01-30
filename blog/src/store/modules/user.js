import * as types from '../mutation-types'
import md5 from 'md5'
import router from '../../router'
import { Message } from 'element-ui'
import { clone } from 'lodash'
import { signUp, signIn, checkUserName } from '../../service'

// initial state
// shape: [{ id, quantity }]
const state = {
  tabIndex: 'signIn',
  userInfo: {},
  signStatus: false
}

// getters
const getters = {
  userInfo: state => state.userInfo,
  tabIndex: state => state.tabIndex,
  signStatus: state => state.signStatus
}

// actions
const actions = {
  signIn({ commit, state }, form) {
    let data = clone(form)
    data.password = md5(md5(md5(form.password)))
    signIn(data)
        .then(doc => {
          commit(types.USER_INFO, doc)
          Message({message: '登陆成功', type: 'success'})
          router.push({path: '/home'})
        })
  },
  signUp({ commit, state }, form) {
    let data = clone(form)
    data.password = data.passwordConfirm = md5(md5(md5(form.password)))
    signUp(data)
      .then(function() {
        Message({message: '注册成功', type: 'success'})
        commit(types.TAB_INDEX, 'signIn')
      })
  },
  checkUserName({ commit, state }, params) {
    return new Promise((resolve, reject) => {
      checkUserName(params)
        .then(doc => resolve(doc), err => reject(err))
    })
  },
  updateUserInfo({ commit, state }, userInfo) {
    commit(types.SIGN_STATUS, userInfo)
    commit(types.USER_INFO, userInfo)
  },
  changeTabIndex({ commit, state }, data) {
    commit(types.TAB_INDEX, data.paneName)
  }
}

// mutations
const mutations = {
  [types.SIGN_STATUS](state, {userId}) {
    state.signStatus = !!userId
  },
  [types.USER_INFO](state, userInfo) {
    state.userInfo = userInfo
  },
  [types.TAB_INDEX](state, index) {
    state.tabIndex = index
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
