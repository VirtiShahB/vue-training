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
        @click="removeFromWishlist"
      ></b-icon-x-circle-fill>
    </div>
  </b-list-group-item>
</template>
<script>
export default {
  props: {
    product: Object,
  },
  methods:{
    removeFromWishlist(){
      this.$store.dispatch('wishlist/addToWishlist', this.product)
      this.$bvToast.toast('Removed from wishlist.', {
        title: "Wishlist",
        variant: 'success',
        solid: true,
      });
    }
  }
};
</script>
