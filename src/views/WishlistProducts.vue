<template>
  <div class="WishlistProducts">
    <div class="container wrapper">
      <div class="row">
        <div class="col-md-3 text-left">
          <h5>Wishlist Product List</h5>
        </div>
      </div>

      <div class="row">
        <div class="col-md-3" v-for="(product, productKey) in products" :key="productKey">
          <div class="card">
            <img class="card-img-top" :src="product.image" :alt="product.title">
            <div class="card-body">
              <h4 class="card-title"><span title="View Product" @click="$router.push({path: '/product/'+product.id})">{{ product.title }}</span></h4>
              <p class="card-text">{{ product.description }}</p>
              <div class="row">
                <div class="col">
                    <p class="btn btn-danger btn-block">{{ product.price }} $</p>
                </div>
                <div class="col">
                    <p class="btn btn-danger btn-block" @click="removeProductToWishlist(product)">Remove to Wishlist</p>
                </div>
                <div class="col">
                    <a href="#" class="btn btn-success btn-block">Add to cart</a>
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
import axios from 'axios'

export default {
  name: 'WishlistProducts',
  props: {
    
  },
  data() {
    return {
       products: []
    }
  },
  mounted() {
    var wishlistProducts = localStorage.getItem('wishlist_products');

    if(wishlistProducts != undefined || wishlistProducts != null){
      this.products = JSON.parse(wishlistProducts);
    }
  },
  methods: {
    removeProductToWishlist(product){
      var _this = this;
      var wishlistProducts = localStorage.getItem('wishlist_products');

      if(wishlistProducts != undefined || wishlistProducts != null){
        wishlistProducts = JSON.parse(wishlistProducts);

        var productKey = 0;

        wishlistProducts.map(function(value, key) {
          if(product.id == value.id){
            productKey = key;
          }
        });
      }

      wishlistProducts.splice(productKey, 1);
      this.products = wishlistProducts;
      localStorage.setItem('wishlist_products', JSON.stringify(wishlistProducts));    
    } 
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .text-left{
   text-align: left !important;
 }
 .text-right{
   text-align: right !important;
 }
</style>
