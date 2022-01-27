import Vue from 'vue'
import Products from './products'

const factories = {
  products: Products(Vue.axios),
}

Vue.prototype.$api = factories
