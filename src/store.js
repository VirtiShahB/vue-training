import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    wishList: [],
  },
  mutations: {
    addLikedItem(state, { itemId, likedItemId }) {
      //Like the item
      if (!localStorage.getItem("likedList")) {
        localStorage.setItem("likedList", JSON.stringify([]));
      }
      const likedItems = JSON.parse(localStorage.getItem("likedList"));
      const likedItemsId = likedItemId;
      likedItemsId.push(itemId);
      this.likedItemId = likedItemsId;
      likedItems.push(itemId);
      localStorage.setItem("likedList", JSON.stringify(likedItems));
    },
    addWishlist(state, { item, wishListItemId }) {
      //Add item in wishlist
      if (!localStorage.getItem("wishList")) {
        localStorage.setItem("wishList", JSON.stringify([]));
      }
      const wishListItems = JSON.parse(localStorage.getItem("wishList"));
      const wishListItemsId = wishListItemId;
      wishListItems.push(item);
      wishListItemsId.push(item.id);
      this.wishListItemId = wishListItemsId;
      localStorage.setItem("wishList", JSON.stringify(wishListItems));
      this.wishList = JSON.parse(localStorage.getItem("wishList"));
    },
    getWishList() {
      //Get item in wishlist
      if (!localStorage.getItem("wishList")) {
        localStorage.setItem("wishList", JSON.stringify([]));
      }
      this.wishList = JSON.parse(localStorage.getItem("wishList"));
    },
    removeFromWishlist(state, { item, wishListItemId }) {
      //Removed item in wishlist
      if (!localStorage.getItem("wishList")) {
        localStorage.setItem("wishList", JSON.stringify([]));
      }
      const wishListItems = JSON.parse(localStorage.getItem("wishList"));
      const wishListItemsId = wishListItemId;

      if (wishListItems.length > 0) {
        for (var i = 0; i < wishListItems.length; i++) {
          if (item.id === wishListItems[i].id) {
            wishListItems.splice(i, 1);
            localStorage.setItem("wishList", JSON.stringify(wishListItems));
            this.wishList = JSON.parse(localStorage.getItem("wishList"));
            const index = wishListItemsId.indexOf(item.id);
            if (index > -1) {
              wishListItemsId.splice(index, 1);
              this.wishListItemId = wishListItemsId;
            }
          }
        }
      }
    },
    dislikedItem(state, { itemId, likedItemId }) {
      //Dislike item
      if (!localStorage.getItem("likedList")) {
        localStorage.setItem("likedList", JSON.stringify([]));
      }
      const likedItems = JSON.parse(localStorage.getItem("likedList"));
      const likedItemsId = likedItemId;
      if (likedItems.length > 0) {
        for (var i = 0; i < likedItems.length; i++) {
          if (itemId === likedItems[i]) {
            likedItems.splice(i, 1);
            localStorage.setItem("likedList", JSON.stringify(likedItems));
            const index = likedItemsId.indexOf(itemId);
            if (index > -1) {
              likedItemsId.splice(index, 1);
              this.likedItemId = likedItemsId;
            }
          }
        }
      }
    },
  },
});
