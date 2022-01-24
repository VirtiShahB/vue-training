<template>
  <div id="app">
    <Dashboard />
    <!-- <Checkout /> -->
  </div>
</template>

<script>
import Dashboard from "./views/products/index.vue";
// import Checkout from "./views/products/checkout.vue";

export default {
  name: "App",
  components: {
    Dashboard,
    // Checkout,
  },
};
</script>


