import Vue from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Cart from './components/Cart';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/css/colors/colors.css";
import "./assets/css/main.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);
const routes = [
  { path: '/cart', component: Cart }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
