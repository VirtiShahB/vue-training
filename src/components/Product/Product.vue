<template>
    <b-card :img-src="product.image" footer-tag="footer" img-alt="Card image" img-top>
      <b-card-text>
        <router-link
    :to="{ name: 'ProductDetail', params: { id: product.id } }"
    class="text-decoraton-none text-dark"
  >
        {{ product.title }}
        </router-link>
        <p class="text-muted mt-2 mb-0">Price</p>
        <h4>${{ product.price }}</h4>
      </b-card-text>
      <template #footer>
        <b-icon-heart @click="addToWishlist" />
      </template>
    </b-card>
</template>
<script>
export default {
  props: {
    product: Object,
  },
  methods:{
    addToWishlist(){
      this.$store.dispatch('wishlist/addToWishlist', this.product)
      this.$bvToast.toast('Added to wishlist.', {
        title: "Wishlist",
        variant: 'success',
        solid: true,
      });
    }
  }
};
</script>
