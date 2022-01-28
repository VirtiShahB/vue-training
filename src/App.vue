<template>
  <div>
    <b-navbar type="dark" variant="info">
      <div class="container">
        <b-navbar-nav>
          <b-nav-item href="#"
            ><router-link to="/">Products</router-link></b-nav-item
          >
          <b-nav-item href="#"
            ><router-link to="/favourite-products">Favourite Products</router-link></b-nav-item
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
      </div>
    </b-navbar>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      isCartProduct: false,
      cartProducts: null,
    };
  },
  created() {
    this.cartProducts = JSON.parse(localStorage.getItem("product-cart")) || [];
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
    },
  },
};
</script>
