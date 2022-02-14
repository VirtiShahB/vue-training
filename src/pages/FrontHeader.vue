<template>
  <div>
    <nav class="navbar navbar-dark bg-muted">
      <router-link :to="'/admin'" class="navbar-brand">
        <img src="img/vue-logo.png" width="35" height="35" alt="Logo">
      </router-link>
       
      <span>
        <router-link v-if="!user" to="/sign-up"> Sign up</router-link>
        <router-link v-if="!user" to="/login"> Login </router-link>
        <router-link v-if="user" to="/admin"> {{user.firstName}} </router-link>
        <a  v-if="user" href="" @click.prevent="logout(user.type)"> Logout </a>
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
    import UserActivity from '../mixins/UserActivity'
    export default {
      name: 'FrontHeader',
      mixins: [UserActivity],
      data() {
        return {
          cart    : [],
          wishList: [],
        };
      },
      computed: {
        totalItem : function() {
          let totalQuantity = 0;
          this.cart.forEach((item, i) => {
            totalQuantity =  parseFloat(totalQuantity) + parseFloat(item.quantity)
          });
          return totalQuantity;
          
        },
      },
      mounted() {
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