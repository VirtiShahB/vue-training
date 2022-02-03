<template>
  <div id="app">
    <test msg="Hello i m in mixins" />
    <modal />
    <router-view/>
  </div>
</template>
<script>
import Test from "./components/Test.vue";
import Modal from "./components/Modal.vue";
export default {
  name: "app",
  components: {
    Test,
    Modal
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>