export default {
  methods: {
    addTowishlist(item) {
      this.$store.commit("inWishlist", item);
      this.getWishlistItemId();
    },
    getWishlistItemId() {
      this.wishlistId = this.$store.state.wishlistId;
    },
    loginWithFacebook () {
      window.FB.getLoginStatus(function(response) {
        if (response.status == "connected") {
          this.$store.state.loginUser = true;
          this.$router.push({ path: "/" });
        }
    });
      window.FB.login((response) => {
        if (response.status == "connected") {
          this.$store.state.loginUser = true;
          this.$router.push({ path: "/" });
        }
      }, this.params)
    }
  },
};
