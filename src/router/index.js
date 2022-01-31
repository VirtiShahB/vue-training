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
  },
  {
    path: "/productDetails",
    name: "ProductDetails",
    component: Product,
  },
  {
    path:"/addtocart",
    name:"AddtoCart",
    component:AddtoCart,
  },
  {
    path:"/checkout",
    name:"Checkout",
    component: CHECKOUT,
  },{
    path:"/goToWishList",
    name:"WishList",
    component:WISHLIST,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../components/Signup.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../components/ForgotPassword.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
