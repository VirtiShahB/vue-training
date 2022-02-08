<template>
  <div id="app">
    <b-container class="my-5">
      <h4 class="font-weight-bold">All Products</h4>
      <b-row>
        <b-col sm="12" md="12" lg="3">
          <b-card header="Filter" header-tag="header">
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
              <b-form-input
                id="range-1"
                v-model="filter.range"
                type="range"
                min="0"
                :max="filter.maxRange"
              ></b-form-input>
            </b-form-group>
          </b-card>
        </b-col>
        <b-col sm="12" md="12" lg="9">
          <b-row>
            <b-col cols="12" class="text-center" v-if="loading">
              <b-spinner label="Loading..." />
            </b-col>
            <b-col
              cols="12"
              class="text-center"
              v-if="!loading && filterProducts.length == 0"
            >
              <p>No products found</p>
            </b-col>
            <b-col cols="4" v-for="product in filterProducts" :key="product.id">
              <product :product="product" />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col sm="12" md="12" lg="12">
          <h4 class="font-weight-bold">Recommended Products</h4>
          <b-row>
            <b-col
              cols="3"
              v-for="product in recommendedProducts"
              :key="product.id"
            >
              <product :product="product" />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Product from "@/components/Product/Product.vue";
export default {
  name: "App",
  components: {
    Product,
  },
  data() {
    return {
      filter: {
        maxRange: 20,
        range: 20,
        searchProductName: "",
      },
    };
  },
  created() {
    this.$store.commit("product/CLEAR_PRODUCTS");
    this.$store.dispatch("product/getProducts");
  },
  watch: {
    "filter.searchProductName": function (newVal) {
      this.$store.dispatch("product/addRemoveFilters", {
        type: "name",
        search: newVal,
      });
    },
    "filter.range": function (newVal) {
      this.$store.dispatch("product/addRemoveFilters", {
        type: "range",
        search: newVal,
      });
    },
  },
  computed: {
    filterProducts: function () {
      return this.$store.getters["product/filterProducts"];
    },
    loading: function () {
      return this.$store.getters["product/getLoadingStatus"];
    },
    recommendedProducts: function () {
      return this.$store.getters["product/getRecommendedProducts"];
    },
  },
  methods: {
    tolowerFormatter: function (value) {
      return value.toLowerCase();
    },
  },
};
</script>
