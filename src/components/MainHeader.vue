<template>
  <div class="header">   
    <nav class="navbar  navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" :to="{ name: 'Home' }">
       <img id="logo" src="../assets/images/icon.png"  />
    </router-link>    
      <ul class="navbar-nav ml-auto">        
        <li class="nav-item">
          <div id="cart">
            <span id="nav-cart-count"></span>           
              <router-link to="/checkout">
                <transition name="move" appear>
                  <div style="margin-right: 20px" >
                    <b-icon-cart-4 v-if="show" class="chart" />
                    <b-badge v-if="productCount > 0" variant="light">{{ productCount }}</b-badge>
                  </div>
                </transition> 
              </router-link>  
          </div>
        </li>
      </ul>
    
    </nav>
  </div>  
</template>

<script>
export default {
  props: ["productCount"],
  data() {
    return {
      show: true,
    };
  }, 
};
</script>

<style scoped>

.chart {
  font-size: 30px;
}

.move-enter-active {
  animation: move-chart 2s;
}
@keyframes move-chart {
  0% {
    transform: translateX(-600px);
  }
  100% {
    transform: translateX(0px) rotate(45deg);
  }
}
#logo {
  width: 150px;
  margin-left: 20px;
  margin-right: 20px;
}

.nav-link {
  color: rgba(255, 255, 255);
}

#search-button-navbar {
  background-color: #febd69;
  border-color: #febd69;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}

#cart {
  position: relative;
}
</style>