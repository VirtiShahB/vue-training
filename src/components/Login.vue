<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col md="4"></b-col>
        <b-col md="4" class="text-center"> <h1>LogIn</h1></b-col>
      </b-row>
      <b-row>
        <b-col md="4"></b-col>
        <b-col md="4">
          <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group id="input-group-1" label="Email:" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Enter email"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Password:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                type="password"
                v-model="form.password"
                placeholder="Enter Password"
                required
              ></b-form-input>
            </b-form-group>
            <span>{{ error }}</span>
            <b-button type="submit" variant="primary">LogIn</b-button>
          </b-form>
        </b-col>
        <b-col md="4"></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        email: '',
        name: ''
      },
      error: ''
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      if (this.form.email !== '' && this.form.password !== '') {
        if (
          this.form.email === this.$parent.mockAccount.email &&
          this.form.password === this.$parent.mockAccount.password
        ) {
          this.$emit('authenticated', true)
          this.$router.replace({ name: 'Dashboard' })
        } else {
          this.error = 'The username and / or password is incorrect'
        }
      } else {
        this.error = 'A username and password must be present'
      }
      // alert(JSON.stringify(this.form))
    },
    onReset (event) {
      event.preventDefault()
      this.form.email = ''
      this.form.password = ''
    }
  }
}
</script>
