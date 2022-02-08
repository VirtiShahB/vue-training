<template>
  <router-link
    :to="{ name: 'ProductDetail', params: { id: product.id } }"
    class="text-decoraton-none text-dark"
    :title="product.title"
  >
    <b-card class="mb-3">
      <b-card-img-lazy
        :src="product.image"
        alt="Image"
        class="center"
        style="width: 100%; height: 200px"
        top
      />
      <b-card-text class="mt-3">
        <p class="small">{{ product.title | truncate }}</p>
        <p class="text-muted mt-2 mb-0">Price</p>
        <h4>${{ product.price }}</h4>
      </b-card-text>
      <template #footer>
        <b-icon-heart @click.prevent.stop="addToWishlist" />
        <b-button
          variant="danger"
          size="sm"
          class="ml-3"
          @click.prevent.stop="
            $store.dispatch('product/likeUnlikeProduct', {
              id: product.id,
              isLike:
                typeof product.isLike == undefined ? false : !product.isLike,
            })
          "
          >{{ product.isLike ? "Unlike" : "Like" }}</b-button
        >
      </template>
    </b-card>
  </router-link>
</template>
<script>
import toastMixin from "@/mixins/toastMixins";
export default {
  props: {
    product: Object,
  },
  mixins: [toastMixin],
  methods: {
    addToWishlist: function () {
      this.$store.dispatch("wishlist/addToWishlist", this.product);
      this.showToast("Added to wishlist.", "Wishlist");
    },
  },
  filters: {
    truncate: function (value) {
      if (value.length > 50) {
        value = value.substr(0, 50) + "...";
      }
      return value;
    },
  },
};
</script>
