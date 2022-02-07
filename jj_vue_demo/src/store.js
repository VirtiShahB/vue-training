import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartProducts: [],
    wishlistProducts: [],
    isLoggedIn: false,
    products: [
      {
        id: 0,
        name: "Shirt",
        description: "Van Heusen Men's Slim Business Casual Pants",
        price: 10,
        quantity: 0,
        img: require("@/assets/shirt.jpg"),
        tags: "tshirt",
      },
      {
        id: 1,
        name: "TShirt",
        description: "Van Heusen Men's Slim Business Casual Pants",
        price: 30,
        quantity: 0,
        img: require("@/assets/tshirt.jpg"),
        tags: "tshirt",
      },
      {
        id: 2,
        name: "Jeans",
        description: "Van Heusen Men's Slim Business Casual Pants",
        price: 30,
        quantity: 0,
        img: require("@/assets/pants.jpg"),
        tags: "jeans",
      },
    ],
  },
});
