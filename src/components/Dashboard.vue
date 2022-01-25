<template>
  <div class="hello">
    <h1>Welcome to E-commerce Application</h1>
    <ProductList/>
  </div>
</template>


<script>
import ProductList from './ProductList.vue'

export default {
  name: 'App',
  components: {
    ProductList,
  }
}
</script>
