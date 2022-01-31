<template>
    <b-card class="container">
        <h2><p :style="'text-align:center'"><strong>Signup</strong></p></h2>
    <b-form @submit="onSubmit" >
        <b-form-group
        id="input-group-1"
        label="Full Name:"
        label-for="input-1"
        >
        <b-form-input 
            v-model="form.fullName" 
            placeholder="Enter your name"
            required
        >
        </b-form-input>
        </b-form-group>
        <b-form-group
            id="input-group-2"
            label="Email Address:"
            label-for="input-2"
        >
        <b-form-input
          id="input-3"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Password:" label-for="input-4">
        <b-form-input
          id="input-4"
          :type="'password'"
          v-model="form.password"
          placeholder="Password"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Confirm Password:" label-for="input-5">
        <b-form-input
          id="input-5"
          :type="'password'"
          placeholder="Confirm password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Signup</b-button>
    </b-form>
    </b-card>
</template>
<script>
export default {
    name:"Signup",
     data() {
      return {
        form: {
          fullName: '',
          email: '',
          password: ''
        },
        registeredUser: [],
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault();
        if(localStorage.getItem('users') !== null) {
          this.registeredUser = JSON.parse(localStorage.getItem('users'));
          this.registeredUser.push(this.form)
        } else{
          this.registeredUser.push(this.form);
        }
        localStorage.setItem("users", JSON.stringify(this.registeredUser));
        alert("User signup successfully");
      }
    }
}
</script>
<style lang="">
    
</style>