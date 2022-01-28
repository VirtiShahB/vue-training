import Vue from 'vue'
import axios from 'axios'
import store from '../store/index'

export default () => ({
  async login(loginData) {
    const promise = axios.post(Vue.prototype.$apihost + 'login', loginData)
    var authData = await promise.then((response) => response.data)
    store.dispatch('login', {
      authData,
    })
  },
  async register(userData) {
    const promise = axios.post(Vue.prototype.$apihost + 'register', userData)
    var authData = await promise.then((response) => response.data)
    store.dispatch('register', {
      authData,
    })
  },
})
