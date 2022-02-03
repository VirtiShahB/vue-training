export default {
  methods: {
    logout() {
      this.$store.state.isLoggedIn = false;
      localStorage.clear();
      this.$router.push({ name: "login" });
    },
  },
};
