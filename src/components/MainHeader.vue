<template>
  <div class="header">   
     <nav class="navbar navbar-expand-lg navbar-dark">
    <!--    Logo-->
    <router-link class="navbar-brand" :to="{ name: 'Home' }">
      <img id="logo" src="../assets/images/icon.png" />
    </router-link>

    <!--    Burger Button-->
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!--      Search Bar-->
      <form class="form-inline ml-auto mr-auto">
        <div class="input-group">
          <input
            size="100"
            type="text"
            class="form-control"
            placeholder="Search Items"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <div class="input-group-prepend">
            <span class="input-group-text primary" id="search-button-navbar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
            </span>
          </div>
        </div>
      </form>

      <!--      DropDowns-->
      <ul class="navbar-nav ml-3">
        <li class="nav-item dropdown">  
       
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
    </div>
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
.input-group-text {
    display: flex;
    align-items: center;
    padding: 0.375rem 0.75rem;
    margin-bottom: 0;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    background-color: #e9ecef;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
}

#search-button-navbar {
  background-color: #17a2b8;
  border-color: #17a2b8;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}

#cart {
  position: relative;
}
.light-color{
      border-bottom: 1px solid #d7d3d3;
}

 a {
    font-weight: bold;
    color: #2c3e50;
      color: #17a2b8;
    
  }
  .nav-link {
    
    color: #343a40!important;
}
.nav-item{
  padding-left:15px;
}
</style>