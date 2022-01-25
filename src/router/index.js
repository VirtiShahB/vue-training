import Vue from 'vue'
import VueRouter from 'vue-router'
import Checkout from '../components/Checkout.vue'
import ProductDetail from '../components/ProductDetail.vue'
import ProductList from '../components/ProductList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:'ProductList',
    component: ProductList
  },
  {
    path: '/product/detail',
    name:'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/checkout',
    name:'Checkout',
    component: Checkout
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
