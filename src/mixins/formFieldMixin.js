export const formFieldMixin = {
  data() {
    return {
      CartPro: 0,
      cartProduct: [],
    };
  },
  methods: {
    AddTOCart(pid) {
      this.CartPro += 1;
      this.cartProduct.push(pid);
      localStorage.setItem("cartProduct", JSON.stringify(this.cartProduct));
    },
  },
};
