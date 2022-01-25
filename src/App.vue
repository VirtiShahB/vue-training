<template>
  <div id="app">
   <router-view/>

    <!-- <Dashboard/>
    <Product/>
    <Checkout/> -->
  </div>
</template>

<script>
// import Dashboard from './components/Dashboard.vue'
// import Product from './components/Product.vue'
// import Checkout from './components/Checkout.vue'

export default {
  name: 'App',
  components: {
    // Dashboard,
    // Product,
    // Checkout
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
