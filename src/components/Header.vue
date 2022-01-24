<template>
  <div>
    <b-navbar type="dark" variant="secondary">
      <div class="container">
        <b-navbar-nav>
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item-dropdown text="Profile" right>
            <b-dropdown-item href="#">Logout</b-dropdown-item>
            <b-dropdown-item href="#">Settings</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav class="float-right ml-auto">
          <b-nav-item href="#">Home / checkout</b-nav-item>
        </b-navbar-nav>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
</style>