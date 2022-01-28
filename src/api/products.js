import Vue from 'vue'
import axios from 'axios'
import store from '../store/index'
let config = {
  headers: {
    // Authorization: 'Bearer ' + store.authToken,
  },
}
export default () => ({
  async getProducts() {
    const promise = axios.get(Vue.prototype.$apihost + '/products', config)
    var productsData = await promise.then((response) => response.data)
    store.dispatch('setInitialProducts', {
      productsData,
    })
  },
})
