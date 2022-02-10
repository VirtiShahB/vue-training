<template>
  <nav class="navbar container" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <strong class="is-size-4">Fashionista</strong>
      </a>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbar" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/orders" class="navbar-item" v-if="Orders != ''"
          >My Orders</router-link
        >
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="cart-div" v-if="email && password">
            <a href="javascript:void(0)" @click="GoToWishList"
              ><i class="fa fa-heart"></i
            ></a>
            <span class="cart-num" v-if="WishPro > 0">{{ WishPro }}</span>
          </div>
          <div class="cart-div" v-if="email && password">
            <a href="javascript:void(0)" @click="addToCart()"
              ><i class="fa fa-shopping-cart"></i
            ></a>
            <span class="cart-num" v-if="CartPro > 0">{{ CartPro }}</span>
          </div>
          <div class="buttons">
            <a class="button is-dark">
              <router-link
                class="nav-link pr-3"
                to="/login"
                v-if="!email && !password"
                >Sign in</router-link
              >
              <router-link
                class="nav-link pr-3"
                to="/signup"
                v-if="!email && !password"
                >Sign Up</router-link
              >
              <a href="javascript:void(0)" v-else @click="Logout">Logout</a>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Nav",
  data() {
    return {
      CartPro: 0,
      WishPro: 0,
      Orders: [],
      email: JSON.parse(localStorage.getItem("email"))
        ? JSON.parse(localStorage.getItem("wishProduct"))
        : "",
      password: JSON.parse(localStorage.getItem("password"))
        ? JSON.parse(localStorage.getItem("password"))
        : "",
    };
  },
  methods: {
    Logout() {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      localStorage.removeItem("OrderDetails");
      this.$router.push({ name: "Login" });
    },
    GoToWishList() {
      this.$router.push("/goToWishList");
    },
    addToCart() {
      this.$router.push({
        path: "/addtocart",
      });
    },
  },
  created() {
    if (JSON.parse(localStorage.getItem("wishProduct"))) {
      this.WishPro = JSON.parse(localStorage.getItem("wishProduct")).length;
    }

    if (JSON.parse(localStorage.getItem("cartProduct"))) {
      this.CartPro = JSON.parse(localStorage.getItem("cartProduct")).length;
    }

    if (JSON.parse(localStorage.getItem("OrderDetails")).length > 0) {
      this.Orders = JSON.parse(localStorage.getItem("OrderDetails"));
    }
  },
};
</script>
