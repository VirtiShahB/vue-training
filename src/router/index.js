import Vue from "vue";
import VueRouter from "vue-router";
import Product from "../views/Product.vue";
import AddtoCart from "../views/AddtoCart.vue";
import CHECKOUT from "../views/Checkout.vue";
import ProductList from "@/components/ProductList.vue";
import WISHLIST from "@/components/WishList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: ProductList,
    meta: {
      requiresAuth: true,
    },
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!localStorage.getItem("email") && !localStorage.getItem("password")) {
      next({ name: "Login" });
    } else {
      next(); // go to wherever I'm going
    }
  } else {
    next(); // does not require auth, make sure to always call next()!
  }
});

export default router;
