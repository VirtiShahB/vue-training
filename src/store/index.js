import Vuex from 'vuex';
import Vue from "vue";
import productModule from './modules/productstore';
import auth from './modules/auth';
Vue.use(Vuex);

export default new Vuex.Store({
    modules : {
        productModule,
        auth
    }
});