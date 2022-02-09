<template>
  <div id="app">
    <div class="header">
      <span v-if="this.isAuthenticated">
        <router-link to="/dashboard">Dashboard</router-link>
      </span>
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
      <!-- <b-navbar-nav>
        <b-nav-form action="/search">
          <b-input-group>
            <b-form-input size="sm" placeholder="Search" name="query" />
            <b-input-group-append>
              <b-button size="sm" type="submit"
                >Search <b-icon-search
              /></b-button>
            </b-input-group-append>
          </b-input-group>
        </b-nav-form>
      </b-navbar-nav> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
<style scoped>
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
.input-group {
  margin-right: 12%;
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
<script>
export default {
  name: "Header",
  data() {
    return {
      isAuthenticated: false,
    };
  },
  methods: {
    signOut() {
      if (localStorage.getItem("loginnedUser")) {
        localStorage.setItem("loginnedUser", "");
        this.isAuthenticated = false;
        this.$router.push("/login");
      }
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
