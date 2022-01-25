<template>
  <Main>
    <template #iteminbread>
       Main
    </template>
    <template #content>
      <h1>
        Welcome to vue ecommerce
      </h1>
    </template>
  </Main>
</template>

<script>
  import Main from './Main.vue';

  export default {
    components : {
      Main
    }
  }
</script>

<style>

</style>