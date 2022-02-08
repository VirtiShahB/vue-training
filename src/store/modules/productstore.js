import axios from "axios";

import "@/auth";

const state = {
  loading: true,
  tempProducts: [],
  products: [],
};

const getters = {
  allProducts: (state) => state.products,
  loading: (state) => state.loading,
};

const actions = {
  async loadProductsVuex({ commit }) {
    var data = await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));

    data = data.sort((a, b) => {
      let fa = a.id,
        fb = b.id;
      if (fa > fb) {
        return -1;
      }
      if (fa < fb) {
        return 1;
      }
      return 0;
    });

    if (this.$loggedIn == true) {
      var fetchWishList = JSON.parse(localStorage.getItem("wishList"));

      if (fetchWishList != null && fetchWishList.length > 0) {
        fetchWishList = fetchWishList.filter((el) =>
          el.userid.match(this.$loggedUser.id)
        );
      }
    }

    const response = data.map((item) => {
      /** covert rating into percentage */

      item["rating"]["width"] = (item.rating.rate / 5) * 100;
      /** get item wishlist and check if item is in wishlist*/

      if (this.$loggedIn == true) {
        var in_wishList =
          fetchWishList != null && fetchWishList.length > 0
            ? fetchWishList.findIndex((wish) => wish.id == item.id)
            : null;

        item["in_wishlist"] =
          in_wishList != null && in_wishList !== -1 ? true : false;
      }

      return item;
    });


    commit("setProducts", response);
    commit("setLoading", (state.loading = false));
  },
};

const mutations = {
  setProducts: (state, products) => (state.products = products),
  setLoading: (state, loading) => (state.loading = loading),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
