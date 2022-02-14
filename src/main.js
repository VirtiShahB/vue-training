
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import 'vue2-toast/lib/toast.css';
import Toast from 'vue2-toast';
// LightBootstrap plugin
import LightBootstrap from './light-bootstrap-main'

// router setup
import routes from './routes/routes'

import './registerServiceWorker'
// plugin setup
Vue.use(VueRouter)
Vue.use(LightBootstrap)
Vue.use(Toast, {
  type: 'bottom',
  duration: 3000,
  width: '450px',
  type: 'error',
  icon: 'error_outline'
});
// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'nav-item active',
  scrollBehavior: (to) => {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  }
})
Vue.mixin({
  methods: {
    logout(type) {
      localStorage.removeItem("activeUser");
      switch (type) {
        case "Facebook":
          if(FB.getAccessToken() != null) {
            FB.logout(function (response) {
              this.$router.push("/login");
            });
          }
          break;
        case "Google":
          var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
              window.location.reload();
            });
          break;
        default:
            localStorage.removeItem("activeUser");
            this.$router.push("/login");
            window.location.reload();
          break;
      }
    },
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
