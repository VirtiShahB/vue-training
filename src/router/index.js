import Vue from "vue";
import VueRouter from "vue-router";
import Product from "../views/Product.vue";
import AddtoCart from "../views/AddtoCart.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Product,
  },
  {
    path:"addtocart",
    component:AddtoCart,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
