<template>   
  <div class="checkout">
    <toast message="Product added to cart" :show.sync="showToast" />
    <main-header
      :productCount="productCount"
      :is-products-dialog-active.sync="isProductsDialogActive"
    />
    <checkout-page/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from '@/components/MainHeader.vue';
import CheckoutPage from '@/components/Checkout.vue';
export default {
  name: 'Checkout',
  components: {
    MainHeader,
    CheckoutPage,
  },

    data() {
    return {
      selectedProducts: [], // Selected products list.
      productCount: 0, // Total selected product count.
    };
  }
  
}
</script>

