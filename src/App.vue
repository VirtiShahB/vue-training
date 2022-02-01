<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>
<script>
import Nav from "./components/partials/Nav.vue";
export default {
  name: "app",
  components: {
    Nav,
  },
};
</script>
<style>
@import url("./assets/css/style.scss");
</style>
