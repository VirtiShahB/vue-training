<template>
  <div>
    <ShowAlert :error="error" />
    <Cart :selectedItems="selectedItems" @errorListener="errorListener" />
    <ProductList @refreshCartListener="refreshCart" />
  </div>
</template>

<script>
import ProductList from './Products/ProductList'
import Cart from './Products/Cart'
import ShowAlert from './UI/ShowAlert'
export default {
  name: 'Dashboard',
  components: { ProductList, Cart, ShowAlert },
  data () {
    return {
      selectedItems: {},
      error: {}
    }
  },
  methods: {
    refreshCart (cartItem) {
      this.selectedItems = cartItem
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    errorListener (type, msg) {
      this.error = [type, msg]
    }
  }
}
</script>
