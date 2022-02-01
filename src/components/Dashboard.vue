<template>
  <div>
    <ProductList />
  </div>
</template>

<script>
import ProductList from './Products/ProductList'
export default {
  name: 'Dashboard',
  components: { ProductList },
  mounted () {
    // localStorage.removeItem('totalCartItems')
    // localStorage.removeItem('cartCount')
  }
}
</script>
