<template>
  <div>
    <FrontHeader ></FrontHeader>
    <nav aria-label="breadcrumb" class="mt-3">
      <ol class="breadcrumb">
        <router-link :to="'/admin'" class="breadcrumb-item">Home</router-link>
        <li class="breadcrumb-item" aria-current="page">Wishlist</li>
      </ol>
    </nav>
    <div class="container mt-2">
      <div class="row">
        <div class="col">
          <div class="row mt-4">
            <div v-for="product of wishList" :key="product.id" class="col-12 col-md-6 col-lg-3">
              <div class="card">
                <i class="nc-icon nc-fav-remove mt-2 mb-2 ml-1" v-on:click="removeFromWishlist(product.id)" v-if="isInWishlist(product.id)"></i>
                <i class="nc-icon nc-favourite-28 mt-2 mb-2 ml-1" v-on:click="addToWishlist(product.id)" v-else></i>
                <router-link :to="{ name: 'product-details', params: { id: product.id} }">
                  <img class="card-img-top" :src="product.imageUrl" alt="Card image cap"/>
                </router-link>
                <div class="card-body">
                  <p class="text-danger">$ {{ product.price }}</p>
                  <h5 class="card-title">
                    {{ product.title }}
                  </h5>
                    <div class="row">
                      <div class="col">
                        <button class="btn btn-success btn-block"  @click="removeFromCart(product.id)" v-if="isInCart(product.id)">Remove</button>
                        <button class="btn btn-success btn-block" @click="addToCart(product.id)" v-else>Add to cart</button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import FrontHeader from 'src/pages/FrontHeader'
  import FrontFooter from 'src/pages/FrontFooter'
  export default {
    components: {
      'FrontHeader': FrontHeader,
      'FrontFooter': FrontFooter
    },
    data() {
      return {
        items:[],
        cart    : [],
        wishList: []
      };
    },
  methods: {
    addToWishlist: function (itemId) {
      const item = this.wishList.find(({ id }) => id === itemId);
      if (!localStorage.getItem("wishList")) {
        localStorage.setItem("wishList", JSON.stringify([]));
      }
      const wishListItems = JSON.parse(localStorage.getItem("wishList"));
      wishListItems.push(item);
      localStorage.setItem("wishList", JSON.stringify(wishListItems));
      this.wishList = JSON.parse(localStorage.getItem("wishList"));
    },
    removeFromWishlist: function (itemId) {
      const wishListItems = JSON.parse(localStorage.getItem("wishList"));
      const index = wishListItems.findIndex(({ id }) => id === itemId);
      wishListItems.splice(index, 1);
      this.wishList.splice(index, 1);
      localStorage.setItem("wishList", JSON.stringify(wishListItems));
      this.wishList = JSON.parse(localStorage.getItem("wishList"));
    },
    isInWishlist: function (itemId) {
      if (!localStorage.getItem("wishList")) {
        localStorage.setItem("wishList", JSON.stringify([]));
      }
      const wishlistItem = this.wishList.find(({ id }) => id === itemId);
      return Boolean(wishlistItem);
    },
    isInCart(itemId) {
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      const cartItem = this.cart.find(({ id }) => id === itemId);
      return Boolean(cartItem);
    },
    addToCart(itemId) {
      const item = this.wishList.find(({ id }) => id === itemId);
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      const cartItems = JSON.parse(localStorage.getItem("cart"));
      cartItems.push(item);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      this.cart = JSON.parse(localStorage.getItem("cart"));
    },
    removeFromCart(itemId) {
      const cartItems = JSON.parse(localStorage.getItem("cart"));
      const index = cartItems.findIndex(({ id }) => id === itemId);
      cartItems.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      this.cart = JSON.parse(localStorage.getItem("cart"));
    },
  },
  beforeMount(){
    if(localStorage.getItem("cart")) {
      this.cart = JSON.parse(localStorage.getItem("cart"));
    }
    if(localStorage.getItem("wishList")) {
      this.wishList = JSON.parse(localStorage.getItem("wishList"));
    }
  }
};
</script>
<style scoped>
  .card-img-top {
    width: 250px;
    height: 200px;
  }
  img {
    width: 50px;
    height: 20px;
  }
  .nc-fav-remove {
    color: rgb(0, 131, 33);
  }
</style>