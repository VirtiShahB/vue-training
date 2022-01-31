<template>
  <div>
    <b-navbar class="p-3" toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand>
        <router-link :to="{ name : 'home' }">
        <img
          width="50px"
          src="https://logo.clearbit.com/ecommerceceo.com"
          alt="Kitten"
        />
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link class="nav-link" active-class="active" :to="{ name: 'home'}"
              >Home</router-link
            >
          </b-nav-item>

          <b-nav-item>
            <router-link active-class="active" class="nav-link" :to="{ name: 'sample.product'}"
              >Sample Product</router-link
            >
          </b-nav-item>

          <b-nav-item>
            <router-link class="nav-link" active-class="active" :to="{ name: 'checkout'}"
              >Checkout</router-link
            >
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <router-link class="nav-link" active-class="active" :to="{ name: 'wishlist'}"
              >My Wishlist ({{
                wishList != null && wishList.length > 0 ? wishList.length : 0
              }})</router-link
            >
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <br />

    <div class="container">
      <b-breadcrumb>Home / <slot name="breadcrumbItems"></slot> </b-breadcrumb>
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
import { bus } from "@/eventBus";

export default {
  data() {
    return {
      wishList: [],
    };
  },
  methods: {
    fetchWishlist() {
      this.wishList = JSON.parse(localStorage.getItem("wishList"));
    }
  },
  created() {

    bus.$on("wishList", () => {
      this.fetchWishlist();
    });

    this.fetchWishlist();

  },
};
</script>
