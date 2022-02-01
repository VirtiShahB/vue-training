<template>
    <b-card class="container">
        <h2><p :style="'text-align:center'"><strong>Login</strong></p></h2>
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Email Address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          placeholder="Password"
          required
          :type="'password'"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="me">Remember me</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Login</b-button>
    </b-form>
    </b-card>
</template>
<script>
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
    name:"Login",
    setup () {
        return { v$: useVuelidate() }
    },
     data() {
      return {
        form: {
          email: '',
          password: '',
        },
        show: true,
        arrLoginnedUser: [],
      }
    },
    validations () {
    return {
        email: { required, email }, // Matches this.email
        password: { required }, // Matches this.password
     }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        const email = this.form.email;
        const password = this.form.password;
        const registeredUser = JSON.parse(localStorage.getItem('users'));
        const userInfo = registeredUser.find(function(user) {
          if(user.email == email && user.password == password){
            return true;
          }
        });
        if(typeof userInfo == 'object'){
          this.arrLoginnedUser.push(userInfo);
          localStorage.setItem('loginnedUser',JSON.stringify(this.arrLoginnedUser));
          this.$router.push('/dashboard');
        } else {
          alert("Invalid Credentials");
        }
      }
    }
}
</script>
<style lang="">
    
</style>