<template>
  <div>
    <b-navbar type="dark" variant="secondary">
      <div class="container">
        <b-navbar-nav>
          <b-nav-item href="#"
            ><router-link to="/">Dashboard</router-link></b-nav-item
          >
          <b-nav-item v-if="!this.$store.state.isEmptyCart" href="#"
            ><router-link to="/checkout">Checkout</router-link></b-nav-item
          >
          <b-nav-item-dropdown
            v-if="this.$store.state.wishlist.length"
            text="Wishlist"
            right
          >
            <b-dropdown-item
              v-for="product in this.$store.state.wishlist"
              :key="'wishlist-' + product.id"
              disabled
              href="#"
              >{{ product.title
              }}<span class="badge bg-info m-1">
                ${{ product.price }}
              </span></b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </div>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style scoped>
a {
  color: whitesmoke; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
}
</style>