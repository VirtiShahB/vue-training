<template>
  <div id="app">
    <!-- <div v-if="!isLoginPage"> -->
    <Header />
    <!-- </div> -->
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  beforeCreate() {
    console.log(this.$route.name);
  },
  data() {
    return {
      isLoginPage: this.$route.name == "login" ? true : false,
    };
  },
  mounted() {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
