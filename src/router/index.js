import Vue from "vue";
import VueRouter from "vue-router";
import ProductDetails from "../components/ProductDetails.vue";
import CheckOut from "../components/CheckOut.vue";
import Products from "../components/Products.vue";
import Signin from "../components/Signin.vue";
import Signup from "../components/Signup.vue";
import Dashboard from "../components/Dashboard.vue";

Vue.use(VueRouter);

function guest(to, from, next) {
  if (localStorage.activeUser) {
    next({ name: "" });
  } else next();
}

function guard(to, from, next) {
  if (localStorage.activeUser) {
    next();
  } else next({ name: "Login" });
}

const routes = [
  {
    path: "",
    name: "",
    component: Dashboard,
    beforeEnter: guest,
  },
  {
    path: "/products",
    name: "products",
    component: Products,
    beforeEnter: guard,
  },
  {
    path: "/signin",
    name: "signin",
    component: Signin,
    beforeEnter: guest,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
    beforeEnter: guest,
  },
  {
    path: "/product-details/:prod_id",
    name: "product-details",
    component: ProductDetails,
    beforeEnter: guard,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: CheckOut,
    beforeEnter: guard,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
