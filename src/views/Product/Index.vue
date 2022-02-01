<template>
  <div id="app">
    <b-container class="my-5">
      <h4 class="font-weight-bold">All Products</h4>
      <b-row>
        <b-col sm="12" md="12" lg="3">
          <b-card
      header="Filter"
      header-tag="header"
    >
      <b-form-group
              id="fieldset-1"
              label="By Product Name"
              label-for="searchProductName"
            >
              <b-form-input
                id="searchProductName"
                v-model.trim="filter.searchProductName"
                trim
                :formatter="tolowerFormatter"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="range"
              label="By Product Range"
              label-for="searchProductName"
            >
              <b-form-input id="range-1" v-model="filter.range" type="range" min="0" :max="filter.maxRange"></b-form-input>
            </b-form-group>
    </b-card>
        </b-col>
        <b-col sm="12" md="12" lg="9">
          <b-row>
            <b-col cols="12" v-if="!filterProducts.length">
              <p class="text-center">No products found.</p>
            </b-col>
            <b-col cols="4" v-for="product in filterProducts" :key="product.id">
              <product :product="product"></product>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Product from "@/components/Product/Product.vue";
import { products } from "@/services/Product";
export default {
  name: "App",
  components: {
    Product,
  },
  data() {
    return {
      products,
      filter: {
        maxRange:6000,
        range: 6000,
        searchProductName: "",
      },
    };
  },
  computed: {
    
    filterProducts: function () {
      return this.filterProductsByPrice(this.filterProductsByName(this.products));
    },
  },
  methods: {
    filterProductsByPrice: function (products) {
      return products.filter(
        (item) => item.price > 0 && item.price <= this.filter.range
      );
    },
    filterProductsByName: function (products) {
      return products.filter((item) =>
        item.title
          .toLowerCase()
          .includes(this.filter.searchProductName)
      );
    },
    tolowerFormatter: function(value){
      return value.toLowerCase()
    },
  },
};
</script>
