<template>
  <div>
    <NavBar :selectedItems="selectedItems"/>
    <ShowAlert :error="error" />
    <ProductList @refreshCartListener="refreshCart" />
  </div>
</template>

<script>
import ProductList from './Products/ProductList'
import Cart from './Products/Cart'
import ShowAlert from './UI/ShowAlert'
import NavBar from './Common/NavBar'
export default {
  name: 'Dashboard',
  components: { ProductList, Cart, ShowAlert, NavBar },
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
