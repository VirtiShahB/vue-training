<template>
  <div class="checkout">
    <CHECKOUTDETAIL />
  </div>
</template>

<script>
// @ is an alias to /src
import CHECKOUTDETAIL from "@/components/CheckoutDetail.vue";

export default {
  name: "CheckoutDetail",
  components: {
    CHECKOUTDETAIL,
  },
};
</script>
