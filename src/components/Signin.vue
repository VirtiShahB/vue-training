<template>
  <div class="signin">
    <div class="col-md-6">
      <h2>Sign In</h2>
      <hr />
      <form @submit.prevent="loginUser">
        <b-form-group id="input-group-2" label="Username:" label-for="username">
          <b-form-input
            id="user_name"
            v-model="user_name"
            type="text"
            placeholder="Enter username"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Password:" label-for="password">
          <b-form-input
            id="password"
            v-model="password"
            type="password"
            placeholder="Enter password"
            required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" class="btn btn-dark btn-lg btn-block"
          >Sign In</b-button
        >

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
    return {
      user_name: "",
      password: "",
    };
  },
  methods: {
    loginUser() {
      let credentials = {
        user_name: this.user_name,
        password: this.password,
      };

      let users =
        JSON.parse(localStorage.getItem("users")) != null
          ? JSON.parse(localStorage.getItem("users"))
          : [];
      let userindex = users.findIndex(
        (user) => user.user_name === credentials.user_name
      );

      if (userindex > -1) {
        let passwordIndex = users.findIndex(
          (user) => user.password === credentials.password
        );
        if (passwordIndex > -1) {
          let activeUser = users.find(
            (user) => user.user_name === credentials.user_name
          );
          localStorage.setItem("activeUser", JSON.stringify(activeUser));
          this.$router.push("/products");
        } else {
          alert("Password does not match!");
        }
      } else {
        alert(
          "Username does not exist, Please singup with username " +
            credentials.user_name +
            " to signin"
        );
        this.$router.push("/signup");
      }
    },
  },
};
</script>

<style scoped>
.signin {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}
</style>
