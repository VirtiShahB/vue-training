import Vue from 'vue'
import VueRouter from 'vue-router'
import Checkout from '@/components/Checkout.vue'
import Login from '@/components/Login.vue'
import ProductDetail from '@/components/ProductDetail.vue'
import ProductList from '@/components/ProductList.vue'
import Signup from '@/components/Signup.vue'
import WishList from '@/components/WishList.vue'

Vue.use(VueRouter)

const routes = [
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
    meta: {title: 'Login'}
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
