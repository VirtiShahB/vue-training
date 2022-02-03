import Vue from 'vue'
import axios from 'axios'
import store from '../store/index'
import router from '../router'
import { toastMixins } from '../mixins/toastMixins'
import { app } from '@/main'

export default () => ({
  async login(loginData) {
    let errorMsg = ''
    const authData = await axios
      .post(Vue.prototype.$apihost + 'login', loginData)
      .then((response) => {
        if (response.data.success) {
          return response.data
        } else {
          errorMsg = response.data.message
          return false
        }
      })
      .catch((error) => {
        errorMsg = 'Network connection error!'
        if (error.response) {
          errorMsg = error.response.data.message
        }
        return false
      })
    if (authData) {
      store.dispatch('auth/login', {
        authData,
      })
      toastMixins.methods.makeToast(
        'success',
        'Success!',
        'Login Successfully!',
      )
      app.$api.products.getLikeProducts()
      router.push({ name: 'Dashboard' })
    } else {
      toastMixins.methods.makeToast('danger', 'Error!', errorMsg)
    }
  },
  async register(userData) {
    let errorMsg = ''
    const registerData = await axios
      .post(Vue.prototype.$apihost + 'register', userData)
      .then((response) => {
        if (response.data.success) {
          return response.data
        } else {
          errorMsg = response.data.message
          return false
        }
      })
      .catch((error) => {
        errorMsg = 'Network connection error!'
        if (error.response) {
          errorMsg = error.response.data.message
        }
        return false
      })
    if (registerData) {
      toastMixins.methods.makeToast(
        'success',
        'Success!',
        'Congratulation,Registration Done Sucessfully!',
      )
      router.push({ name: 'Login' })
    } else {
      toastMixins.methods.makeToast('danger', 'Error!', errorMsg)
    }
  },
  async logout() {
    let errorMsg = ''
    let config = {
      headers: {
        Authorization: 'Bearer ' + store.state.auth.authToken,
      },
    }
    const logoutData = await axios
      .get(
        Vue.prototype.$apihost + 'logout?token=' + store.state.auth.authToken,
        config,
      )
      .then((response) => {
        if (response.data.success) {
          return response.data
        } else {
          errorMsg = response.data.message
          return false
        }
      })
      .catch((error) => {
        errorMsg = 'Network connection error!'
        if (error.response) {
          errorMsg = error.response.data.message
        }
        return false
      })
    if (logoutData) {
      store.dispatch('auth/logout')
      toastMixins.methods.makeToast('success', 'Success!', logoutData.message)
      store.replaceState({
        auth: {},
        products: {},
      })
      router.push({ name: 'Login' })
    } else {
      toastMixins.methods.makeToast('danger', 'Error!', errorMsg)
    }
  },
})
