<template>
  <div>
    <b-navbar type="dark" variant="info" v-if="already_login">
      <div class="container">
        <b-navbar-nav>
          <b-nav-item href="#"
            ><router-link to="/dashboard">Products</router-link></b-nav-item
          >
          <b-nav-item href="#"
            ><router-link to="/favourite-products"
              >Favourite Products</router-link
            ></b-nav-item
          >
          <b-nav-item href="#"
            ><router-link to="/recommanded-products"
              >Recommanded Products</router-link
            ></b-nav-item
          >
          <b-nav-item href="#"
            ><router-link to="/cart"
              >Cart
              <span class="badge bg-warning m-1" v-if="totalCartItem > 0">
                {{ totalCartItem ? totalCartItem : "" }}
              </span></router-link
            ></b-nav-item
          >
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template #button-content>
              <em>{{userAccount}}</em>
            </template>
            <b-dropdown-item href="#" @click="signOut"
              >Sign Out</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </div>
    </b-navbar>
    <router-view />
  </div>
</template>
<script>
import mixinData from "@/mixins/commonMixins"; 
export default {
  name: "app",
  mixins:[mixinData],
  data() {
    return {
      isCartProduct: false,
      cartProducts: null,
      already_login: false,
      userAccount: null,
    };
  },
  mounted() {
    this.cartProducts = JSON.parse(localStorage.getItem("product-cart")) || [];

    var localIsLogin = JSON.parse(localStorage.getItem("is_login"));
			if (localIsLogin == true) {
				this.already_login = true;
			}else{
				this.already_login = false;
			}
    this.userAccount = JSON.parse(localStorage.getItem("loginUser"));

  },
  computed: {
    totalCartItem() {
      var totalCartItem = 0;
      if (this.cartProducts.length > 0) {
        this.cartProducts.map((product) => {
          totalCartItem += product.qty;
        });
      }
      return totalCartItem;
    }
  }
};
</script>
