<template>
  <div class="container">
    <div class="row">
      <div class="col-2">
        <b-container fluid class="p-4 bg-light">
          <b-row v-for="product in products" :key="product.id">
            <b-img thumbnail fluid :src="product.image" @click="getProduct(product)" :alt="product.image"></b-img>
          </b-row>
        </b-container>
      </div>
      <div class="p-4 col-4">
        <b-img
          :src="getDefaultImage"
          fluid-grow
          alt="Fluid-grow image"
        ></b-img>
      </div>
      <div class="col">
        <ProductDetails v-bind="getDefaultInfo" />
      </div>
    </div>
  </div>
</template>
<script>
import ProductDetails from "./ProductDetails.vue";

export default {
  name: "App",
  components: {
    ProductDetails,
  },
  props: {
    id: Number,
    name: String,
    price: Number,
    currency: String,
    image: String,
    bigimage: String,
    clickedProduct: Object
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    getDefaultImage() {
      return this.$props.bigimage || this.$store.state.products[0].image
    },
    getDefaultInfo() {
      return this.$props.clickedProduct || this.$store.state.products[0]
    }
  },
  methods: {
    getProduct(product) {
      // console.log(product);
      this.$props.bigimage = product.image
      this.$props.clickedProduct = product
    }
  }
};
</script>
