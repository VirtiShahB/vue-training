<template>
  <div id="app">
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from "@/components/Dashboard.vue";

export default {
  name: "App",
  components: {
    Dashboard,
  },
};
</script>
<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  font-size: 1.5rem;
}
p {
  text-align: unset;
  padding: 1px;
}
</style>
