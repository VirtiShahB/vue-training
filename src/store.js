import Vue from "vue";
import Vuex from "vuex";
// import productsData from "./data/products";

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
  isLoggedIn: (state) => {
    return state.loggedInUser;
  },
};

export const mutations = {
  addToCart(state, payload) {
    const product = state.products.find((product) => {
      return product.id === payload.id;
    });
    var qty = payload.qty;
    state.cart = [...state.cart, { ...product, qty }]; //spread operator
    localStorage.setItem("loggedUserCart", JSON.stringify(state.cart));
  },
  removeFromCart(state, payload) {
    state.cart = state.cart.filter((product) => product.id !== payload.id);
  },
  addToWishList(state, payload) {
    const product = state.products.find((product) => {
      return product.id === payload.id;
    });
    state.wishList = [...state.wishList, { ...product }];
    localStorage.setItem("loggedUserWishlist", JSON.stringify(state.wishList));
  },
  removeFromWishList(state, payload) {
    const product = state.wishList.filter((product) => {
      return product.id !== payload.id;
    });
    state.wishList = product;
    localStorage.setItem("loggedUserWishlist", JSON.stringify(product));
  },
  addLoggedIn(state, payload) {
    state.loggedInUser = payload;
  },
  addSearchParam(state, payload) {
    state.searchParam = payload;
  },
  setProducts(state, payload) {
    state.products = payload;
    localStorage.setItem("productsData", JSON.stringify(state.products));
  },
};

const actions = {
  addToCart(context, payload) {
    context.commit("addToCart", payload);
  },
  removeFromCart(context, payload) {
    context.commit("removeFromCart", payload);
  },
  addToWishList(context, payload) {
    context.commit("addToWishList", payload);
  },
  removeFromWishList(context, payload) {
    context.commit("removeFromWishList", payload);
  },
  addLoggedIn(context, payload) {
    context.commit("addLoggedIn", payload);
  },
  addSearchParam(context, payload) {
    context.commit("addSearchParam", payload);
  },
  setProducts(context, payload) {
    context.commit("setProducts", payload);
  },
};

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    wishList: [],
    loggedInUser: [],
    filteredData: [],
    searchParam: "",
  },
  getters,
  mutations,
  actions,
});
