<template>
  <div >
    <FrontHeader ></FrontHeader>
    <nav aria-label="breadcrumb" class="mt-3">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="'/admin'" class="breadcrumb-item">Home</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Products</li>
      </ol>
    </nav>
    <div class="container mt-2">
      <div class="row">
        <b>Products</b>
        <div class="ml-auto mr-2">
          <select v-model="filter" class="form-control" v-on:change="sortBy">
              <option disabled value="">Please select filter</option>
              <option value="1">Low to High(Price)</option>
              <option value="2">High to Low(Price)</option>
          </select>
        </div>
      </div>
      <div class="row">
          <div class="row mt-4">
            <div v-for="product of items" :key="product.id" class="col-12 col-md-6 col-lg-3">
              <div class="card">
                <i class="nc-icon nc-fav-remove mt-2 mb-2 ml-1" v-on:click="removeFromWishList(product.id)" v-if="isInWishList(product.id)"></i>
                <i class="nc-icon nc-favourite-28 mt-2 mb-2 ml-1" v-on:click="addToWishList(product.id)" v-else></i>
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
</template>

<script>
import items  from 'src/pages/Products.json'
import FrontHeader from 'src/pages/FrontHeader'
import FrontFooter from 'src/pages/FrontFooter'
export default {
  name: 'Products',
  components: {
    'FrontHeader': FrontHeader,
    'FrontFooter': FrontFooter
  },
  data() {
    return {
      items,
      filter  : '',
      cart    : [],
      wishList: []
    };
  },
  methods: {
    addToWishList: function (itemId) {
      const item = this.items.find(({ id }) => id === itemId);
      if (!localStorage.getItem("wishList")) {
        localStorage.setItem("wishList", JSON.stringify([]));
      }
      const wishListItems = JSON.parse(localStorage.getItem("wishList"));
      wishListItems.push(item);
      localStorage.setItem("wishList", JSON.stringify(wishListItems));
      this.wishList = JSON.parse(localStorage.getItem("wishList"));
    },
    removeFromWishList: function (itemId) {
      const wishListItems = JSON.parse(localStorage.getItem("wishList"));
      const index = wishListItems.findIndex(({ id }) => id === itemId);
      wishListItems.splice(index, 1);
      localStorage.setItem("wishList", JSON.stringify(wishListItems));
      this.wishList = JSON.parse(localStorage.getItem("wishList"));
    },
    isInWishList: function (itemId) {
      if (!localStorage.getItem("wishList")) {
        localStorage.setItem("wishList", JSON.stringify([]));
      }
      const wishlistItem = this.wishList.find(({ id }) => id === itemId);
      return Boolean(wishlistItem);
    },
    sortBy: function(e) {
      const sortBy = e.target.value;
      return this.items.sort((a, b) => {
        if (sortBy === '2') {
          return b.price - a.price;
        } else if (sortBy === '1') {
          return a.price - b.price;
        }
      });
    },
    isInCart(itemId) {
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      const cartItem = this.cart.find(({ id }) => id === itemId);
      return Boolean(cartItem);
    },
    addToCart(itemId) {
      var item = this.items.find(({ id }) => id === itemId);
      item.quantity = 1;
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
    if(!localStorage.getItem("items")) {
      localStorage.setItem("items", JSON.stringify(this.items));    
    }
  }
};
</script>
<style scoped>
  .card-img-top {
    width: 250px;
    height: 200px;
  }
  .nc-fav-remove {
    color: rgb(0, 131, 33);
  }
</style>