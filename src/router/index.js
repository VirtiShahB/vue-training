import Vue from "vue";
import VueRouter from "vue-router";
import store from '../store';
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
  }
];

const router = new VueRouter({
  linkActiveClass: "is-active",
  mode: "history",
  routes,
});


router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["login", "register", "404","login_new"];
  const authRequired = !publicPages.includes(to.name);


  if (authRequired && !store.state.auth.loggedInVuex) {
    return next("/login");
  }

  if (to.name == "login" && store.state.auth.loggedInVuex) {
    return next("/");
  }

  if (to.name == "register" && store.state.auth.loggedInVuex) {
    return next("/");
  }

  next();
});


export default router;
