<template>
  <div>
    <h3>Billing Details</h3>

    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-row>
        <b-col class="md-6">
          <b-form-group
            id="firstName"
            label="First Name:"
            label-for="firstName"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="lastName"
              v-model.lazy="form.firstName"
              type="text"
              placeholder="Enter first name"
              required
            >
            </b-form-input>
          </b-form-group>
        </b-col>
        <b-col class="md-6">
          <b-form-group
            id="input-group-2"
            label="Last Name:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model.lazy="form.lastName"
              placeholder="Enter last name"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="md-6">
          <b-form-group id="phone" label="Phone:" label-for="phone">
            <b-form-input
              id="phone"
              v-model.number="form.phone"
              type="text"
              placeholder="Enter phone"
              required
            >
            </b-form-input>
          </b-form-group>
        </b-col>
        <b-col class="md-6">
          <b-form-group id="email" label="Email:" label-for="email">
            <b-form-input
              id="email"
              v-model.lazy="form.email"
              type="email"
              placeholder="Enter Email"
              required
            >
            </b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-row>
      <b-card class="mt-3" header="Process Data">
        <pre class="m-0">{{ firstName }}</pre>
        <pre class="m-0">{{ form.firstName }}</pre>
      </b-card>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'ShippingDetails',
  data () {
    return {
      form: {},
      show: true,
      firstName: ''
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
    }
  }
}
</script>
