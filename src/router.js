import Vue from "vue";
import Router from "vue-router";
// import store from "./store.js";
import Product from "./components/Product.vue";
import Checkout from "./components/Checkout.vue";
import AllProduct from "./components/AllProduct.vue";
import Wishlist from "./components/Wishlist.vue";
import SignIn from "./components/SignIn";
import Signup from "./components/Signup";

Vue.use(Router);

const router = new Router({
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
    {
      path: "/signin",
      name: "SignIn",
      component: SignIn,
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup,
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   if (
//     to.path != "/signin" &&
//     to.path != "/signup" &&
//     store.state.loginUser == false
//   ) {
//     next("/signin");
//   } else {
//     next();
//   }
// });

export default router;
