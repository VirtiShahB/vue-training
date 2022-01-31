<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Shopify</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/" exact-active-class="active">All Products</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/cart" active-class="active">Cart</b-nav-item>
        <b-nav-item-dropdown
          text="Wishlist"
          template
          menu-class="wishlist"
          right
        >
          <template #button-content>
            Wishlist
            <b-badge pill variant="light" v-show="wishlist.length">{{
              wishlist.length
            }}</b-badge>
          </template>

          <b-list-group flush v-if="wishlist.length">
            <wishlist-component
              v-for="(item, ind) in wishlist"
              :key="ind"
              :product="item"
            ></wishlist-component>
          </b-list-group>
          <p class="mt-3 text-center" v-else>No product found in wishlist.</p>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item button @click="onLogout">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
import WishlistComponent from "@/components/Wishlist/WishlistComponent.vue";
var that;
export default {
  components: { WishlistComponent },
  created() {
    that = this;
    this.$store.dispatch("wishlist/getWishlist");
  },
  computed: {
    wishlist: () => that.$store.state.wishlist.wishlist,
  },
  methods: {
    onLogout() {
      localStorage.removeItem("user");
      this.$router.replace("/login");
    },
  },
};
</script>
<style>
.wishlist {
  width: 300px;
  height: 400px;
  overflow: auto;
  padding: 0px;
}
</style>
