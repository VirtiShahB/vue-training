import Vue from 'vue'
import Vuex from 'vuex'
import '@/api/api.js'

Vue.use(Vuex)

const state = {
  cart: [],
  likeProducts: [],
  wishlist: [],
  isEmptyCart: true,
  isEmptyWishlist: true,
  authToken: null,
  isLogin: false,
  products: [],
}
const mutations = {
  SET_INITAL_PRODUCTS(state, payload) {
    state.products = payload.productsData
  },
  SET_INITAL_LIKE_PRODUCTS(state, payload) {
    state.likeProducts = payload.productsData
  },
  ADDTOCART(state, payload) {
    state.cart.push(payload)
    state.isEmptyCart = false
  },
  ADDTOWISHLIST(state, payload) {
    state.wishlist.push(payload)
    state.isEmptyWishlist = false
  },
  REMOVETOWISHLIST(state, payload) {
    var removeIndex = state.wishlist
      .map(function (product) {
        return product.id
      })
      .indexOf(payload.id)
    state.wishlist.splice(removeIndex, 1)
  },
  EMPTYTHECART(state) {
    state.cart = []
    state.isEmptyCart = true
  },
  LIKEPRODUCTS(state, payload) {
    state.likeProducts.push(payload)
  },
  UNLIKEPRODUCTS(state, payload) {
    var removeIndex = state.likeProducts
      .map(function (product) {
        return product.id
      })
      .indexOf(payload.id)
    state.likeProducts.splice(removeIndex, 1)
  },
}

const getters = {
  getProductById: (state) => (id) => {
    return state.products.find((p) => p.id === parseInt(id))
  },
  getFilteredProducts: (state) => (id) => {
    return state.products.find((p) => p.id === parseInt(id))
  },
}

const actions = {
  setInitialProducts({ commit }, payload) {
    commit('SET_INITAL_PRODUCTS', payload)
  },
  setInitialLikeProducts({ commit }, payload) {
    commit('SET_INITAL_LIKE_PRODUCTS', payload)
  },
  addToCart({ commit }, payload) {
    var product = state.products.find((p) => p.id === parseInt(payload.id))
    product.qty = payload.qty
    commit('ADDTOCART', product)
  },
  addToWishlist({ commit }, payload) {
    var product = state.products.find((p) => p.id === parseInt(payload.id))
    commit('ADDTOWISHLIST', product)
  },
  removeToWishlist({ commit }, payload) {
    commit('REMOVETOWISHLIST', payload)
  },
  emptyTheCart({ commit }) {
    commit('EMPTYTHECART')
  },
  manageLikeProducts({ commit }, payload) {
    var product = state.likeProducts.find((p) => p.id === parseInt(payload.id))
    if (product) {
      commit('UNLIKEPRODUCTS', payload)
    } else {
      commit('LIKEPRODUCTS', payload)
    }
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
