<template>
  <Main>
    <template #iteminbread>
       Checkout
    </template>
    <template #content>
      Checkout page
    </template>
  </Main>
</template>

<script>
  import Main from './Main.vue';

  export default {
    components : {
      Main
    },
    mounted() {
      console.log('Hey i am mounted');
    }
  }
</script>

<style>

</style>