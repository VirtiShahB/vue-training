<template>
  <div class="container">
    <div class="row">
      <div class="col-2">
        <b-container fluid class="p-4 bg-light">
          <b-row v-for="product in products" :key="product.id">
            <Cart v-on:itemSelect="getProduct" v-bind="product" />
          </b-row>
        </b-container>
      </div>
      <div class="p-4 col-4">
        <b-img :src="getDefaultImage" fluid-grow alt="Fluid-grow image"></b-img>
      </div>
      <div class="col">
        <ProductDetails v-bind="getDefaultInfo" />
      </div>
    </div>
  </div>
</template>
<script>
import Cart from "./Cart.vue";
import ProductDetails from "./ProductDetails.vue";

export default {
  name: "ProductList",
  components: {
    Cart,
    ProductDetails,
  },
  props: {
    bigimage: String,
    clickedProduct: Object,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    getDefaultImage() {
      return this.$props.bigimage || this.$store.state.products[0].image;
    },
    getDefaultInfo() {
      return this.$props.clickedProduct || this.$store.state.products[0];
    },
  },
  methods: {
    getProduct(productId) {
      const p = this.$store.state.products.filter(
        (item) => item.id == productId
      );
      this.$props.bigimage = p.image;
      this.$props.clickedProduct = p;
    },
  },
};
</script>
