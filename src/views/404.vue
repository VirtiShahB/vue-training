<template>
  <div class="vh-100 bg-primary py-5">
        
        <h1 class="text-light display-1 text-center">
            404
        </h1>

        <p class="text-light display-4 text-center">
            Page not found !
        </p>

        <router-link :to="{name : 'home'}">
            <p class="display-5 text-center text-white">Back to Home</p>
        </router-link>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>