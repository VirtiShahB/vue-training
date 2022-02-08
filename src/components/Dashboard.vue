<template>
  <div id="app">
    <the-header></the-header>
    <router-view></router-view>
    <br />
    <div v-if="loading" class="loader"></div>
    <ItemList v-else />
  </div>
</template>

<script>
import TheHeader from "./Header.vue";
import axios from "axios";
import ItemList from "./ItemList.vue";

export default {
  name: "Dashboard",
  components: {
    TheHeader,
    ItemList,
  },
  data() {
    return {
      loading: false,
    };
  },
  async created() {
    const products = this.$store.state.products;
    if (!products || !products.length) {
      this.loading = true;
      try {
        await axios
          .get("https://fakestoreapi.com/products")
          .then((response) => {
            const data = response.data;
            this.$store.dispatch("setProducts", data);
          });
        this.loading = false;
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    }
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>
<style>
.loader {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 1;
  width: 120px;
  height: 120px;
  margin: -76px 0 0 -76px;
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
