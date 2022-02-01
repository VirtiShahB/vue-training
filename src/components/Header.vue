<template>
  <div id="header">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <!-- <b-navbar-brand href="#">NavBar</b-navbar-brand> -->

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <Sidebar />
      <b-collapse id="nav-collapse" is-nav>
        <!-- <b-navbar-nav>
              <b-nav-item href="#">Link</b-nav-item>
              <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav> -->

        <!-- Right aligned nav items -->

        <b-navbar-nav class="ml-auto">
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
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>{{ isLoggedIn() }}</em>
            </template>
            <b-dropdown-item @click="openProfile()" href="#"
              >Profile</b-dropdown-item
            >
            <b-dropdown-item @click="signOut()" href="#"
              >Sign Out</b-dropdown-item
            >
          </b-nav-item-dropdown>

          <b-navbar-nav>
            <b-dropdown
              id="lang-id"
              name="lang"
              v-model="langOptions.selectedOption"
              v-bind:text="langOptions.selectedOption"
              variant="light"
              class="m-md-2"
            >
              <b-dropdown-item
                v-for="option in langOptions.options"
                :key="option.value"
                :value="option.value"
                @click="langOptions.selectedOption = option.value"
              >
                {{ option.text }}
              </b-dropdown-item>
            </b-dropdown>
            <b-nav-item href="#"
              ><b-icon
                @click="openWishlist()"
                icon="heart"
                class="rounded"
                scale="1.25"
              ></b-icon
            ></b-nav-item>
            <b-nav-item href="#">
              <b-icon
                @click="openCart()"
                icon="cart"
                class="rounded"
                scale="1.25"
              ></b-icon>
            </b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
import Sidebar from "./Navbar.vue";

export default {
  name: "Header",
  components: {
    Sidebar,
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
      return this.$store.getters.isLoggedIn.email
        ? this.$store.getters.isLoggedIn.email
        : "User";
    },
    openProfile() {
      console.log("openProfile");
    },
    signOut() {
      console.log("signOut");
    },
    openWishlist() {
      this.$router.push({
        name: "wishlist",
        params: { wishList: this.$store.state.wishList },
      });
    },
    openCart() {
      this.$router.push({
        name: "checkout",
        params: { cart: this.$store.state.cart },
      });
    },
    filterItems() {
      this.$store.dispatch("addSearchParam", this.search);
    },
  },
};
</script>
