<template>
  <div id="app" class="container">
    <nav
      class="navbar navbar-expand-lg navbar-light"
      style="background-color: #e3f2fd"
    >
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li v-if="isAuthenticated" class="float-left">
            <router-link class="nav-link" to="/home"> Home </router-link>
          </li>
          <li class="float-right" v-else>
            <router-link class="nav-link" to="/login">
              <b-button variant="primary" class="mr-2">Sign in</b-button>
            </router-link>
          </li>
          <li class="float-right" v-if="isAuthenticated">
            <router-link class="nav-link" to="/cart">
              <b-icon-cart></b-icon-cart>
            </router-link>
          </li>
          <li class="float-right" v-if="isAuthenticated">
            <router-link class="nav-link" to="/wishlist">
              <b-icon-heart></b-icon-heart>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="text-center" style="margin-top: 20px">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    isAuthenticated() {
      var isAuthenticated = false;
      if (localStorage.getItem("LoggedUser")) {
        isAuthenticated = true;
      } else {
        isAuthenticated = false;
      }
      return isAuthenticated;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.item_price {
  color: #b12704 !important;
  font-size: 25px;
}
.red {
  color: #b12704;
}
li {
  float: right;
}
ul {
  display: block !important;
  width: 100%;
}
.book_title {
  color: #007185;
}
.book_author {
  font-size: 12px;
}
.book_view,
.book_view:hover {
  text-decoration: none;
  color: #007185;
}
a {
  text-decoration: none !important;
}
.collapse:not(.show) {
  display: block !important;
}
.collapse li {
  margin: 5px;
}
</style>
