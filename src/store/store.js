import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import appServices from '../helpers/appServices'
Vue.use(Vuex)
const user = appServices.getStore('user')

const state = {
  products: [],
  cartUpdate: 0,
  wishListUpdate: 0,
  totalCartItems: [],
  wishListItems: [],
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
    appServices.setStore('totalCartItems', state.totalCartItems)
    state.cartUpdate++
  },
  removeFromCart (state, items) {
    appServices.setStore('totalCartItems', items)
    state.totalCartItems = items
    state.cartUpdate--
  },
  flushCart (state) {
    appServices.removeStore('totalCartItems')
    state.totalCartItems = []
    state.cartUpdate = 0
  },
  addTowishList (state, productId) {
    state.wishListItems.push(productId)
    appServices.setStore('userFavItems', state.wishListItems)
    state.wishListUpdate++
  },
  removeFromWishList (state, productId) {
    const result = state.wishListItems.filter(e => e !== productId)
    state.wishListItems = result
    appServices.setStore('userFavItems', result)
    state.wishListUpdate--
  },
  setLoginUser (state, user) {
    state.loginUser = user
    appServices.setStore('user', user)
  },
  removeLoginUser (state) {
    state.loginUser = ''
    appServices.removeStore('user')
  },
  removeWishList (state) {
    appServices.removeStore('userFavItems')
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
