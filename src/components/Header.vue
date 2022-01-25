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
          <b-nav-item-dropdown text="Profile" right>
            <b-dropdown-item href="#">Settings</b-dropdown-item>
            <b-dropdown-item href="#">Logout</b-dropdown-item>
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