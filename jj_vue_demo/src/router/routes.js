import dashboard from "../components/Dashboard/Dashboard.vue";
import checkout from "../components/Checkout/Checkout.vue";
import productDetail from "../components/Dashboard/ProductDetail.vue";
import wishlisht from "../components/Wishlisht.vue";
import login from "../components/Auth/Login.vue";
import signUp from "../components/Auth/SignUp.vue";

export default [
  { name: "dashboard", path: "/", component: dashboard },
  {
    name: "productDetail",
    path: "/productDetail",
    component: productDetail,
    params: true,
  },
  { path: "/checkout", component: checkout },
  { path: "/wishlist", component: wishlisht },
  { name: "login", path: "/login", component: login },
  { path: "/signUp", component: signUp },
];
