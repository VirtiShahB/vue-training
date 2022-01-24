<template>
  <div id="app">
    <Dashboard />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
  </div>
</template>

<script>
import Dashboard from './components/dashboard.vue'

export default {
  name: 'App',
  components: {
    Dashboard
  }
}
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

</style>
