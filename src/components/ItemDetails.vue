<template>
  <div class="container">
    <div class="row">
      <div class="col-2">
        <b-container fluid class="p-4 bg-light">
          <b-row>
            <b-img thumbnail fluid img-src="" img-alt=""></b-img>
          </b-row>
        </b-container>
      </div>
      <div class="p-4 col-4">
        <b-img
          :src="$route.params.product.image"
          fluid-grow
          alt="Fluid-grow image"
        ></b-img>
      </div>
      <div class="col"><ProductDetails v-bind="$route.params.product" /></div>
    </div>
  </div>
</template>

<script>
import ProductDetails from "./ProductDetails.vue";

export default {
  name: "ItemList",
  components: {
    ProductDetails,
  },
  computed: {},
};
</script>
