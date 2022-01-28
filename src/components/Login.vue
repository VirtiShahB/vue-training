<template>
    <b-card class="container">
        <h2><p :style="'text-align:center'"><strong>Login</strong></p></h2>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
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
        show: true
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
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.password = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
}
</script>
<style lang="">
    
</style>