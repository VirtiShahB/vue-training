<template>
  <div id="app" class="container">
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li> <router-link class="nav-link" to="/"> Home </router-link> </li>
        <li class="text-right"> <router-link class="nav-link" to="cart"> <b-icon-cart></b-icon-cart> </router-link> </li>
        </ul>
      </div>
    </nav>
    <div class="text-center" style="margin-top: 20px;">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import Vue from 'vue'
import VueRouter from 'vue-router'

import Book from './components/Book.vue'
import Cart from './components/Cart.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Book },
    { path: '/cart', component: Cart },
  ]
})


export default {
  name: 'App',
  router
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.item_price{
  color:#B12704!important;
  font-size: 25px;
}
li {float: left;}
ul{
    display: block !important;
    width:100%
}
li:last-child {
  float: right; /* last li item */
}
</style>
