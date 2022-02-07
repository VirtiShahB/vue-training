import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import productsData from '../components/Products/productsData.json'

// let totalCartItems = window.localStorage.getItem('totalCartItems') ? JSON.parse(window.localStorage.getItem('totalCartItems')) : []
Vue.use(Vuex)
const state = {
  products: [],
  cartUpdate: 0,
  totalCartItems: []
}
const getters = {
  productsData: state => state.products
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
    window.localStorage.setItem('totalCartItems', JSON.stringify(state.totalCartItems))
    state.cartUpdate++
  },
  flushCart (state) {
    window.localStorage.removeItem('totalCartItems')
    state.totalCartItems = []
    state.cartUpdate = 0
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
