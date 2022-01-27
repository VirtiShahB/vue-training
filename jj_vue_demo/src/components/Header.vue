<template>
  <div>
    <nav class="navbar navbar-light bg-danger bg-gradient p-3">
      <router-link to="/">
      <h3>
        <b>
          {{ title }}
        </b>
      </h3>
      </router-link>
      <div class="form-inline my-2 my-lg-0">
        <router-link to="/checkout">
          <b-icon-cart scale="2"></b-icon-cart>
          <span class="total-quantity">{{ cart }}</span>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Products",
      cart: 0,
    };
  },
  mounted() {
    this.$root.$on("cartcount", (quantity) => {
      this.cart += quantity;
    });
  },
};
</script>

<style scoped>
.total-quantity {
  align-items: center;
  background: lightblue;
  border-radius: 50%;
  display: flex;
  font-weight: bold;
  height: 2rem;
  justify-content: center;
  padding: 0.5rem;
  position: absolute;
  right: 1px;
  top: 3px;
  width: 2rem;
}

.cart-dropdown {
  background: white;
  border: 1px solid lightgray;
  border-radius: 10px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  color: #333;
  font-size: 1.3rem;
  overflow: auto;
  padding: 0 1rem;
  position: absolute;
  right: 0;
  width: 12rem;
  z-index: 1;
}
.cart-dropdown .cart-dropdown__list {
  list-style: none;
}
.cart-dropdown .cart-dropdown__list li {
  margin: 1rem 0;
}
</style>
