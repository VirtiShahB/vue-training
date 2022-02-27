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
        <router-link to="/" class="navbar-item" v-if="IsLogin"
          >Home</router-link
        >
        <router-link
          to="/orders"
          class="navbar-item"
          v-if="Orders != '' && IsLogin"
          >My Orders</router-link
        >
        <router-link
          class="navbar-item"
          to="/login"
          v-if="this.$store.state.loginUser == null"
          >Sign in</router-link
        >
        <router-link
          class="navbar-item"
          to="/signup"
          v-if="this.$store.state.loginUser == null"
          >Sign Up</router-link
        >
        <div class="navbar-item">
          <div class="cart-div" v-if="IsLogin">
            <a href="javascript:void(0)" @click="GoToWishList"
              ><i class="fa fa-heart"></i
            ></a>
            <span class="cart-num" v-if="CountWish > 0">{{ CountWish }}</span>
          </div>
          <div class="cart-div" v-if="IsLogin">
            <a href="javascript:void(0)" @click="addToCart()"
              ><i class="fa fa-shopping-cart"></i
            ></a>
            <span class="cart-num" v-if="CountCart > 0">{{ CountCart }}</span>
          </div>
          <a
            href="javascript:void(0)"
            v-if="IsLogin"
            @click="Logout"
            class="navbar-item"
            >Logout</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import { removeItem } from "@/config/utils";
import { wishlistMixin } from "../../mixins/wishlistMixin.js";
export default {
  name: "Nav",
  mixins: [wishlistMixin],
  data() {
    return {
      CartPro: 0,
      Orders: [],
      email: JSON.parse(localStorage.getItem("email"))
        ? JSON.parse(localStorage.getItem("email"))
        : "",
      password: JSON.parse(localStorage.getItem("password"))
        ? JSON.parse(localStorage.getItem("password"))
        : "",
    };
  },
  computed: {
    IsLogin: {
      get() {
        if (this.$store.state.loginUser) {
          return true;
        } else {
          return false;
        }
      },
    },
    CountWish: {
      get() {
        if (this.$store.state.wishpro) {
          return this.$store.state.wishpro.length;
        } else {
          return 0;
        }
      },
    },
    CountCart: {
      get() {
        if (this.$store.state.cartProduct) {
          return this.$store.state.cartProduct.length;
        } else {
          return 0;
        }
      },
    },
  },
  methods: {
    Logout() {
      removeItem("user");
      this.$store.commit("logOut");
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      localStorage.removeItem("OrderDetails");
      localStorage.removeItem("OrderDetails");
      this.$toasted.show("Logout Successfully", {
        title: "removed !",
        variant: "success",
        toaster: "b-toaster-bottom-center",
        solid: true,
      });
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
    if (JSON.parse(localStorage.getItem("cartProduct"))) {
      this.CartPro = JSON.parse(localStorage.getItem("cartProduct")).length;
    }

    if (this.$store.state.orders) {
      this.Orders = this.$store.state.orders;
    }

    if (this.$store.state.cartProduct) {
      this.cartProduct = this.$store.state.cartProduct;
    }
  },
};
</script>
