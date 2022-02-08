<template>
  <div id="app">
    <b-container fluid>
      <NavBar
        :authenticated="authenticated"
        v-if="authenticated"
        @logout="logout"
      />
      <router-view @authenticated="setAuthenticated" :key="$route.fullPath" />
    </b-container>
  </div>
</template>

<script>
import NavBar from './components/Common/NavBar'
export default {
  name: 'App',
  components: { NavBar },
  data () {
    return {
      authenticated: false
    }
  },
  mounted () {
    if (this.$store.state.loginUser) {
      this.authenticated = true
    }
    if (!this.authenticated) {
      this.$router.replace({ name: 'Login' })
    }
  },
  methods: {
    setAuthenticated (status) {
      this.authenticated = status
    },
    logout () {
      this.authenticated = false
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
