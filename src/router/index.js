import Vue from "vue";
import VueRouter from "vue-router";
import ProductDetails from "../components/ProductDetails.vue";
import CheckOut from "../components/CheckOut.vue";
import Products from "../components/Products.vue";
import Signin from "../views/Signin.vue";
import Signup from "../views/Signup.vue";
import Dashboard from "../views/Dashboard.vue";
import Recommended from "../components/Recommended.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    alias: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/signin",
    name: "signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/products",
    name: "products",
    component: Products,
    meta: { requiresAuth: true },
  },
  {
    path: "/product-details/:prod_id",
    name: "product-details",
    component: ProductDetails,
    meta: { requiresAuth: true },
  },
  {
    path: "/checkout",
    name: "checkout",
    component: CheckOut,
    meta: { requiresAuth: true },
  },
  {
    path: "/recommended",
    name: "recommended",
    component: Recommended,
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  mode: "history",
  linkActiveClass: "is-active",
  base: process.env.BASE_URL,
  routes,
});

export default router;
