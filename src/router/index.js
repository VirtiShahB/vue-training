import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductList from '../views/ProductList.vue'
import WishlistProducts from '../views/WishlistProducts.vue'
import Home from '../views/Home.vue'
import Checkout from '../views/Checkout.vue'

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../components/Checkout.vue')
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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../components/Checkout.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
