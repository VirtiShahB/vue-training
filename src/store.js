import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wishList:[],
  },
  mutations: {
    addWishlist(state,{item,wishListItemId}){
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
      if (!localStorage.getItem("wishList")) {
        localStorage.setItem("wishList", JSON.stringify([]));
      }
      this.wishList = JSON.parse(localStorage.getItem("wishList"));
    },
    removeFromWishlist(state,{item,wishListItemId}){
      if (!localStorage.getItem("wishList")) {
        localStorage.setItem("wishList", JSON.stringify([]));
      }
      const wishListItems = JSON.parse(localStorage.getItem("wishList"));
      const wishListItemsId = wishListItemId;
     
      if(wishListItems.length>0){
        for(var i = 0; i<wishListItems.length;i++){
          if(item.id === wishListItems[i].id){
            wishListItems.splice(i, 1);
            localStorage.setItem("wishList", JSON.stringify(wishListItems));
            this.wishList = JSON.parse(localStorage.getItem("wishList"));
            const index = wishListItemsId.indexOf(item.id);
            if (index > -1) {
              wishListItemsId.splice(index,1); 
              this.wishListItemId = wishListItemsId;
            }
          }
        }
      }
    }
  }
})