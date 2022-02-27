export const productListMixin = {
  data() {
    return {
      productDetails: [],
    };
  },
  created() {
    if(this.$store.state.products){
      this.productDetails = this.$store.state.products;
    }

    if(this.$store.state.recommand){
      this.productDetails = this.$store.state.recommand;
    }
 },
};
