<template>
  <div class="login">
    <div class="light-color">
            <div class="row">
                <div class="col-12 text-center pt-3 py-3">
                    <router-link :to="{ name: 'Home' }">
                    <img id="logo" src="../assets/images/icon.png" />
                    </router-link>
                </div>
            </div>
        </div>
    <login-page
      
    />
    
  </div>
</template>

<script>
// @ is an alias to /src

import LoginPage from '@/components/Login.vue';


export default {
  name: 'Login',
  components: {
    LoginPage,

  },
  data() {
    return {
        
    };
  },
 
}
</script>
<style scoped>
.prod-card-wrapper{
  padding: 20px;
}
</style>