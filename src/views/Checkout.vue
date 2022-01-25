<template>   
  <div class="checkout">
  
    <main-header
      :productCount="productCount"
      :is-products-dialog-active.sync="isProductsDialogActive"
    />
    <checkout-page :productCart="products"/>
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
  },
  watch: {
    getCart() {
      let products = window.localStorage.getItem('productsOnCart');
      
      console.log(products);
      return products;
    }
  }
  
}
</script>

