<template>
  <div class="vue-tempalte">
    <form @submit.stop.prevent>
      <h3>Sign Up</h3>

      <div class="form-group">
        <label>Full Name</label>
        <input
          type="text"
          class="form-control form-control-lg"
          v-model="name"
          name="name"
        />
      </div>

      <div class="form-group">
        <label>Email address</label>
        <input
          type="email"
          class="form-control form-control-lg"
          v-model="email"
          name="email"
        />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input
          type="password"
          class="form-control form-control-lg"
          v-model="password"
          name="password"
        />
      </div>

      <button
        type="submit"
        class="btn btn-dark btn-lg btn-block"
        @click="Submit"
      >
        Sign Up
      </button>

      <p class="forgot-password text-right">
        Already registered
        <router-link :to="{ name: 'login' }">sign in?</router-link>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      submitted: false,
      users: [],
    };
  },
  methods: {
    Submit() {
      this.submitted = true;
      if (this.email && this.password) {
        var object = {};
        object["name"] = this.name;
        object["email"] = this.email;
        object["password"] = this.password;
        this.users.push(object);
        localStorage.setItem("users", JSON.stringify(this.users));
        this.$router.push({ name: "Login" });
      }
    },
  },
};
</script>
