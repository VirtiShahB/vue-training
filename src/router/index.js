import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("@/views/Checkout.vue"),
  },
  {
    path: "/wishlist",
    name: "wishlist",
    component: () => import("@/views/Wishlist.vue"),
  },
  {
    path: "/product/:id/:name",
    name: "view.product",
    component: () => import("@/views/Product.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/Register.vue"),
  },
  {
    path: "/orders",
    name: "my.orders",
    component: () => import("@/views/Orders.vue"),
  },
  {
    path: "*",
    name: "404",
    component: () => import("@/views/404.vue"),
  },
];

const router = new VueRouter({
  linkActiveClass: "is-active",
  mode: "history",
  routes,
});

export default router;
