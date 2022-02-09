<template>
  <div>
    <b-navbar class="p-3" toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand>
        <router-link :to="{ name: 'home' }">
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
            <router-link
              class="nav-link"
              active-class="active"
              :to="{ name: 'home' }"
              >Home
            </router-link>
          </b-nav-item>

          <b-nav-item>
            <router-link
              class="nav-link"
              active-class="active"
              :to="{ name: 'my.orders' }"
              >My Orders</router-link
            >
          </b-nav-item>

          <b-nav-item>
            <router-link
              class="nav-link"
              active-class="active"
              :to="{ name: 'checkout' }"
              >Checkout</router-link
            >
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item v-if="!loggedInVuex">
            <router-link
              class="nav-link"
              active-class="active"
              :to="{ name: 'login' }"
              >Login</router-link
            >
          </b-nav-item>

          <b-nav-item v-if="!loggedInVuex">
            <router-link
              class="nav-link"
              active-class="active"
              :to="{ name: 'register' }"
              >Register</router-link
            >
          </b-nav-item>
          <b-nav-item v-if="loggedInVuex">
            <router-link
              class="nav-link"
              active-class="active"
              :to="{ name: 'wishlist' }"
              >My Wishlist ({{
                wishList != null && wishList.length > 0 ? wishList.length : 0
              }})</router-link
            >
          </b-nav-item>

          <b-nav-item v-if="loggedInVuex">
            <b-nav-item-dropdown right>
              <template #button-content>
                Hey {{ fetchLoginUser.name }} !
              </template>
              <b-dropdown-item @click.prevent="logout">
                Sign Out
              </b-dropdown-item>
            </b-nav-item-dropdown>
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
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      wishList: [],
    };
  },
  computed: mapGetters(["loggedInVuex", "fetchLoginUser"]),
  methods: {
    fetchWishlist() {
      this.wishList = JSON.parse(localStorage.getItem("wishList"));
      if (this.wishList != null && this.wishList.length > 0) {
        this.wishList = this.wishList.filter(
          (w) => w.userid == this.fetchLoginUser.id
        );
      }
    },
    logout() {
      localStorage.removeItem("loggedInUser");
      this.$store.commit("setLoggedInStatus", false);
      this.$router.push({ path: "/login", query: { logout: true } });
    },
  },
  created() {
    bus.$on("wishList", () => {
      this.fetchWishlist();
    });

    if (this.loggedInVuex) {
      this.fetchWishlist();
    }
  },
  mounted() {
    if (Object.keys(this.$route.query).length !== 0) {
      setTimeout(() => {
        this.$router
          .replace({
            query: "",
          })
          .catch(() => {});
      }, 1500);
    }
  },
};
</script>
