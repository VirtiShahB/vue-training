import Vue from 'vue'
import Products from './products'
import Auth from './auth'

const factories = {
  products: Products(Vue.axios),
  auth: Auth(Vue.axios),
}

Vue.prototype.$api = factories
