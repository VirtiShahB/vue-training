<template>
  <div class="mr-5">
    <b-row no-gutters>
      <ProductList />
    </b-row>
  </div>
</template>

<script>
import ProductList from './Products/ProductList'
export default {
  name: 'Dashboard',
  components: { ProductList }
}
</script>
