import { bus } from "@/eventBus";
export default {
  methods: {
    addToWishList(product) {
      let wishList = JSON.parse(localStorage.getItem("wishList"));

      wishList = wishList != null ? wishList : [];

      /** Check if wishList has already have this product */

      let index = wishList.findIndex((c) => c.id == product.id);

      /** if has then remove it  */

      if (index !== -1) {
        wishList.splice(index, 1);
      }

      /** Push the item in wishList array */

      wishList.push(product);

      /** Push cart in localstorage */

      localStorage.setItem("wishList", JSON.stringify(wishList));

      this.in_wishList = true;

      this.$bvToast.toast("Item is added to wishList !", {
        title: "Added !",
        variant: "success",
        toaster: "b-toaster-bottom-center",
        solid: true,
      });

      bus.$emit("wishList");
    },
    removeFromWishList(product) {
      let wishList = JSON.parse(localStorage.getItem("wishList"));

      /** check if wishList is not empty or not null */

      if (wishList != null && wishList.length > 0) {
        /** Check if wishList has already have this product */

        let index = wishList.findIndex((c) => c.id == product.id);

        /** if has then remove it  */

        if (index !== -1) {
          wishList.splice(index, 1);
          localStorage.setItem("wishList", JSON.stringify(wishList));
          this.in_wishList = false;
          this.$bvToast.toast("Item is removed from wishList !", {
            title: "Removed !",
            variant: "success",
            toaster: "b-toaster-bottom-center",
            solid: true,
          });
        }

        bus.$emit("wishList");
      }
    },
  },
};
