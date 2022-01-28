import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/components/Dashboard'
import ProductDetail from '@/components/ProductDetail'
import Cart from '@/components/Cart'
import FavouriteProduct from '@/components/FavouriteProduct'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetail,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/favourite-products',
    name: 'FavouriteProduct',
    component: FavouriteProduct
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
export default router
