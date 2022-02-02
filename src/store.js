import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    items: [
      {
        id: 0,
        img: require("@/assets/1.jpg"),
        title: "Sofa ",
        price: 100,
        color: "white",
        type: "sofa",
      },
      {
        id: 1,
        img: require("@/assets/2.jpg"),
        title: "Lamp ",
        price: 150,
        color: "yellow",
        type: "lamp",
      },
      {
        id: 2,
        img: require("@/assets/3.jpg"),
        title: "Fotal",
        price: 200,
        color: "blue",
        type: "chair",
      },
      {
        id: 3,
        img: require("@/assets/4.jpg"),
        title: "Fotal ",
        price: 250,
        color: "black",
        type: "chair",
      },
      {
        id: 4,
        img: require("@/assets/5.jpg"),
        title: "Sofa",
        price: 300,
        color: "black",
        type: "sofa",
      },
      {
        id: 5,
        img: require("@/assets/table-1.jpg"),
        title: "Table",
        price: 350,
        color: "white",
        type: "table",
      },
    ],
    user: [
      {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
    ],
    infoItem: [],
    cartItems: [],
    wishlist: [],
    wishlistId: [],
    loginUser: false,
  },
  mutations: {
    inCart(state, n) {
      // Cart Component
      return state.cartItems.push(n);
    },
    inWishlist(state, item) {
      if (state.wishlistId.includes(item.id) == false) {
        state.wishlistId.push(item.id);
        state.wishlist.push(item);
      } else {
        let getIndex = state.wishlistId.indexOf(item.id);
        state.wishlistId.splice(getIndex, 1);
        state.wishlist.splice(getIndex, 1);
      }
      return state.wishlist;
    },
    outCart(state, n) {
      // Cart Component
      let index = state.cartItems.findIndex((x) => x.id === n);
      return state.cartItems.splice(index, 1);
    },
    logout(state) {
      state.loginUser = false;
    },
  },
  getters: {
    itemsNumber(state) {
      // Cart Component
      return state.cartItems.length;
    },
    cartTotalAmount(state) {
      var amount = 0;
      for (let i = 0; i < state.cartItems.length; i++) {
        amount += state.cartItems[i].price;
      }
      return amount;
    },
  },
});
