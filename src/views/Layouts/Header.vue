<template>
  <div>
    <b-navbar type="dark" variant="info">
      <div class="container">
        <b-navbar variant="faded" type="light">
          <b-navbar-brand href="#">
            <img
              src="https://placekitten.com/g/30/30"
              class="d-inline-block align-top"
              alt="Kitten"
            />
            Ecom. Site
          </b-navbar-brand>
        </b-navbar>
        <b-navbar-nav v-if="this.$store.state.isLogin">
          <b-nav-item href="#"
            ><router-link to="/dashboard">Products</router-link></b-nav-item
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
          <b-nav-item-dropdown text="Profile" right>
            <b-dropdown-item href="#">Change Password</b-dropdown-item>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#" @click="logout()">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav v-else>
          <b-nav-item href="#"
            ><router-link to="/register">Sign up</router-link></b-nav-item
          ><b-nav-item href="#"
            ><router-link to="/">Login</router-link></b-nav-item
          >
        </b-navbar-nav>
      </div>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "Header",
  methods: {
    logout() {
      this.$api.auth.logout();
    },
  },
};
</script>
<style scoped>
a {
  color: whitesmoke; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
}
</style>