<template>
  <div id="app">
    <Header />
    <router-view :data="cartItem" />
    <NewsLetter />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import NewsLetter from "./components/NewsLetter.vue";

export default {
  name: "App",
  data() {
    return {
      cartItem: [],
    };
  },
  components: {
    Header,
    NewsLetter,
    // AllProduct
    // Product,
    // Checkout,
  },
  mounted() {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Exo+2");
#app {
  background-color: #f8f8f8 !important;
  font-family: "Exo 2", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.img-fluid {
  min-width: 90% !important;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.control.number {
  border: 0.2px solid lightgrey;
  font-size: 19px;
  font-weight: bold;
  height: 35px;
  width: 155px;
  margin-bottom: 30px;
}
.control.number button {
  border: none;
  background: inherit;
  width: 56px;
  height: 35px;
  outline-style: none;
}
.control.number button:active {
  background-color: lightgrey;
}
.control.number h5 {
  margin-left: 13px;
  margin-right: 13px;
}
.add-to-cart-button {
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  width: 155px;
  height: 70px;
  background-color: #2c3539;
  color: #fff;
  font-size: 15px;
  padding: 0px 30px;
  cursor: pointer;
  position: relative;
  top: 0;
  z-index: 10;
  border: none;
  box-shadow: 0 26px 38px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.add-to-cart-button:hover,
.add-to-cart-button:focus {
  background-color: inherit;
  color: black;
}
</style>
