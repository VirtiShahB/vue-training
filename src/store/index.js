import Vuex from 'vuex';
import Vue from "vue";
import productModule from '@/store/modules/productstore';
import auth from '@/store/modules/auth';
Vue.use(Vuex);

export default new Vuex.Store({
    modules : {
        productModule,
        auth
    }
});