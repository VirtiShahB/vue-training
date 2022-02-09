<template>
  <div id="app">
    <div class="container" v-if="this.isAuthenticated">
      <div class="main-container wlc-dashboard">
        <h2 class="heading">Welcome On Dashboard</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
};
</script>
<script>
export default {
  name: "Dashboard",
  data() {
    return {
      isAuthenticated: false,
    };
  },
  created() {
    if (
      localStorage.getItem("loginnedUser") !== null &&
      localStorage.getItem("loginnedUser") != ""
    ) {
      this.isAuthenticated = true;
    }
  },
};
</script>
