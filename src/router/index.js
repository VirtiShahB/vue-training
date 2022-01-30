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
    component: ProductList
  },
  {
    path: '/product/detail/:id',
    name:'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/checkout',
    name:'Checkout',
    component: Checkout
  },
  {
    path: '/product/wishlist',
    name:'WishList',
    component: WishList
  },
  {
    path: '/login',
    name:'Login',
    component: Login
  },
  {
    path: '/Signup',
    name:'Signup',
    component: Signup
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
