export default {
  methods: {
    openWishlist() {
      this.$router.push({
        name: "wishlist",
        params: { wishList: this.$store.state.wishList },
      });
    },
    openCart() {
      this.$router.push({
        name: "checkout",
        params: { cart: this.$store.state.cart },
      });
    },
  },
};
