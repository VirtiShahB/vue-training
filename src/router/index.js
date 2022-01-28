import Vue from 'vue'
import VueRouter from 'vue-router'

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
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    // meta: {
    //   requiresAdmin: true,
    // },
  },
  {
    path: '/product/:id',
    name: 'ProductDetails',
    component: ProductDetails,
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,
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
  if (roles != null) {
    roles = roles.split(',')
  }
  console.log(to.matched.some((record) => record.meta.requiresAdmin))
  if (to.matched.some((record) => record.meta.requiresAdmin)) {
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
