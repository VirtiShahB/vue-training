import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { setStore, getStore, removeStore } from '../../config/util'

const user = getStore('user')
const totalCartItems = getStore('totalCartItems')
Vue.use(Vuex)
const state = {
  products: [],
  cartUpdate: 0,
  totalCartItems: totalCartItems,
  loginUser: user,
  mockAccount: {
    name: 'Mittal Parmar',
    email: 'mittal@bacancy.com',
    password: 'mittal@123'
  }
}
const getters = {
  productsData: state => state.products,
  getLoginUserInfo (state) {
    return state.loginUser
  }
}
const mutations = {
  setItems (state, products) {
    state.products = products
  },
  addToCart (state, item) {
    const checkExist = state.totalCartItems.find(product => product.id === item.id)
    if (checkExist) {
      checkExist.qty = parseInt(item.qty)
    } else {
      state.totalCartItems.push(item)
    }
    setStore('totalCartItems', state.totalCartItems)
    state.cartUpdate++
  },
  flushCart (state) {
    removeStore('totalCartItems')
    state.totalCartItems = []
    state.cartUpdate = 0
  },
  setLoginUser (state, user) {
    state.loginUser = user
    setStore('user', user)
  }
}
const actions = {
  async loadProducts ({ commit }) {
    try {
      const response = await axios.get('https://fakestoreapi.com/products')
      commit('setItems', response.data)
    } catch (error) {
      console.log(error)
    }
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
