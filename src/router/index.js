import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Checkout from '@/components/Checkout'
import ItemDetail from '@/components/Products/ItemDetail'
import WishListItems from '@/components/Products/WishListItems'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dashboard
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/product/:productId',
      name: 'ItemDetail',
      component: ItemDetail
    },
    {
      path: '/wishlist',
      name: 'WishList',
      component: WishListItems
    }
  ]
})
