import DashboardLayout from '../layout/DashboardLayout.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'
import Login    from 'src/pages/Login.vue'
import SignUp   from 'src/pages/SignUp.vue'
import Overview from 'src/pages/Overview.vue'
import Products from 'src/pages/Products.vue'
import Wishlist from 'src/pages/Wishlist.vue'
import ProductDetails from 'src/pages/ProductDetails.vue'
import Checkout from 'src/pages/Checkout.vue'

const routes = [
  {
    path: '/login',
    component: Login,
    name: 'login',
    beforeEnter: guest
  },
  { 
    path: '/',
    redirect: {
      name: 'login' 
    } 
  },
  {
    path: '/sign-up',
    component: SignUp,
    name: 'sing-up',
    beforeEnter: guest
  },
  {
    path: '/products',
    component: Products
  },
  {
    path: '/product-details/:id',
    component: ProductDetails,
    name: 'product-details'
  },
  {
    path: '/checkout',
    component: Checkout
  },
  ,
  {
    path: '/wishlist',
    component: Wishlist
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    name: 'admin',
    beforeEnter: guard,
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview,
      },
    ]
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFoundPage,
  },
]
function guest(to, from, next) {
  if (localStorage.activeUser) {
    next({ name: "admin" });
  } else next();
}

function guard(to, from, next) {
  if (localStorage.activeUser) {
    next();
  } 
  else next({ name: 'login' });
}

export default routes
