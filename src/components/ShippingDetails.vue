<template>
  <div>
    <h3>Billing Details</h3>

    <b-form @submit="onSubmit" @reset="onReset">
      <b-row>
        <b-col class="md-6">
          <b-form-group
            id="firstName"
            label="First Name:"
            label-for="firstName"
          >
            <b-form-input
              id="lastName"
              v-model="form.firstName"
              type="text"
              placeholder="Enter first name"
              required
            >
            </b-form-input>
          </b-form-group>
        </b-col>
        <b-col class="md-6">
          <b-form-group id="lastName" label="Last Name:" label-for="lastName">
            <b-form-input
              id="input-2"
              v-model="form.lastName"
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
      <b-row>
        <b-col class="md-12">
          <b-form-group label="Country:" label-for="country">
            <b-form-select
              id="country"
              v-model="form.country"
              :options="countries"
              required
            >
              <template> </template>
            </b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="md-12">
          <b-form-group label="Address:" label-for="address">
            <b-form-input
              id="address"
              v-model="form.address"
              placeholder="Enter address"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="md-12">
          <b-form-group label="State" label-for="state">
            <b-form-input
              id="state"
              v-model="form.state"
              placeholder="Enter state"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="md-12">
          <b-form-group label="Town/City:" label-for="city">
            <b-form-input
              id="city"
              v-model="form.city"
              placeholder="Enter city"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="md-12">
          <b-form-group label="Postal Code:" label-for="pincode">
            <b-form-input
              id="pincode"
              v-model="form.pincode"
              placeholder="Enter pincode"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-row>
      <b-card class="mt-3" header="Process Data" v-if="show">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'ShippingDetails',
  data () {
    return {
      form: {
        country: null
      },
      show: false,
      countries: [
        { value: null, text: 'Please select one option' },
        { value: 1, text: 'India' },
        { value: 2, text: 'South Africa' },
        { value: 3, text: 'Russia' }
      ]
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      this.show = true
    },
    onReset (event) {
      event.preventDefault()
      // Reset our form values
      this.form = {country: null}
    }
  }
}
</script>
