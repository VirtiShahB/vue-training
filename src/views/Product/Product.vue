<template>
  <div id="app">
    <b-container class="my-5">
      <h4 class="font-weight-bold">All Products</h4>
      <b-row>
        <b-col cols="3" v-for="product in products" :key="product.id">
          <product :product="product"></product>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Product from "../../components/Product/Product.vue";
import { products } from "../../services/Product";
export default {
  name: "App",
  components: {
    Product,
  },
  data() {
    return {
      products,
    };
  },
};
</script>
