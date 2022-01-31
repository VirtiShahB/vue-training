<template>
  <div class="float-right mr-5">
    <strong>LoggedIn: </strong> <em>{{ isLoggedIn() }}</em>
  </div>
</template>
<script>
export default {
  methods: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn.email;
    },
  },
};
</script>
