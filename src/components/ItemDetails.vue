<template>
  <div>
    <the-header></the-header>
    <div class="row">
      <div class="col-2">
        <b-container fluid class="p-4 bg-light">
          <b-row>
            <b-img thumbnail fluid img-src="" img-alt=""></b-img>
          </b-row>
        </b-container>
      </div>
      <div class="p-4 col-4">
        <b-img :src="image" fluid-grow alt="Fluid-grow image"></b-img>
      </div>
      <div class="col"><ProductDetails v-bind="items" /></div>
    </div>
  </div>
</template>

<script>
import TheHeader from "./Header.vue";
import ProductDetails from "./ProductDetails.vue";

export default {
  name: "ItemList",
  components: {
    ProductDetails,
    TheHeader,
  },
  data() {
    return {
      productId: null,
      image: "",
      items: {},
    };
  },
  mounted() {
    const productsData = JSON.parse(localStorage.getItem("productsData"));
    this.items = productsData.find((item) => {
      return item.id == this.$route.query.id;
    });
    this.image = this.items.image;
  },
};
</script>
