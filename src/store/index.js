import Vue from 'vue'
import Vuex from 'vuex'
import wishlist from './modules/wishlist'
import product from './modules/product'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    wishlist,
    product
  }
})
