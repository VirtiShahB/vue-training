<template>
  <div id="app">
    <div class="header">
    <router-link to="/dashboard" v-if="isAuthenticated">Dashboard</router-link>
    <div class="header-right">
      <router-link to="/">Products</router-link>
      <router-link to="/product/wishlist">Wishlist</router-link>
      <span v-if="isAuthenticated">
        <a @click="signOut()">Signout</a>
      </span>
      <span v-else>
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Signup</router-link>
      </span>
    </div>
  </div>
  <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>
<style scoped>

.header {
  overflow: hidden;
  background-color: #a7bfe2;
  padding: 20px 10px;
  position: inherit;
  top:0;
  width:100%;;
}

.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px; 
  line-height: 25px;
  border-radius: 4px;
}

.header a.logo {
  font-size: 25px;
  font-weight: bold;
}

.header a:hover {
  background-color: #ddd;
  color: black;
}

.header a.active {
  background-color: dodgerblue;
  color: white;
}

.header-right {
  float: right;
}

@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }
  
  .header-right {
    float: none;
  }
}
.card.container{
  margin-top: 150px;
}
</style>
<script>
export default {
  name:"Dashboard",
  data(){
    return{
      isAuthenticated:false,
    }
  },
  methods: {
    signOut(){
      if(localStorage.getItem('loginnedUser') !== null){
          localStorage.setItem('loginnedUser','');
          this.isAuthenticated = false;
      }
    }
  },
  created() {
    if(localStorage.getItem('loginnedUser') !== null){
      this.isAuthenticated = true;
    }
  },
}
</script>