import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

const Login = () => import('@/views/auth/Login.vue')
const Register = () => import('@/views/auth/Register.vue')
const Dashboard = () => import('@/views/products/ProductsList.vue')
const ProductDetails = () => import('@/views/products/ProductDetail.vue')
const Checkout = () => import('@/views/products/Checkout.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {
      requiredBeforeLoginAccess: true,
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      requiredBeforeLoginAccess: true,
    },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuthLogin: true,
    },
  },
  {
    path: '/product/:id',
    name: 'ProductDetails',
    component: ProductDetails,
    meta: {
      requiresAuthLogin: true,
    },
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,
    meta: {
      requiresAuthLogin: true,
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  let roles = localStorage.getItem('roles')
  let isLoggedIn = store.state.isLogin
  if (roles != null) {
    roles = roles.split(',')
  }
  if (to.matched.some((record) => record.meta.requiresAuthLogin)) {
    if (isLoggedIn) {
      next()
    } else {
      next({
        path: '/',
        params: { nextUrl: to.fullPath },
      })
    }
  }
  if (to.matched.some((record) => record.meta.requiredBeforeLoginAccess)) {
    if (!isLoggedIn) {
      next()
    } else {
      next({
        path: '/dashboard',
        params: { nextUrl: to.fullPath },
      })
    }
  } else if (to.matched.some((record) => record.meta.requiresAdmin)) {
    if (roles != null && roles.indexOf('admin') >= 0) {
      next()
    } else {
      next({
        path: '/',
        params: { nextUrl: to.fullPath },
      })
    }
  } else if (to.matched.some((record) => record.meta.requiresUser)) {
    if (roles != null && roles.indexOf('user') >= 0) {
      next()
    } else {
      next({
        path: '/',
        params: { nextUrl: to.fullPath },
      })
    }
  } else {
    next()
  }
})

export default router
