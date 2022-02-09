<template>
  <div id="header" v-if="isLoggedInUser">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Vue</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <!-- <Sidebar /> -->
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/dashboard" exact-active-class="active"
            >All Products</b-nav-item
          >
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-form>
              <b-form-input
                v-model="search"
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
              ></b-form-input>
              <b-button
                size="sm"
                class="my-2 my-sm-0"
                type="button"
                @click="filterItems"
                >Search</b-button
              >
            </b-nav-form>
          </b-navbar-nav>
          <b-nav-item-dropdown right>
            <template #button-content>
              <em>{{ isLoggedIn() }}</em>
            </template>
            <b-dropdown-item @click="openCart()">Cart</b-dropdown-item>
            <b-dropdown-item @click="openWishlist()">Wishlist</b-dropdown-item>
            <b-dropdown-item @click="signOut()" href="#"
              >Sign Out</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
import Helper from "../mixins/helper";
// import Sidebar from "./Navbar.vue";

export default {
  name: "Header",
  mixins: [Helper],
  components: {
    // Sidebar,
  },
  computed: {
    isLoggedInUser() {
      return localStorage.getItem("loggedUser") ? true : false;
    },
  },
  data() {
    return {
      search: "",
      langOptions: {
        selectedOption: "EN",
        options: [
          {
            value: "EN",
            text: "EN",
          },
          {
            value: "ES",
            text: "ES",
          },
          {
            value: "RU",
            text: "RU",
          },
        ],
      },
    };
  },
  methods: {
    isLoggedIn() {
      return JSON.parse(localStorage.getItem("loggedUser")).email
        ? JSON.parse(localStorage.getItem("loggedUser")).email
        : "User";
    },
    signOut() {
      localStorage.removeItem("loggedUserWishlist");
      localStorage.removeItem("loggedUserCart");
      localStorage.removeItem("loggedUser");
      localStorage.removeItem("productsData");
      this.$router.replace("/");
    },
    filterItems() {
      this.$store.dispatch("addSearchParam", this.search);
    },
  },
};
</script>
