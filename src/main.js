import Vue from "vue";
import App from "./App.vue";
import UUID from "vue-uuid";

import axios from "axios";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "./assets/style.css";
import router from "./router";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(UUID);

let fetchUsers = JSON.parse(localStorage.getItem("loggedInUser"));

let loggedIn = false;

if (fetchUsers != null) {
  loggedIn = true;
}



Vue.prototype.$loggedUser = fetchUsers;
Vue.prototype.$loggedIn = loggedIn;



// router.beforeEach((to, from, next) => {
//   if (to.name == 'checkout' && !loggedIn) next({ name: 'login' })
//   else next()

//   if (to.name == 'wishlist' && !loggedIn) next({ name: 'login' })
//   else next()

//   if (to.name == 'login' && loggedIn) next({ name: 'home' })
//   else next()

//   if (to.name == 'register' && loggedIn) next({ name: 'home' })
//   else next()
// })

router.beforeEach((to, from, next) => {

  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['login', 'register','home','404','view.product'];
  const authRequired = !publicPages.includes(to.name);
  const login = loggedIn;

  if (authRequired && !login) {
    return next('/login');
  }

  if (to.name == 'login' && login) {
    return next('/');
  }

  if (to.name == 'register' && login) {
    return next('/');
  }

  next();
})

new Vue({
  router,
  loggedIn,
  render: (h) => h(App),
}).$mount("#app");

