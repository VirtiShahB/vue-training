import Vue from 'vue'
import Vuex from 'vuex'
import '@/api/api.js'

Vue.use(Vuex)

const state = {
  authToken: null,
  isLogin: false,
}
const mutations = {
  SUCESS_LOGIN(state, payload) {
    state.authToken = payload.authData.token
    state.isLogin = true
  },
  LOGOUT(state) {
    state.authToken = null
    state.isLogin = false
  },
}

const getters = {}

const actions = {
  login({ commit }, payload) {
    commit('SUCESS_LOGIN', payload)
  },
  logout({ commit }, payload) {
    commit('LOGOUT', payload)
  },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }
