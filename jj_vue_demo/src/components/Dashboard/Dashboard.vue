<template>
  <div class="container">
    <div class="row">
      <div class="mt-4" v-for="(product, index) in products" :key="index">
        <ProductDetail :product="product"></ProductDetail>
      </div>
    </div>
  </div>
</template>

<script>
import ProductDetail from "./ProductDetail.vue";

export default {
  data() {
    return {
      cartProducts: [],
    };
  },
  props: ["products"],
  name: "Dashboard",
  components: {
    ProductDetail,
  },
};
</script>
