<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <div class="container">
      <b-navbar-brand href="/">Dashboard</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item href="/signup" v-if="!user">Signup</b-nav-item>
            <b-nav-item href="/signin" v-if="!user">Signin</b-nav-item>
            <b-nav-item href="" @click.prevent="signoutUser" v-if="user"
              >Signout</b-nav-item
            >
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      user: "",
    };
  },
  mounted() {
    if (localStorage.activeUser) {
      let activeUser = JSON.parse(localStorage.activeUser);
      this.user = activeUser;
    }
  },
  methods: {
    signoutUser() {
      localStorage.removeItem("activeUser");
      this.$router.push("/signin");
      window.location.reload();
    },
  },
};
</script>

<style></style>
