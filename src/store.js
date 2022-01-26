import Vue from "vue";
import Vuex from "vuex";
import productsData from "./data/products";

Vue.use(Vuex);

export const getters = {
  getCartInfo: (state) => {
    return state.cart;
  },
  isInCart: (state) => (payload) => {
    const cart = state.cart.find((product) => {
      return product.id === payload;
    });
    return cart ? true : false;
  },
};

export const mutations = {
  addToCart(state, payload) {
    const product = state.products.find((product) => {
      return product.id === payload.id;
    });
    var qty = payload.qty
    state.cart = [...state.cart, { ...product, qty }]; //spread operator
  },
  removeFromCart(state, payload) {
    state.cart = state.cart.filter((product) => product.id !== payload.id);
  },
};

const actions = {
  addToCart(context, payload) {
    context.commit("addToCart", payload);
  },
  removeFromCart(context, payload) {
    context.commit("removeFromCart", payload);
  },
};

export default new Vuex.Store({
  state: {
    products: productsData,
    cart: [],
  },
  getters,
  mutations,
  actions,
});
