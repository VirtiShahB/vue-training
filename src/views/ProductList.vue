<template>
  <div class="ProductList">
    <div class="container wrapper">
      <div class="row">
        <div class="col-md-3 text-left">
          <h5>Product List</h5>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 text-right">
          <button class="btn btn-primary" @click="$router.push({path: '/wishlist/products'})">View Wishlist Products</button>
        </div>
      </div>
      <div class="clearfix"></div><br />

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
                    <p class="btn btn-danger btn-block" @click="addProductToWishlist(product)">Add to Wishlist</p>
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
  name: 'ProductList',
  props: {
    
  },
  data() {
    return {
       products: []
    }
  },
  mounted() {
    const arr1 = ["Cecilie", "Lone"];
    const arr2 = ["Emil", "Tobias", "Linus"];
    const children = arr1.concat(arr2);

    let text = "ABCDEFG"
    const myArr = Array.from(text);

    console.log(myArr);

    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        this.products = res.data; 
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  },
  methods: {
    addProductToWishlist(product){
      var _this = this;
      var wishlistProducts = localStorage.getItem('wishlist_products');

      if(wishlistProducts != undefined || wishlistProducts != null){
        wishlistProducts = JSON.parse(wishlistProducts);

        var isProductExist = 0;

        wishlistProducts.map(function(value, key) {
          if(product.id == value.id){
            isProductExist = 1;
          }
        });

        if(isProductExist == 0){
          wishlistProducts.push(product);
        }
      }else{
        wishlistProducts = [];
        wishlistProducts.push(product);
      }

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
