<template>
  <Main>
    <template #iteminbread>
      Main
    </template>
    <template #content>
      <h1>
        All Products
      </h1>
      <hr>
      <div v-if="!loading" class="row">
        <div v-for="product in products" :key="product.id" class="mb-3 col-md-4">
          <div class="h-100 card">
            <div class="border-primay bg-primary card-header">
              <h5 class="card-title">
                <a href="#" class="text-light">
                  {{product.title}}
                </a>
              </h5>
            </div>
            <a href="#">
              <img :src="product.image" class="card-img-custom card-img-top" alt="...">
            </a>
            <div class="card-body">
              
              <p class="card-text">

                {{ product.description.length > 100 ? product.description.substring(0, 100) + '...' : product.description }}

              </p>
        
            </div>
            <div class="card-footer">
              <a @click.prevent="addtocart(1,product.price,'L','White',product.title)" class="btn btn-success btn-md">
                <i class="fa fa-cart-plus"></i> ADD TO CART
              </a>

              <h4 class="text-danger pull-right">
                 ${{product.price.toFixed(2)}}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <b-row>
          <b-col class="mb-3" v-for="(i,index) in 6" :key="index" cols="12" md="4">
            <b-card class="h-100" no-body img-top>
              <b-skeleton-img card-img="top" aspect="3:1"></b-skeleton-img>
              <b-card-body>
                <b-skeleton animation="fade" width="85%"></b-skeleton>

                <b-skeleton animation="throb" width="85%"></b-skeleton>
                <b-skeleton animation="throb" width="55%"></b-skeleton>

                <b-skeleton type="button"></b-skeleton>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </div>

    </template>
  </Main>
</template>

<script>
  import Main from './Main.vue';
  import axios from 'axios';
  export default {
    components: {
      Main
    },
    data() {
      return {
        products: [],
        loading: true
      }
    },
    methods: {
      addtocart(qty, price, size, color, product) {

        let cart = JSON.parse(localStorage.getItem('cart_storage'));

        cart = cart != null ? cart : [];

        let index = cart.findIndex(c => c.product == product);

        if (index !== -1) {
          cart.splice(index, 1);
        }

        cart.push({

          qty     : qty,
          price   : price,
          size    : size,
          color   : color,
          product : product

        });

        localStorage.setItem('cart_storage', JSON.stringify(cart));

      }
    },
    created() {
      axios.get('https://fakestoreapi.com/products')
        .then(res => {
          this.products = res.data;
          this.loading = false;
        })
        .catch(err => {
          console.log(err);
        })
    }
  }
</script>

<style>
  .card-img-custom {
    width: 200px;
    align-items: center;
    position: relative;
    left: 100px;
    padding: 15px;
  }
</style>