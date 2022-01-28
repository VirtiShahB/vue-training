<template>
  <Main>
    <template #iteminbread>
      Wishlist
    </template>
    <template #content>
      <h1>
        My Wishlist ({{ products != null && products.length > 0 ? products.length : 0 }})
      </h1>
      <hr>
      <div v-if="!loading && products != null && products.length > 0 ? products.length : 0" class="row">
        <div v-for="product in products" :key="product.id" class="mb-3 col-md-4">
          <Product :product="product"></Product>
        </div>
      </div>
      <div v-else>
        <h4 class="text-center">
          <i class="fa fa-heart-o"></i> Your wishlist is empty
        </h4>
      </div>

    </template>
  </Main>
</template>

<script>
  import Main from './Main.vue';
  import Product from './ProductCard.vue';
  import { bus } from '../eventBus';
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
    methods: {
      addtocart(qty, price, size, color, product) {

        let cart = JSON.parse(localStorage.getItem('cart_storage'));

        cart = cart != null ? cart : [];

        let index = cart.findIndex(c => c.product == product);

        if (index !== -1) {
          cart.splice(index, 1);
        }

        cart.push({

          qty: qty,
          price: price,
          size: size,
          color: color,
          product: product

        });

        localStorage.setItem('cart_storage', JSON.stringify(cart));

        this.$bvToast.toast('Item is added to cart !', {
          title: 'Added',
          variant: 'success',
          solid: true
        });

      },
      getWishlist() {

        var getWishlist = JSON.parse(localStorage.getItem('wishlist'));

        if (getWishlist != null && getWishlist.length > 0) {

          this.products = getWishlist.map(function (item) {

            /** covert rating into percentage */

            item['rating']['width'] = (item.rating.rate / 5) * 100;

            /** get item wishlist and check if item is in wishlist*/

            let in_wishlist = getWishlist != null && getWishlist.length > 0 ? getWishlist.findIndex(wish => wish
              .id == item.id) : null;

            item['in_wishlist'] = in_wishlist != null && in_wishlist !== -1 ? true : false

            return item;

          });

          this.loading = false;

        }else{
          this.products = [];
        }

        

      }
    },

    created() {

      bus.$on('wishlist', () => {
        this.getWishlist();
      })
      
      this.getWishlist();

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