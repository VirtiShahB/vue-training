<template>
  <b-list-group-item>
    <div class="d-flex flex-row align-items-center">
      <b-avatar
        class="mr-3"
        variant="transparent"
        :src="product.image"
      ></b-avatar>
      <span class="mr-auto small">{{ product.title }}</span>
      <b-icon-x-circle-fill
        variant="danger"
        style="cursor: pointer"
        @click="$store.dispatch('wishlist/addToWishlist', product)"
      ></b-icon-x-circle-fill>
    </div>
  </b-list-group-item>
</template>
<script>
export default {
  props: {
    product: Object,
  },
};
</script>
