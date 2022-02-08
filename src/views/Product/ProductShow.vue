<template>
  <div id="app">
    <b-container class="my-5">
      <h4 class="font-weight-bold">Product Detail</h4>
      <b-row>
        <b-col cols="12">
          <div class="text-center" v-if="loading">
            <b-spinner />
          </div>
          <product-detail-component
            v-else
            :product="product"
            @addToCart="onAddToCart($event)"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ProductDetailComponent from "@/components/Product/ProductDetailComponent.vue";
export default {
  name: "App",
  components: {
    ProductDetailComponent,
  },
  created() {
    this.$store.dispatch("product/getProduct", this.$route.params.id);
  },
  computed: {
    product: function () {
      return this.$store.state.product.product;
    },
    loading: function () {
      return this.$store.getters["product/getLoadingStatus"];
    },
  },
};
</script>
