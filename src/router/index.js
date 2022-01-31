import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/components/Dashboard'
import ProductDetail from '@/components/ProductDetail'
import Cart from '@/components/Cart'
import FavouriteProduct from '@/components/FavouriteProduct'
import Login from '@/components/Login'
import Signup from '@/components/Signup'

Vue.use(VueRouter)

function guardForRoteHandle(to, from, next) {
  //Check whether user is login  
  var localIsLogin = JSON.parse(localStorage.getItem("is_login"));
  if (localIsLogin == true) {
    next();
  } else {
    next("/");
  }
}

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: guardForRoteHandle,
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetail,
    beforeEnter: guardForRoteHandle,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    beforeEnter: guardForRoteHandle,
  },
  {
    path: '/favourite-products',
    name: 'FavouriteProduct',
    component: FavouriteProduct,
    beforeEnter: guardForRoteHandle,
  },
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
export default router
