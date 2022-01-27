<template>
  <div id="app">
    <div class="header">
    <router-link to="/">Dashboard</router-link>
    <div class="header-right">
      <router-link to="/">Products</router-link>
      <router-link to="/product/wishlist">Wishlist</router-link>
      <a href="#">Sign out</a>
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
  position:fixed;
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