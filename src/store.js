import Vue from "vue";
import Vuex from "vuex";
import productsData from "./data/products";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      products: productsData,
    }
  });