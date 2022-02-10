import Vue from 'vue'
import VueRouter from 'vue-router'
import Checkout from '@/views/Checkout.vue'
import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'
import ProductDetail from '@/views/ProductDetail.vue'
import ProductList from '@/views/ProductList.vue'
import Signup from '@/views/Signup.vue'
import WishList from '@/views/WishList.vue'
import ProductSearch from '@/views/ProductSearch.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: guadMyRoute
  },
  {
    path: '/',
    name:'ProductList',
    component: ProductList,
    meta: {title: 'ProductList'}
  },
  {
    path: '/product/detail/:id',
    name:'ProductDetail',
    component: ProductDetail,
    meta: {title: 'ProductDetail'}
  },
  {
    path: '/product/search',
    name:'ProductSearch',
    component: ProductSearch,
    props: true,
    meta: {title: 'ProductSearch'}
  },
  {
    path: '/checkout',
    name:'Checkout',
    component: Checkout,
    meta: {title: 'Checkout'}
  },
  {
    path: '/product/wishlist',
    name:'WishList',
    component: WishList,
    meta: { title: 'WishList' },
    beforeEnter: guadMyRoute
  },
  {
    path: '/login',
    name:'Login',
    component: Login,
    meta: {title: 'Login'},
  },
  {
    path: '/Signup',
    name:'Signup',
    component: Signup,
    meta: {title: 'Signup'}
  },
]

function guadMyRoute(to, from, next) {
  var isAuthenticated = false;
  if (localStorage.getItem('loginnedUser')) {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }

  if(isAuthenticated) {
      next();
  } else{
      next('/login');
  }
  
}
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
