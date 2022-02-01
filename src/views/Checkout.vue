<template>
  <div>
    <b-container class="my-5">
      <h4 class="font-weight-bold">Checkout</h4>
      <b-form @submit.prevent="onSubmit" novalidate>
        <b-row>
          <b-col cols="7">
            <h6>Billing Details</h6>
            <!-- <b-alert variant="danger" v-if="showError" show dismissible>
              <p v-for="error in errors" class="small mb-0" :key="error">
                {{ error }}
              </p>
            </b-alert> -->

            <b-form-row>
              <b-form-group id="input-group-1" class="col-6" label="First Name">
                <b-form-input
                  id="input-1"
                  v-model="checkoutForm.firstName"
                  type="text"
                  name="firstname"
                  trim
                  required
                  aria-describedby="input-2-live-feedback"
                  v-validate="{ required: true }"
                  data-vv-name="firstname"
                ></b-form-input>
                <span class="text-danger">{{errors.first('firstname')}}</span>
                <!-- <b-form-invalid-feedback id="input-2-live-feedback">{{ veeErrors.first('firstName') }}</b-form-invalid-feedback> -->
              </b-form-group>
              <b-form-group id="input-group-2" class="col-6" label="Last Name">
                <b-form-input
                  id="input-2"
                  v-model="checkoutForm.lastName"
                  type="text"
                  name="lastname"
                  trim
                  required
                  v-validate="{ required: true }"
                  data-vv-name="lastname"
                ></b-form-input>
                <span class="text-danger">{{errors.first('lastname')}}</span>
              </b-form-group>
              <b-form-group id="input-group-3" class="col-6" label="Phone">
                <b-form-input
                  id="input-3"
                  v-model="checkoutForm.phone"
                  name="phone"
                  type="number"
                  trim
                  required
                  v-validate="{ required: true }"
                  data-vv-name="phone"
                ></b-form-input>
                <span class="text-danger">{{errors.first('phone')}}</span>
              </b-form-group>
              <b-form-group id="input-group-4" class="col-6" label="Email">
                <b-form-input
                  id="input-4"
                  v-model="checkoutForm.email"
                  type="email"
                  name="email"
                  trim
                  required
                  v-validate="{ required: true, email:true }"
                  data-vv-name="email"
                ></b-form-input>
                <span class="text-danger">{{errors.first('email')}}</span>
              </b-form-group>
            </b-form-row>

            <b-form-group id="input-group-5" label="Country">
              <b-form-select
                id="input-5"
                v-model="checkoutForm.country"
                :options="countries"
                name="country"
                required
                v-validate="{ required: true }"
                  data-vv-name="country"
              ></b-form-select>
              <span class="text-danger">{{errors.first('country')}}</span>
            </b-form-group>
            <b-form-group id="input-group-6" label="Address">
              <b-form-input
                id="input-6"
                v-model="checkoutForm.address"
                type="text"
                trim
                name="address"
                required
                v-validate="{ required: true }"
                  data-vv-name="address"
              ></b-form-input>
              <span class="text-danger">{{errors.first('address')}}</span>
            </b-form-group>
            <b-form-group id="input-group-7" label="Town/City">
              <b-form-input
                id="input-7"
                v-model="checkoutForm.townCity"
                type="text"
                trim
                name="city"
                required
                v-validate="{ required: true }"
                data-vv-name="city"
              ></b-form-input>
              <span class="text-danger">{{errors.first('city')}}</span>
            </b-form-group>
            <b-form-group id="input-group-8" label="State">
              <b-form-input
                id="input-8"
                v-model="checkoutForm.state"
                type="text"
                name="state"
                trim
                required
                v-validate="{ required: true }"
                  data-vv-name="state"
              ></b-form-input>
              <span class="text-danger">{{errors.first('state')}}</span>
            </b-form-group>
            <b-form-group id="input-group-9" label="Postal Code">
              <b-form-input
                id="input-9"
                v-model="checkoutForm.postal"
                type="number"
                name="postal"
                trim
                required
                v-validate="{ required: true }"
                  data-vv-name="postal"
              ></b-form-input>
              <span class="text-danger">{{errors.first('postal')}}</span>
            </b-form-group>

            <b-button variant="danger">Create an account</b-button>
          </b-col>
          <b-col cols="5">
            <cart-component :cart="cart"></cart-component>
            <b-button type="submit" variant="primary" class="float-right mt-3"
              >Place Order</b-button
            >
          </b-col>
        </b-row>
      </b-form>
    </b-container>
  </div>
</template>
<script>
import CartComponent from "@/components/Cart/CartComponent.vue";
import toastMixin from "@/mixins/toastMixins"
export default {
  components: { CartComponent },
  data() {
    return {
      checkoutForm: {
        firstName: null,
        lastName: null,
        phone: null,
        email: null,
        country: null,
        address: null,
        townCity: null,
        state: null,
        postal: null,
      },
      countries: [
        { text: "Select One", value: null },
        "India",
        "Algeria",
        "China",
        "Germany",
      ],
      cart: [],
      // errors: [],
      // showError: false,
    };
  },
  mixins:[toastMixin],
  created() {
    let cartItems = JSON.parse(localStorage.getItem("cart"));
    if (cartItems) {
      this.cart = cartItems;
    }
  },
  methods: {
    onSubmit() {
      this.$validator.validateAll().then(result => {
        if (!result) {
          return;
        }
        this.showToast("Checkout successfull.", "Checkout");
      });
    },
  },
};
</script>
