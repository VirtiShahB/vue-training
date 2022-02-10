<template>
  <div>
    <nav class="navbar navbar-dark bg-muted">
      <router-link :to="'/admin'" class="navbar-brand">
        <img src="img/vue-logo.png" width="35" height="35" alt="Logo">
      </router-link>
        <ul class="nav justify-content-center nav nav-pills text-capitalize">
          <li class="nav-item" v-if="!user">
            <router-link class="nav-link" to="/sign-up">Register</router-link>
          </li>
          <li class="nav-item" v-if="!user">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item" v-if="user">
            <a class="nav-link btn btn-outline-success my-2 my-sm-0" href="" @click.prevent="logout">Logout</a>
          </li>
          <li class="nav-item" v-if="user">
            <router-link class="nav-link" to="/admin">{{user.firstName}}</router-link>
          </li>
        </ul>
      <span> 
        <router-link :to="'/checkout'">
          <i class="nc-icon nc-cart-simple"></i>
          <b> {{totalItem}} </b>
        </router-link>
        <router-link :to="'/wishlist'">
          <i class="nc-icon nc-favourite-28 mt-2 mb-2 ml-1"/>
          <b> {{wishList.length}} </b>
        </router-link>
      </span>  
    </nav>
  </div>
</template>
<script>
    export default {
      data() {
        return {
          user: "",
          cart: [],
          wishList: [],
        };
      },
      computed: {
        totalItem() {
          let totalQuantity = 0;
          this.cart.forEach((item, i) => {
            totalQuantity =  parseFloat(totalQuantity) + parseFloat(item.quantity)
          });
          return totalQuantity;
        }
      },
      mounted() {
      if (localStorage.activeUser) {
        let activeUser = localStorage.activeUser;
        this.user = JSON.parse(activeUser);
      }
      if (localStorage.getItem("cart")) {
      this.cart = JSON.parse(localStorage.getItem("cart"));
      }
      if (localStorage.getItem("wishList")) {
        this.wishList = JSON.parse(localStorage.getItem("wishList"));
      }
    },
  }
</script>

<style scoped>
  .headerImg {
    width : 50px;
    height: 20px;
  }
</style>