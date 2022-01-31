<template>
    <b-container class="my-5">
      <h4 class="font-weight-bold">Checkout</h4>
      <cart-component :cart="cart" ></cart-component>
          <router-link
            class="btn btn-primary btn-block mt-3"
            :class="{ disabled: !cart.length }"
            to="/checkout"
            >Checkout</router-link
          >
    </b-container>
</template>

<script>

import CartComponent from "@/components/Cart/CartComponent.vue";
export default {
    data(){
        return {
            cart:[]
        }
    },
    components:{
        CartComponent
    },
    created(){
        this.cart = JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")): [];
    }
}
</script>