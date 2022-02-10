export const productListMixin = {
  data() {
    return {
      productDetails: [],
    };
  },
  created() {
    this.productDetails = JSON.parse(localStorage.getItem("PROLIST"));
  },
};
