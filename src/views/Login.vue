<template>
  <div class="login">
   
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