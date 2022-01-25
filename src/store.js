import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  cart: [],
  isEmptyCart: true,
  products: [
    {
      id: 1,
      image: require('./assets/product_images/img1.jpg'),
      title: 'Product 1',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      price: 100,
      stock: 1000,
    },
    {
      id: 2,
      image: require('./assets/product_images/img2.jpg'),
      title: 'Product 2',
      description:
        '0s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also',
      price: 150,
      stock: 2000,
    },
    {
      id: 3,
      image: require('./assets/product_images/img3.jpg'),
      title: 'Product 3',
      description:
        'Letraset sheets containing Lorem Ipsum passages, and more recently with desktop pu',
      price: 200,
      stock: 2500,
    },
    {
      id: 4,
      image: require('./assets/product_images/img4.jpg'),
      title: 'Product 4',
      description:
        'atin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable',
      price: 250,
      stock: 1000,
    },
  ],
}

const mutations = {
  addToCart(state, payload) {
    state.cart.push(payload)
    this.state.isEmptyCart = false
  },
  emptyTheCart(state) {
    state.cart = []
    this.state.isEmptyCart = true
  },
}

const getters = {
  getProductById: (state) => (id) => {
    return state.products.find((p) => p.id === parseInt(id))
  },
}

const actions = {
  addToCart({ commit }, payload) {
    var product = state.products.find((p) => p.id === parseInt(payload.id))
    product.qty = payload.qty
    commit('addToCart', product)
  },
  emptyTheCart({ commit }) {
    commit('emptyTheCart')
  },
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
})
