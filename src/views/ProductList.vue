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
        <div class="col-3">
            <input type="text" class="form-control" placeholder="Category Name, Product Name" v-model="formdata.search_keyword">
        </div>

        <div class="col-3">
          <input type="text" class="form-control" placeholder="Price" v-model="formdata.search_price">
        </div>

        <div class="col-1">
            <button class="btn btn-primary" @click="searchProduct()">Search</button>
        </div>
      </div>
      <div class="clearfix"></div><br />

      <div class="row">
        <div class="col-md-3" v-for="(product, productKey) in products" :key="productKey">
          <div class="card">
            <img class="card-img-top" :src="product.image" :alt="product.title" style="width: 150px;">
            <div class="card-body">
              <h4 class="card-title"><span title="View Product" @click="$router.push({path: '/product/'+product.id})">{{ product.title }}</span></h4>
              <p class="card-text">{{
          product.description.length > 100
            ? product.description.substring(0, 100) + "..."
            : product.description
        }}</p>
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
import cart from '@/mixins/Cart'

export default {
  name: 'ProductList',
  mixins: [cart],
  props: {
    
  },
  data() {
    return {
      products: [],
      allProducts: [],
      formdata: {
        search_keyword: '',
        search_price: '',
      }
    }
  },
  mounted() {
    const arr1 = ["Cecilie", "Lone"];
    const arr2 = ["Emil", "Tobias", "Linus"];
    const children = arr1.concat(arr2);

    let text = "ABCDEFG"
    const myArr = Array.from(text);

    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        this.products = res.data;
        this.allProducts = res.data;
      })
      .catch(err => {
        console.log(err);
      })
  },
  methods: {
    searchProduct(){
      var _this = this;

      if(this.formdata.search_keyword.length > 0 || this.formdata.search_price.length > 0){
        var tempProducts = [];

        this.allProducts.map(function(value, key) {
          var isProductAdd = 0;
          
          if(_this.formdata.search_price.length > 0 && value.price == _this.formdata.search_price){
            isProductAdd = 1;
          }

          if(isProductAdd == 1){
            tempProducts.push(value);
          }
        });

        this.products = tempProducts;
      }else{
        this.products = this.allProducts;
      }  
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
