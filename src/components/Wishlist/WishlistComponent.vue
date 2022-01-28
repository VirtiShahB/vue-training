<template>
  <b-list-group>
    <b-list-group-item v-for="(item, ind) in wishlist" :key="ind">
      <div class="d-flex flex-row align-items-center justify-content-between">
        <p>{{ item.title }}</p>
        <b-button size="sm" variant="danger"
          ><b-icon-trash></b-icon-trash
        ></b-button>
      </div>
    </b-list-group-item>
  </b-list-group>
</template>
<script>
export default {
  created() {
    this.$store.dispatch("wishlist/getWishlist");
  },
  computed: {
    wishlist: function () {
      return this.$store.state.wishlist.wishlist;
    },
  },
};
</script>
