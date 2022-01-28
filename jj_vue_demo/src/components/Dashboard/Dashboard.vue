<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col-md-4" v-for="(product, index) in products" :key="index">
        <Product :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import Product from "../Product.vue";

export default {
  data() {
    return {};
  },
  props: ["products"],
  name: "Dashboard",
  components: {
    Product,
  },
};
</script>
