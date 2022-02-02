import Vue from 'vue'
import Vuex from 'vuex'
import productsData from '../components/Products/productsData.json'

let totalCartItems = window.localStorage.getItem('totalCartItems') ? JSON.parse(window.localStorage.getItem('totalCartItems')) : []
Vue.use(Vuex)
const state = {
  cartUpdate: 0,
  totalCartItems: totalCartItems || []
}
const mutations = {
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
  saveCart (state) {

  },
  flushCart (state) {
    state.cartUpdate = 0
  }
}
const actions = {
}
const getters = {
  productsData: state => productsData
}
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
