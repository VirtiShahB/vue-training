const wishlist = {
  namespaced: "wishlist",
  state: {
    wishlist: [],
  },
  mutations: {
    SET_TO_WISHLIST(state, products) {
      state.wishlist.push(...products);
    },
    ADD_TO_WISHLIST(state, product) {
      state.wishlist.push(product);
    },
    REMOVE_FROM_WISHLIST(state, ind) {
      state.wishlist.splice(ind, 1);
    },
  },
  actions: {
    // add to wishlist
    addToWishlist({ commit }, product) {
      let wishlist = JSON.parse(localStorage.getItem("wishlist"))
        ? JSON.parse(localStorage.getItem("wishlist"))
        : [];
      let wishlistProductInd = wishlist.findIndex(
        (item) => item.id == product.id
      );
      if (wishlistProductInd >= 0) {
        commit("REMOVE_FROM_WISHLIST", wishlistProductInd);
        wishlist.splice(wishlistProductInd, 1);
      } else {
        wishlist.push(product);
        commit("ADD_TO_WISHLIST", product);
      }
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    },
    getWishlist({ commit }) {
      let wishlist = JSON.parse(localStorage.getItem("wishlist"))
        ? JSON.parse(localStorage.getItem("wishlist"))
        : [];
      commit("SET_TO_WISHLIST", wishlist);
    },
  },
};

export default wishlist;
