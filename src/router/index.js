import Vue from "vue";
import VueRouter from "vue-router";
import Product from "../views/Product.vue";
import AddtoCart from "../views/AddtoCart.vue";
import CHECKOUT from "../views/Checkout.vue";
import ProductList from "@/components/ProductList.vue";
import WISHLIST from "@/components/WishList.vue";
import Home from "@/views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ProductList",
    component: ProductList,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/productDetails",
    name: "ProductDetails",
    component: Product,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/addtocart",
    name: "AddtoCart",
    component: AddtoCart,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: CHECKOUT,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/goToWishList",
    name: "WishList",
    component: WISHLIST,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/orders",
    name: "Orders",
    component: () => import("../components/Orders.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/Login.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../components/Signup.vue"),
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () => import("../components/ForgotPassword.vue"),
  },
  {
    path: "/thankYou",
    name: "Thank You",
    component: () => import("../components/ThankYou.vue"),
  },

];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "active",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["/login", "/signup"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");
  if (authRequired && !loggedIn) {
    return next("/login");
  }
  next();
});

export default router;
