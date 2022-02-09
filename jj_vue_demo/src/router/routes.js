import dashboard from "../components/Dashboard.vue";
import checkout from "../components/Checkout.vue";
import productDetail from "../components/ProductDetail.vue";
import wishlisht from "../components/Wishlisht.vue";
import login from "../components/Auth/Login.vue";
import signUp from "../components/Auth/SignUp.vue";
import store from "../store";
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  routes: [
    { name: "dashboard", path: "/", component: dashboard },
    {
      name: "productDetail",
      path: "/productDetail",
      component: productDetail,
      params: true,
    },
    { path: "/checkout", component: checkout },
    { path: "/wishlist", component: wishlisht },
    { name: "login", path: "/login", component: login },
    { path: "/signUp", component: signUp },
  ],
});

router.beforeEach((to, from, next) => {
  if (
    to.path != "/signUp" &&
    to.path != "/login" &&
    store.state.isLoggedIn == false
  ) {
    next("/signUp");
  } else {
    next();
  }
  next();
});

export default router;
