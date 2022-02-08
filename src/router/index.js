import Vue from "vue";
import Router from "vue-router";
import Dashboard from "../components/Dashboard.vue";
import ItemDetails from "../components/ItemDetails.vue";
import Checkout from "../components/Checkout.vue";
import WishList from "../components/WishList.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
// import store from "@/store";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    props: true,
    // beforeEnter: guardMyroute,
  },
  {
    path: "/details",
    name: "details",
    component: ItemDetails,
    props: true,
   /*  beforeEnter: (to, from, next) => {
      if (from.name !== "dashboard") {
        next({
          path: "/dashboard",
          replace: true,
        });
      } else {
        next();
      }
    }, */
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
];

const router = new Router({
  mode: "history",
  routes,
});

export default router;
// function guardMyroute(to, from, next) {
//   //Check whether loggedIn user is
//   var isLoggedInUser = false;
//   isLoggedInUser = store.state.loggedInUser.email=='ripal.darji@bacancy.com' ? true : false;
//   if (isLoggedInUser) {
//     next();
//   } else {
//     next("/");
//   }
// }

// export default new Router({
//   routes: [
//     {
//       path: "/",
//       name: "login",
//       component: Login,
//     },
//     {
//       path: "/register",
//       name: "register",
//       component: Register,
//     },
//     {
//       path: "/dashboard",
//       name: "dashboard",
//       component: Dashboard,
//       props: true,
//       // beforeEnter: guardMyroute,
//     },
//     {
//       path: "/details",
//       name: "details",
//       component: ItemDetails,
//       props: true,
//       beforeEnter: (to, from, next) => {
//         if (from.name !== "dashboard") {
//           next({
//             path: "/dashboard",
//             replace: true,
//           });
//         } else {
//           next();
//         }
//       },
//     },
//     {
//       path: "/checkout",
//       name: "checkout",
//       component: Checkout,
//     },
//     {
//       path: "/wishlist",
//       name: "wishlist",
//       component: WishList,
//     },
//   ],
// });

// router.beforeEach(() => {
//   console.log(store.state.loggedInUser);
// });

// export default router
