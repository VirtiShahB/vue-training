<template>
  <span>
    <b-link
      :class="'float-right add-to-wishlist-' + productId"
      @click="likeProduct(productId)"
    >
      <img
        v-if="likeProducts.includes(productId)"
        src="../../assets/icons/hand-thumbs-up-fill.svg"
        class="ml-1"
      />
      <img v-else src="../../assets/icons/hand-thumbs-up.svg" class="ml-1" />
    </b-link>
    <b-link
      :class="'float-right add-to-wishlist-' + productId"
      @click="addToWishlist(productId)"
    >
      <img
        v-if="wishListProducts.includes(productId)"
        src="../../assets/icons/heart-fill.svg"
      />
      <img v-else src="../../assets/icons/heart.svg" />
    </b-link>
  </span>
</template>

<script>
import { helperMixins } from "../../mixins/helperMixins";
import { toastMixins } from "../../mixins/toastMixins";
export default {
  mixins: [toastMixins, helperMixins],
  name: "LikeAndWishListIcons",
  props: {
    productId: Number,
  },
  methods: {
    addToWishlist(productId) {
      this.addToProductInWishlist(productId);
    },
    likeProduct(productId = null) {
      this.setLikeProduct(productId);
    },
  },
  computed: {
    wishListProducts() {
      return this.getWishListProducts();
    },
    likeProducts() {
      return this.chkLikeProduct();
    },
  },
};
</script>

<style>
</style>