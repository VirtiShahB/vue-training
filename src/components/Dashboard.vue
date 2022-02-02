<template>
  <div class="dashboard">
    <div class="container text-center">
      <img src="../../public/assets/logo.png" />
      <h1 class="align-middle mt-3">Wel Come to Dashboard</h1>
      <router-link :to="{ name: 'signin' }">Signin</router-link
      >&nbsp;&nbsp;&nbsp;
      <router-link :to="{ name: 'signin' }">Signup</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
};
</script>

<style scoped>
.dashboard {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
}
</style>
