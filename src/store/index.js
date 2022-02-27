import Vue from "vue";
import Vuex from "vuex";
import { setStore, getStore, removeItem } from "@/config/utils";

Vue.use(Vuex);

const user = getStore("user");
const wishpro = getStore("wishpro")
const products = getStore("products")
const cartProduct = getStore("cartProduct")
const qty = getStore("qty")
const orders = getStore("orders")
const recommand = getStore("recommand")
export default new Vuex.Store({
  state: {
    loginUser: user,
    isLoggedIn: false,
    wishpro: wishpro,
    products: products,
    cartProduct: cartProduct,
    qty: qty,
    orders: orders,
    recommand: recommand
  },
  mutations: {
    setLoginUser(state, user) {
      state.loginUser = user;
      state.isLoggedIn = true;
      setStore("user", user);
    },
    logOut(state) {
      state.loginUser = null
      state.isLoggedIn = false
    },
    wishProduct(state, wishpro) {
      state.wishpro = wishpro;
      setStore("wishpro", wishpro);
    },
    removeWishProduct(state, wishpro) {
      removeItem("wishpro", wishpro);
    },
    productList(state, products) {
      state.products = products;
      setStore("products", products);
    },
    cart(state, cartProduct) {
      state.cartProduct = cartProduct;
      setStore("cartProduct", cartProduct);
    },
    removeCart(state, cartProduct) {
      removeItem("cartProduct", cartProduct);
    },
    ProQty(state, qty) {
      state.qty = qty;
      setStore("qty", qty);
    },
    removeItemQTY(state, qty) {
      removeItem("qty", qty);
    },
    SetOrders(state, orders) {
      state.orders = orders;
      setStore("orders", orders);
    },
    recommandProducts(state,recommand){
      state.recommand = recommand;
      setStore("recommand",recommand);
    }
  },
  actions: {},
  getters: {
    getLoginUserInfo(state) {
      return state.loginUser;
    },
  },
});
