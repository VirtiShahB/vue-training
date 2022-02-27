export const formFieldMixin = {
  data() {
    return {
      cartProduct: [],
    };
  },
  methods: {
    AddTOCart(pid) {
      this.cartProduct.push(pid);
      this.$store.commit("cart", this.cartProduct);
      this.$toasted.show("Item added in Cart", {
        title: "Added !",
        variant: "success",
        toaster: "b-toaster-bottom-center",
        solid: true,
      });
    },
    RemoveTOCart(pid) {
      const index = this.cartProduct.indexOf(pid);
      if (index > -1) {
        this.cartProduct.splice(index, 1); // 2nd parameter means remove one item only
      }
      document.getElementById(pid).remove();
      this.$store.commit("cart", this.cartProduct);
      this.$toasted.show("Item removed in Cart", {
        title: "removed !",
        variant: "success",
        toaster: "b-toaster-bottom-center",
        solid: true,
      });
    }
  },
  created() {
    if (this.$store.state.cartProduct) {
      this.cartProduct = this.$store.state.cartProduct;
    }
  }
};
