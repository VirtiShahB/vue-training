import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Product from "../views/Product/Product.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    meta: {
      requiresAuth: false,
    },
    component: Login,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/",
    component: Home,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "",
        name: "product",
        component: Product,
      },
      {
        path: "products/:id",
        name: "ProductDetail",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/Product/ProductShow.vue"
          ),
      },
      {
        path: "checkout",
        name: "Checkout",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Checkout.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  let user = localStorage.getItem("user");
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (user) {
      next();
    } else {
      next({
        path: "/login",
      });
    }
  } else {
    if (user) {
      next({
        path: from.path,
      });
    } else {
      next();
    }
  }
});

export default router;
