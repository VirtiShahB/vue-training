import Vue from 'vue'
import axios from 'axios'
import store from '../store/index'

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
})
