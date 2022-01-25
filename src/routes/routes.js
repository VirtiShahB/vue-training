import DashboardLayout from '../layout/DashboardLayout.vue'
import NotFound from '../pages/NotFoundPage.vue'

import Overview from 'src/pages/Overview.vue'
import ProductDetails from 'src/pages/ProductDetails.vue'

const routes = [
  { 
    path: '/product-details', 
    component: ProductDetails
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
  },
  { path: '*', component: NotFound }
]


export default routes
