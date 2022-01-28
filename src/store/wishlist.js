const wishlist = {
  namespaced: "wishlist",
  state: {
    wishlist: [],
  },
  getters: {
    GET_WISHLIST(state) {
      return state.wishlist;
    },
  },
  mutations: {
    SET_TO_WISHLIST(state, products) {
      state.wishlist.push(...products);
    },
    ADD_TO_WISHLIST(state, product) {
      state.wishlist.push(product);
    },
    REMOVE_FROM_WISHLIST(state, ind) {
      console.log(ind);
      state.wishlist.splice(ind, 1);
      console.log(state.wishlist);
    },
  },
  actions: {
    addToWishlist({ commit }, product) {
      let wishlist = JSON.parse(localStorage.getItem("wishlist"));
      if (wishlist) {
        let wishlistProductInd = wishlist.findIndex(
          (item) => item.id == product.id
        );
        if (wishlistProductInd >= 0) {
          console.log(wishlistProductInd);
          commit("REMOVE_FROM_WISHLIST", wishlistProductInd);
          wishlist.splice(wishlistProductInd,1);
        } else {
          wishlist.push(product);
        }
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
      } else {
        localStorage.setItem("wishlist", JSON.stringify([product]));
      }
      commit("ADD_TO_WISHLIST", product);
    },
    getWishlist({ commit }) {
      let wishlist = JSON.parse(localStorage.getItem("wishlist"));
      if (wishlist) commit("SET_TO_WISHLIST", wishlist);
      else commit("SET_TO_WISHLIST", []);
    },
  },
};

export default wishlist;
