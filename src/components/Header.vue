<template>
  <div class="container-flex">
    <nav class="navbar navbar-light">
      <div class="dropdown d-xl-none d-lg-none mr-auto">
        <div class="dropdown-menu hb" aria-labelledby="navd"></div>
      </div>
      <!--Logo-->
      <a class="navbar-brand py-0 pl-5">
        <img src="@/assets/fi-logo.svg" width="50" height="50" />
      </a>
      <!--Header navigation-->
      <span class="navbar-item bc d-none d-xl-block d-lg-block py-0">
        <router-link class="px-5" to="/">Products</router-link>
        <router-link class="px-5" to="/checkout">Checkout</router-link>
        <router-link class="px-5" to="/wishlist">Wishlist</router-link>
        <a
          v-if="this.$store.state.loginUser == true"
          @click.prevent="logout()"
          class="px-5"
          >Log out</a
        >
        <router-link v-else class="px-5" :to="routeUrl">{{
          routeName
        }}</router-link>
      </span>

      <div class="bag">
        <img class="pb-1" src="@/assets/cart.svg" />
        <span class="mb-3" v-if="this.bagItemscount > 0">{{
          bagItemscount
        }}</span>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      routeUrl: "/signin",
      routeName: "SignIn",
    };
  },
  watch: {
    $route(to, from) {
      from;
      if (to.name == "SignIn") {
        this.routeUrl = "/signup";
        this.routeName = "SignUp";
      } else {
        this.routeUrl = "/signin";
        this.routeName = "SignIn";
      }
    },
  },
  computed: {
    bagItemscount() {
      return this.$store.getters.itemsNumber;
    },
  },
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push({ path: "/signin" });
    },
  },
  mounted() {
    if (this.$route.name == "SignIn") {
      this.routeUrl = "/signup";
      this.routeName = "SignUp";
    } else {
      this.routeUrl = "/signin";
      this.routeName = "SignIn";
    }
  },
};
</script>

<style>
nav {
  z-index: 100;
}
.navbar {
  border-bottom: 1px solid #dcdcdc;
  background-color: #f8f8f8;
}

.close {
  position: relative;
  bottom: 20px;
  left: 10px;
  font-size: 31px;
  color: #000;
}
.navbar-item.bc a {
  font-size: 17px;
  text-decoration: none;
  color: black;
}

.navbar-item.bc a:hover,
.navbar-item.bc a:active {
  color: #ffd700;
}
.btn-sm {
  border-radius: 0;
}

.search {
  outline: none;
  border: 1px #f8f8f8;
  background: #ededed url("../assets/search.png") no-repeat 5px center;
  padding: 5px 8px 0px 26px;
  width: 10px;
  -webkit-border-radius: 10em;
  -moz-border-radius: 10em;
  border-radius: 10em;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
  margin-right: 10px;
}

.search:focus {
  width: 160px;
  border: solid 1px #ccc;
  background-color: #fff;
  border-color: #98ccfd;
  -webkit-box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
  -moz-box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
  box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
  backface-visibility: hidden;
  perspective: 1000;
}

form .btn-xl.btn-success.mt-3 {
  position: relative;
  -webkit-transition-duration: 100ms;
  transition-duration: 100ms;
  width: 100%;
  height: 50px;
  font-size: 20px;
  outline: none;
  cursor: pointer;
  box-shadow: 0 26px 38px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.bag span {
  background-color: #6394f8;
  border-radius: 10px;
  color: white;
  position: absolute;
  font-size: 15px;
  line-height: 1;
  padding: 2px 3px 3px 3px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  margin-left: -9px;
  bottom: 1rem;
}

.bag img {
  cursor: pointer;
  width: 30px;
  height: auto;
}

.user {
  margin-right: 20px;
  padding-top: 10px;
}

.bag {
  margin-right: 0px;
  padding-top: 10px;
}
.user:hover {
  text-decoration: underline;
}
</style>
