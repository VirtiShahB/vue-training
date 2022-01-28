<template>
  <Main>
    <template #iteminbread>
      Products
    </template>
    <template #content>
      <h1>
        All Products
      </h1>
      <hr>
      <div v-if="!loading" class="row">
        <div v-for="product in products" :key="product.id" class="mb-3 col-md-4">
            <Product :product="product"></Product>
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
  import Product from './ProductCard.vue';
  export default {
    components: {
      Main,
      Product
    },
    data() {
      return {
        products: [],
        loading: true
      }
    },
    async created()  {

      /** Get Product From API */

      await axios.get('https://fakestoreapi.com/products')
        .then(res => {
          this.products = res.data;

          let get_wishlist = JSON.parse(localStorage.getItem('wishlist'));

          this.products = this.products.map(function(item){

            /** covert rating into percentage */

            item['rating']['width'] = (item.rating.rate / 5) * 100;

            /** get item wishlist and check if item is in wishlist*/

            let in_wishlist = get_wishlist != null && get_wishlist.length > 0 ? get_wishlist.findIndex(wish => wish.id == item.id) : null ;

            item['in_wishlist'] = in_wishlist != null && in_wishlist !== -1 ? true : false

            return item;

          });

          this.loading = false;

        })
        .catch(err => {
          console.log('error : '+err)
        })
    }
  }
</script>

