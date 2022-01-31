<template>
  <div id="app">
    <the-header></the-header>
    <router-view></router-view>
  </div>
</template>
<script>
import TheHeader from "../components/partials/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>
