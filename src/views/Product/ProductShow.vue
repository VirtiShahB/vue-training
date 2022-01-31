<template>
  <div id="app">
    <b-container class="my-5">
      <h4 class="font-weight-bold">Product Detail</h4>
      <b-row>
        <b-col cols="12" :key="product.id">
          <product-detail-component
            :product="product"
            @addToCart="onAddToCart($event)"
          ></product-detail-component>
        </b-col>
        <b-col cols="4">
          
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ProductDetailComponent from "@/components/Product/ProductDetailComponent.vue";
import { products } from "@/services/Product";

export default {
  name: "App",
  components: {
    ProductDetailComponent,
    // CartComponent,
  },
  data() {
    return {
      products,
      product: {},
    };
  },
  created() {
    let productInd = products.findIndex(
      item => item.id == this.$route.params.id
    );
    if (productInd >= 0) {
      this.product = this.products[productInd];
    }
  },
};
</script>
