<template>
  <div id="app">
    <div class="header">
      <div v-if="this.isAuthenticated">
        <router-link to="/dashboard">Dashboard</router-link>
      </div>
      <div class="header-right">
        <router-link to="/">Products</router-link>
        <router-link to="/product/wishlist">Wishlist</router-link>
        <span v-if="this.isAuthenticated">
          <a @click="signOut()">Signout</a>
        </span>
        <span v-else>
          <router-link to="/login">Login</router-link>
          <router-link to="/signup">Signup</router-link>
        </span>
      </div>
      <div class="search-middle">
        <b-form @submit="onSearch">
          <b-input-group class="search-input">
            <b-form-input
              placeholder="Search by product name"
              v-model="form.search"
            />
            <b-input-group-append>
              <b-button size="sm" type="submit"
                >Search <b-icon-search
              /></b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form>
      </div>
    </div>

    <ProductSearch v-bind:searched-items="this.searcheditems" v-if="show" />
  </div>
</template>
<script>
import ProductSearch from "../views/ProductSearch.vue";
export default {
  name: "Header",
  components: { ProductSearch },
  data() {
    return {
      isAuthenticated: false,
      form: {
        search: "",
      },
      searcheditems: [],
      show: false,
    };
  },
  methods: {
    signOut() {
      if (localStorage.getItem("loginnedUser")) {
        this.$bvModal
          .msgBoxConfirm("Are you sure you want to signout?", {
            title: "Please Confirm",
            size: "sm",
            buttonSize: "sm",
            okVariant: "danger",
            okTitle: "YES",
            cancelTitle: "NO",
            footerClass: "p-2",
            hideHeaderClose: false,
            centered: true,
          })
          .then((value) => {
            if (value) {
              localStorage.setItem("loginnedUser", "");
              this.isAuthenticated = false;
              this.$router.push("/login");
            }
          });
      }
    },
    onSearch(event) {
      event.preventDefault();
      const searchString = this.form.search;
      const parsedObject = JSON.parse(localStorage.getItem("items"));
      const searchedItems = parsedObject.filter((params) => {
        if (params.productName == searchString) {
          return true;
        }
      });
      this.searcheditems = searchedItems;
      this.$router
        .push({
          name: "ProductSearch",
          params: { searchedItems: JSON.stringify(this.searcheditems) },
        })
        .catch(() => {
          this.$router.push("/");
        });
    },
  },
  watch: {
    $route() {
      if (
        localStorage.getItem("loginnedUser") !== null &&
        localStorage.getItem("loginnedUser") != ""
      ) {
        this.isAuthenticated = true;
      }
      if (this.$route.name != "ProductSearch") {
        this.form.search = "";
      }
    },
  },
  created() {
    if (
      localStorage.getItem("loginnedUser") !== null &&
      localStorage.getItem("loginnedUser") != ""
    ) {
      this.isAuthenticated = true;
    }
  },
};
</script>
<style>
.header {
  overflow: hidden;
  background-color: #a7bfe2;
  padding: 20px 10px;
  position: inherit;
  top: 0;
  width: 100%;
}

.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
}

.header a.logo {
  font-size: 25px;
  font-weight: bold;
}

.header a:hover {
  background-color: #ddd;
  color: black;
}

.header a.active {
  background-color: dodgerblue;
  color: white;
}

.header-right {
  float: right;
}
.form-inline {
  display: block;
}
@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }

  .header-right {
    float: none;
  }
}
.card.container {
  margin-top: 150px;
}
</style>
