export const mixin = {
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    removeFromWishlist(item, wishListItemId) {
      this.$store.commit("removeFromWishlist", { item, wishListItemId });
      this.wishList = this.$store.wishList;
    },
    getWishList() {
      this.$store.commit("getWishList");
      this.wishList = this.$store.wishList;
      if (this.wishList.length > 0) {
        for (var i = 0; i < this.wishList.length; i++) {
          if (!this.wishList.includes(this.wishList[i].id)) {
            this.wishListItemId[i] = this.wishList[i].id;
          }
        }
      }
    },
    getCart() {
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      this.cart = JSON.parse(localStorage.getItem("cart"));
    },
  },
};
