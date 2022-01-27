import DashboardLayout from '../layout/DashboardLayout.vue'
import NotFound from '../pages/NotFoundPage.vue'

import Overview from 'src/pages/Overview.vue'
import Products from 'src/pages/Products.vue'
import ProductDetails from 'src/pages/ProductDetails.vue'
import Checkout from 'src/pages/Checkout.vue'

const routes = [
  { 
    path: '/products', 
    component: Products
  },
  { 
    path: '/product-details', 
    component: ProductDetails
  },
  { 
    path: '/checkout', 
    component: Checkout
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
    ]
  }
]


export default routes
