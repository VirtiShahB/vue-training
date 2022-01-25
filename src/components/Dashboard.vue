<template>
  <div class="hello">
    <h1>Welcome to E-commerce Application</h1>
    <Product/>
  </div>
</template>


<script>
import Product from './Product.vue'

export default {
  name: 'App',
  components: {
    Product,
  }
}
</script>
