import dashboard from "../components/Dashboard/Dashboard.vue";
import checkout from "../components/Checkout/Checkout.vue";
import productDetail from "../components/Dashboard/ProductDetail.vue";
import wishlisht from "../components/Wishlisht.vue";

export default [
  { path: "/", component: dashboard },
  {
    name: "productDetail",
    path: "/productDetail",
    component: productDetail,
    params: true,
  },
  { path: "/checkout", component: checkout },
  { path: "/wishlist", component: wishlisht },
];
