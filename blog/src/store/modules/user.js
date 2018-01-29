import * as types from '../mutation-types'
import md5 from 'md5'
import { clone } from 'lodash'
import { signUp, signIn, checkUserName } from '../../service'

// initial state
// shape: [{ id, quantity }]
const state = {
  userInfo: {},
  signStatus: false
}

// getters
const getters = {
  userInfo: state => state.userInfo,
  signStatus: state => state.signStatus
}

// actions
const actions = {
  signIn(form) {
    let data = clone(form)
    data.password = md5(md5(md5(form.password)))
    signIn(data)
        .then(doc => {
          this.$store.dispatch('updateUserInfo', doc)
            .then((data) => {
              console.log(data, 'data')
              console.log(this.$store)
            })
        }, err => console.log(err))
  },
  signUp(form) {
    this.$refs['formSignUp'].validate((valid) => {
      if(valid) {
        let data = clone(form)
        data.password = data.passwordConfirm = md5(md5(md5(form.password)))
        signUp(data)
        .then(function() {
          console.log('done')
        })
      }else {
        return false
      }
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
  }
}

// mutations
const mutations = {
  [types.SIGN_STATUS](state, userInfo) {
    state.signStatus = !!userInfo.userId
  },
  [types.USER_INFO](state, userInfo) {
    state.userInfo = userInfo
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
