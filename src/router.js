import Vue from "vue";
import Router from "vue-router";
import Product from "./components/Product.vue";
import Checkout from "./components/Checkout.vue";
import AllProduct from "./components/AllProduct.vue";
import Wishlist from "./components/Wishlist.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/product-info",
      name: "Product",
      component: Product,
    },
    {
      path: "/",
      name: "AllProduct",
      component: AllProduct,
    },
    {
      path: "/checkout",
      name: "checkout",
      component: Checkout,
    },
    {
      path: "/wishlist",
      name: "Wishlist",
      component: Wishlist,
    },
  ],
});
