<template>
  <div class="cart">
    <CART />
  </div>
</template>

<script>
// @ is an alias to /src
import CART from "@/components/Cart.vue";

export default {
  name: "Cart",
  components: {
    CART,
  },
};
</script>
