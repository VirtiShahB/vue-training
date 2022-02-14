export default {
  data() {
    return {
      user: "",
    };
  },
  created: function () {
      if (localStorage.activeUser) {
        return  this.user = JSON.parse(localStorage.activeUser);
    }
  }
};