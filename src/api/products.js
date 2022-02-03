import Vue from 'vue'
import axios from 'axios'
import store from '../store/index'
import { toastMixins } from '../mixins/toastMixins'

export default () => ({
  async getProducts(params = null) {
    let paramsData = ''
    let config = {
      headers: {
        Authorization: 'Bearer ' + store.state.auth.authToken,
      },
    }
    if (params) {
      paramsData = '?'
      paramsData += Object.entries(params)
        .map((e) => e.join('='))
        .join('&')
    }
    const promise = axios.get(
      Vue.prototype.$apihost + 'products' + paramsData,
      config,
    )
    var productsData = await promise.then((response) => response.data)
    store.dispatch('products/setInitialProducts', {
      productsData,
    })
  },
  async likeProduct(productId = null) {
    let errorMsg = ''
    let config = {
      headers: {
        Authorization: 'Bearer ' + store.state.auth.authToken,
      },
    }
    const response = await axios
      .get(Vue.prototype.$apihost + 'like-product/' + productId, config)
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
    if (response) {
      toastMixins.methods.makeToast('success', 'Success!', response.message)
      store.dispatch('products/manageLikeProducts', {
        id: productId,
      })
    } else {
      toastMixins.methods.makeToast('danger', 'Error!', errorMsg)
    }
  },
  async getRecommendedProducts(productId = 0) {
    let config = {
      headers: {
        Authorization: 'Bearer ' + store.state.auth.authToken,
      },
    }
    var productsData = await axios
      .get(Vue.prototype.$apihost + 'recommended-products/' + productId, config)
      .then((response) => response.data)
      .catch(() => {
        return false
      })
    return productsData
  },
  async getLikeProducts() {
    let config = {
      headers: {
        Authorization: 'Bearer ' + store.state.auth.authToken,
      },
    }
    var productsData = await axios
      .get(Vue.prototype.$apihost + 'like-products', config)
      .then((response) => response.data)
      .catch(() => {
        return false
      })
    store.dispatch('products/setInitialLikeProducts', {
      productsData,
    })
  },
})
