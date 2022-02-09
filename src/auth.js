import Vue from "vue";
import router from "./router";

router.beforeEach((to, from, next) => {
  let fetchUsers = JSON.parse(localStorage.getItem("activeUser"));
  let login = fetchUsers != null ? true : false;
  Vue.prototype.$loggedIn = login;
  Vue.prototype.$loggedUser = fetchUsers;

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!fetchUsers && !login) {
      next({ name: "signin" });
    } else {
      next();
    }
  } else {
    next();
  }
});
