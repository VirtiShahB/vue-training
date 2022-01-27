import Vue from "vue";
import Router from "vue-router";
import Dashboard from "../components/Dashboard.vue";
import ItemDetails from "../components/ItemDetails.vue";
import Checkout from "../components/Checkout.vue";
import WishList from "../components/WishList.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/details",
      name: "details",
      component: ItemDetails,
      props: true,
      beforeEnter: (to, from, next) => {
        if (from.name !== "dashboard") {
          next({
            path: "/",
            replace: true,
          });
        } else {
          next();
        }
      },
    },
    {
      path: "/checkout",
      name: "checkout",
      component: Checkout,
    },
    {
      path: "/wishlist",
      name: "wishlist",
      component: WishList,
    },
  ],
});
