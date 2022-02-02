import Vue from "vue";
import VueRouter from "vue-router";
import ProductDetails from "../components/ProductDetails.vue";
import CheckOut from "../components/CheckOut.vue";
import Products from "../components/Products.vue";
import Signin from "../components/Signin.vue";
import Signup from "../components/Signup.vue";
import Dashboard from "../components/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/products",
    name: "products",
    component: Products,
    meta: { requiresAuth: true },
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
];

const router = new VueRouter({
  mode: "history",
  linkActiveClass: "is-active",
  base: process.env.BASE_URL,
  routes,
});

export default router;
