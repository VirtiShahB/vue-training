<template>
  <div class="register">
   
    <register-page
      
    />
    
  </div>
</template>

<script>
// @ is an alias to /src
import RegisterPage from '@/components/SignUp.vue';


export default {
  name: 'Register',
  components: {
    RegisterPage,

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