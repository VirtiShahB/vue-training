import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductList from '../views/ProductList.vue'
import WishlistProducts from '../views/WishlistProducts.vue'
import Home from '../views/Home.vue'
import Checkout from '../views/Checkout.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ProductList',
    component: ProductList
  },
  {
    path: '/wishlist/products',
    name: 'WishlistProducts',
    component: WishlistProducts
  },
  {
    path: '/product/:id',
    name: 'Home',
    component: Home
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["Login", "Register"];
  const authRequired = !publicPages.includes(to.name);
  const login = true;

  if (authRequired && !login) {
    return next("/login");
  }

  if (to.name == "Login" && login) {
    return next("/");
  }

  if (to.name == "Register" && login) {
    return next("/");
  }

  next();
});

export default router
