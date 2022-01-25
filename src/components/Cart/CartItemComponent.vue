<template>
  <div>
    <b-list-group-item>
      <div class="d-flex flex-row justify-content-between align-items-center">
        <p class="mb-0 pr-3">{{ cart.title }} x {{ cart.quantity }}</p>
        <h6 class="mb-0">${{ cart.price * cart.quantity }}</h6>
      </div>
    </b-list-group-item>
  </div>
</template>
<script>
export default {
  props: {
    cart: Object,
  },
};
</script>
