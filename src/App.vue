<template>
  <div id="app">
    <main-header      
    />
    <b-container>
      <b-row>
        <product-card
          v-for="(product, i) in allProducts"
          :key="i"
          :product="product"
         
        />
      </b-row>
      
    </b-container>
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader.vue";
import ProductCard from "./components/ProductCard.vue";
import products from "./data/products";

export default {
  name: "App",
  components: {
    MainHeader,
    ProductCard,
  },
  data() {
    return {
      allProducts: [...products], // All products from json file.
      productCount: 0 // Total selected product count.

    };
  },
  
};

</script>

