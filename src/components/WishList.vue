<template>
  <div>
    <the-header></the-header>
    <br />
    <div class=" m-2" v-if="!products || !products.length">
      <b-alert variant="danger" show>No Products added to the wishlist</b-alert>
    </div>
    <b-container v-else class="bv-example-row">
      <b-row>
        <br />
        <div class="col-4" v-for="product in products" :key="product.id">
          <b-card class="text-left" @click="getProductDetails(product)"
            ><b-img
              thumbnail
              fluid
              width="400"
              height="400"
              :src="product.image"
              :alt="product.image"
            ></b-img>
            <b-card-text>
              <span> {{ product.title }} </span>
              <span class="float-right"> ${{ product.price }} </span>
            </b-card-text>
          </b-card>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TheHeader from "./Header.vue";

export default {
  name: "Wishlist",
  components: { TheHeader },
  props: {
    id: Number,
    name: String,
    price: Number,
    currency: String,
    image: String,
  },
  computed: {
    products() {
      return JSON.parse(localStorage.getItem("loggedUserWishlist"));
      // return this.$store.state.wishList;
    },
  },
  methods: {
    getProductDetails(product) {
      this.$router.push({ name: "details", params: { product: product } });
    },
  },
};
</script>
