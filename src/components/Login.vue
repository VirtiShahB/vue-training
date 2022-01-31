<template>
  <div class="col-md-6 offset-md-3 mt-5">
    <div class="vue-tempalte">
      <form>
        <h3>Sign In</h3>

        <div class="form-group">
          <label>Email address</label>
          <input type="email" class="form-control form-control-lg" />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control form-control-lg" />
        </div>

        <button type="submit" class="btn btn-dark btn-lg btn-block">
          Sign In
        </button>

        <p class="forgot-password text-right mt-2 mb-4">
          <router-link to="/forgot-password">Forgot password ?</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
