import Vue from 'vue'
import Router from 'vue-router';
import Product from './components/Product.vue';
import Checkout from './components/Checkout.vue';

Vue.use(Router);


export default new Router({
    routes: [
        {
            path: '/',
            name : 'Product',
            component : Product

        },
        {
            path: '/checkout',
            name : 'checkout',
            component : Checkout

        },
    ]
})