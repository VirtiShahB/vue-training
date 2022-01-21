<template>
  <div id="app">
   <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Product />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Product from './components/Product.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld,
    Product
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
