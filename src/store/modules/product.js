import apis from "@/utils/apis";
import $axios from "@/utils/axios";
const product = {
  namespaced: "product",
  state: {
    products: [],
    filters: [],
    loadingStatus: false,
    product: {},
    likeProductCategories:[]
  },
  mutations: {
    SET_TO_PRODUCTS(state, products) {
      state.products = products;
    },
    CLEAR_PRODUCTS(state) {
      state.products = [];
    },
    SET_FILTERS(state, filters) {
      state.filters = filters;
    },
    SET_LOADING_STATUS(state, loadingStatus) {
      state.loadingStatus = loadingStatus;
    },
    SET_TO_SINGLE_PRODUCT(state, product) {
      state.product = product;
    },
    CLEAR_PRODUCT(state) {
      state.product = {};
    },
    LIKE_UNLIKE_PRODUCT(state, payload) {
      state.products[payload.productIndex].isLike = payload.isLike;
    },
  },
  getters: {
    filterProducts(state) {
      let products = state.products;
      if (state.filters.length)
        state.filters.map((filter) => {
          if (filter.type == "name" && filter.search !== "") {
            products = products.filter((product) =>
              product.title.toLowerCase().includes(filter.search)
            );
          }
          if (filter.type == "range" && filter.search !== "") {
            products = products.filter(
              (product) => product.price > 0 && product.price <= filter.search
            );
          }
        });
      return products;
    },
    getRecommendedProducts(state) {
      let categories = [];
      for(let item of state.products){
        if(item.isLike)
        categories.push(item.category);             
      }
      categories = [...new Set(categories)];
      return state.products.filter(item => categories.includes(item.category));
      
    },
    getLoadingStatus(state) {
      return state.loadingStatus;
    },
  },
  actions: {
    // add to wishlist
    getProducts({ commit }) {
      commit("SET_LOADING_STATUS", true);
      return $axios
        .get(apis.getProducts)
        .then((response) => {
          let data = response.data.map((item) => {
            item.isLike = false;
            return item;
          });
          commit("SET_TO_PRODUCTS", data);
          commit("SET_LOADING_STATUS", false);
        })
        .catch((error) => {
          commit("SET_LOADING_STATUS", false);
          throw error.response.data;
        });
    },
    getProduct({ commit }, id) {
      commit("SET_LOADING_STATUS", true);
      return $axios
        .get(apis.getProducts + `/${id}`)
        .then((response) => {
          commit("SET_TO_SINGLE_PRODUCT", response.data);
          commit("SET_LOADING_STATUS", false);
        })
        .catch((error) => {
          commit("SET_LOADING_STATUS", false);
          throw error.response.data;
        });
    },
    addRemoveFilters({ commit, state }, filterPayload) {
      let filters = state.filters;
      let filterIndex = filters.findIndex(
        (item) => item.type == filterPayload.type
      );
      filterIndex >= 0
        ? filters.splice(filterIndex, 1, filterPayload)
        : filters.push(filterPayload);
      commit("SET_FILTERS", filters);
    },
    likeUnlikeProduct({ commit, state }, payload) {
      let productIndex = state.products.findIndex(
        (item) => item.id == payload.id
      );
      payload.productIndex = productIndex;
      commit("LIKE_UNLIKE_PRODUCT", payload);
    },
  },
};

export default product;
