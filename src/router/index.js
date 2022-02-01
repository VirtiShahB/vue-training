import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Checkout from '@/components/Checkout'
import ItemDetail from '@/components/Products/ItemDetail'
import WishListItems from '@/components/Products/WishListItems'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
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
