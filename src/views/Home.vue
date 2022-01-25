<template>
  <Main>
    <template #iteminbread>
       Main
    </template>
    <template #content>
      <h1>
        All Products
      </h1>

      <div v-if="!loading" class="row">
          <div v-for="product in products" :key="product.id" class="mb-3 col-md-4">
           <div class="h-100 card">
            <img :src="product.image" class="card-img-custom card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">
                {{product.title}}
              </h5>
              <p class="card-text">
                
                {{ product.description.length > 150 ? product.description.substring(0, 150) + '...' : product.description }}
                
              </p>

              <h4>
                ${{product.price}}
              </h4>
              <hr>
              <a @click.prevent="addtocart(1,product.price,'L','White',product.title)" class="btn btn-primary">
                <i class="fa fa-cart-plus"></i> ADD TO CART
              </a>
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
    components : {
      Main
    },
    data(){
      return {
        products : [],
        loading : true
      }
    },
    methods : {
      addtocart(qty,price,size,color,product){

        let cart = JSON.parse(localStorage.getItem('cart_storage'));

        cart = cart != null ? cart : [];

        cart.push({
            qty       : qty,
            price     : price,
            size      : size,
            color     : color,
            product   : product
        });

        localStorage.setItem('cart_storage',JSON.stringify(cart));

      }
    },
    created(){
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
  .card-img-custom{
    width : 200px;
    align-items: center;
    position: relative;
    left: 100px;
    padding: 15px;
  }
</style>