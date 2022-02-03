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
  //   products: [
  //     {
  //       id: 1,
  //       image: require('../../assets/product_images/img1.jpg'),
  //       title: 'Product 1',
  //       description:
  //         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
  //       price: 100,
  //       stock: 1000,
  //     },
  //     {
  //       id: 2,
  //       image: require('../../assets/product_images/img2.jpg'),
  //       title: 'Product 2',
  //       description:
  //         '0s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also',
  //       price: 150,
  //       stock: 2000,
  //     },
  //     {
  //       id: 3,
  //       image: require('../../assets/product_images/img3.jpg'),
  //       title: 'Product 3',
  //       description:
  //         'Letraset sheets containing Lorem Ipsum passages, and more recently with desktop pu',
  //       price: 200,
  //       stock: 2500,
  //     },
  //     {
  //       id: 4,
  //       image: require('../../assets/product_images/img4.jpg'),
  //       title: 'Product 4',
  //       description:
  //         'atin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable',
  //       price: 250,
  //       stock: 1000,
  //     },
  //   ],
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
    console.log(payload.productsData);
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
