export default {
  methods: {
    addTowishlist(item) {
      this.$store.commit("inWishlist", item);
      this.getWishlistItemId();
    },
    getWishlistItemId() {
      this.wishlistId = this.$store.state.wishlistId;
    },
  },
};
