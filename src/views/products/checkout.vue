<template>
  <div>
    <b-container class="bv-example-row mt-2">
      <b-row v-if="!this.$store.state.products.isEmptyCart">
        <b-col sm="7">
          <b-card class="mt-2" header="Billing Details">
            <pre class="m-0"></pre>
            <b-form
              @submit="onSubmit"
              method="post"
              id="frm-billing"
              class="m-2"
            >
              <b-row>
                <b-col sm="6">
                  <b-form-group
                    id="lbl-first-name"
                    label="First Name:"
                    size="sm"
                  >
                    <b-form-input
                      size="sm"
                      id="first_name"
                      placeholder="Enter First Name"
                      required
                      name="first_name"
                      v-model="$v.form.first_name.$model"
                      :state="validateState('first_name')"
                      aria-describedby="input-1-live-feedback"
                    ></b-form-input>
                    <b-form-invalid-feedback id="input-1-live-feedback"
                      >This is a required field.</b-form-invalid-feedback
                    >
                  </b-form-group>
                </b-col>
                <b-col sm="6">
                  <b-form-group id="lbl-last-name" label="Last Name:" size="sm">
                    <b-form-input
                      size="sm"
                      id="last_name"
                      placeholder="Enter First Name"
                      required
                      name="last_name"
                      v-model="$v.form.last_name.$model"
                      :state="validateState('last_name')"
                      aria-describedby="last-name-feedback"
                    ></b-form-input>
                    <b-form-invalid-feedback id="last-name-feedback"
                      >This is a required field.</b-form-invalid-feedback
                    >
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col sm="6">
                  <b-form-group id="phone-number" label="Phone number:">
                    <b-form-input
                      id="phone_number"
                      placeholder="Enter Phone.No"
                      required
                      name="phone_number"
                      size="sm"
                      type="number"
                      v-model="$v.form.phone_number.$model"
                      :state="validateState('phone_number')"
                      aria-describedby="phone-number-feedback"
                    ></b-form-input>
                    <b-form-invalid-feedback id="phone-number-feedback"
                      >This is a required field.</b-form-invalid-feedback
                    >
                  </b-form-group>
                </b-col>
                <b-col sm="6">
                  <b-form-group id="lbl-email" label="Email Address:">
                    <b-form-input
                      id="email"
                      placeholder="Enter Email Address"
                      required
                      name="email"
                      size="sm"
                      type="email"
                      v-model="$v.form.email.$model"
                      :state="validateState('email')"
                      aria-describedby="email-feedback"
                    ></b-form-input>
                    <b-form-invalid-feedback id="email-feedback"
                      ><span v-if="!$v.form.email.required"
                        >Email is required</span
                      >
                      <span v-if="form.email && !$v.form.email.email"
                        >Enter valid email address</span
                      ></b-form-invalid-feedback
                    >
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col sm="12">
                  <b-form-group id="lbl-address" label="Address:">
                    <b-form-input
                      id="address"
                      placeholder="Enter Address"
                      required
                      name="address"
                      size="sm"
                      v-model="$v.form.address.$model"
                      :state="validateState('address')"
                      aria-describedby="address-feedback"
                    ></b-form-input>
                    <b-form-invalid-feedback id="address-feedback"
                      >This is a required field.</b-form-invalid-feedback
                    >
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col sm="12">
                  <b-form-group id="country" label="Country:">
                    <b-form-select
                      class="form-select form-select-sm"
                      id="country"
                      :options="country"
                      required
                      size="sm"
                      name="country"
                      v-model="$v.form.country.$model"
                      :state="validateState('country')"
                      aria-describedby="country-feedback"
                    ></b-form-select>
                    <b-form-invalid-feedback id="country-feedback"
                      >This is a required field.</b-form-invalid-feedback
                    >
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col sm="4">
                  <b-form-group id="lbl-city" label="Town/City:">
                    <b-form-input
                      id="city"
                      placeholder="Enter Town/City"
                      required
                      name="city"
                      size="sm"
                      v-model="$v.form.city.$model"
                      :state="validateState('city')"
                      aria-describedby="city-feedback"
                    ></b-form-input>
                    <b-form-invalid-feedback id="city-feedback"
                      >This is a required field.</b-form-invalid-feedback
                    >
                  </b-form-group>
                </b-col>
                <b-col sm="4">
                  <b-form-group id="lbl-state" label="State/County:">
                    <b-form-input
                      id="state"
                      placeholder="Enter State/County"
                      required
                      name="state"
                      size="sm"
                      v-model="$v.form.state.$model"
                      :state="validateState('state')"
                      aria-describedby="state-feedback"
                    ></b-form-input>
                    <b-form-invalid-feedback id="state-feedback"
                      >This is a required field.</b-form-invalid-feedback
                    >
                  </b-form-group>
                </b-col>
                <b-col sm="4">
                  <b-form-group id="lbl-postal-code" label="Postal Code:">
                    <b-form-input
                      id="postal-code"
                      placeholder="Enter Postal Code"
                      required
                      name="postal_code"
                      size="sm"
                      v-model="$v.form.postal_code.$model"
                      :state="validateState('postal_code')"
                      aria-describedby="postal-code-feedback"
                    ></b-form-input>
                    <b-form-invalid-feedback id="postal-code-feedback"
                      >This is a required field.</b-form-invalid-feedback
                    >
                  </b-form-group>
                </b-col>
              </b-row>
            </b-form>
          </b-card>
        </b-col>
        <b-col sm="5">
          <b-card class="mt-2">
            <b-card-text>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <label class="fw-bolder">Product</label>
                  <label class="float-right fw-bolder">Total</label>
                </li>
                <li
                  class="list-group-item"
                  v-for="product in this.$store.state.products.cart"
                  :key="product.id"
                >
                  <label
                    >{{ product.name
                    }}<span class="badge bg-info m-1">
                      {{ product.price }} * {{ product.qty }}
                    </span>
                  </label>
                  <label class="float-right"
                    >${{ product.price * product.qty }}</label
                  >
                </li>
              </ul>
              <hr />
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <label>Subtotal</label>
                  <label class="float-right text-danger"
                    >${{ cartTotal }}</label
                  >
                </li>
                <li class="list-group-item">
                  <label>Shipping</label>
                  <label class="float-right">
                    <b-form-group v-slot="{ ariaDescribedby }">
                      <b-form-radio
                        :aria-describedby="ariaDescribedby"
                        name="some-radios"
                        value="free_shipping"
                        v-model="shipping_method"
                      >
                        Free Shipping</b-form-radio
                      >
                      <b-form-radio
                        :aria-describedby="ariaDescribedby"
                        name="some-radios"
                        value="local_pickup"
                        v-model="shipping_method"
                        >Local Pickup</b-form-radio
                      >
                    </b-form-group>
                  </label>
                </li>
                <li class="list-group-item">
                  <label>Total</label>
                  <label class="float-right text-danger"
                    >${{ cartTotal }}</label
                  >
                </li>
              </ul>
              <b-button
                variant="danger"
                @click="onSubmit"
                size="sm"
                class="float-right mt-2"
                >Place Order</b-button
              >
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
      <b-row v-else>
        <b-col sm="12" class="m-5">
          <b-card bg-variant="light" text-variant="dark" class="text-center">
            <b-card-text> OOPS! Your cart is empty! </b-card-text>
            <router-link class="btn btn-outline-primary" :to="'/'"
              >Let's Brows the products</router-link
            >
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { required, email } from "vuelidate/lib/validators";
import { toastMixins } from "../../mixins/toastMixins";
export default {
  mixins: [toastMixins],
  name: "Checkout",
  props: ["cart"],
  data() {
    return {
      errors: [],
      form: {
        first_name: null,
        last_name: null,
        phone_number: null,
        email: null,
        address: null,
        country: null,
        city: null,
        state: null,
        postal_code: null,
      },
      shipping_method: "free_shipping",
      country: [
        { text: "Select Country", value: null },
        "India",
        "Canada",
        "USA",
        "UK",
      ],
    };
  },
  validations: {
    form: {
      first_name: {
        required,
      },
      last_name: {
        required,
      },
      phone_number: {
        required,
      },
      email: {
        required,
        email,
      },
      address: {
        required,
      },
      country: {
        required,
      },
      city: {
        required,
      },
      state: {
        required,
      },
      postal_code: {
        required,
      },
    },
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.form = {
        first_name: null,
        last_name: null,
        email: null,
        password: null,
        confirm_password: null,
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    onSubmit(event) {
      event.preventDefault();
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      this.makeToast("success", "Success!", "Order Placed Successfully!");
      this.$store.dispatch("products/emptyTheCart");
      this.$router.push({ name: "Dashboard" });
    },
  },
  computed: {
    cartTotal() {
      var totalAount = 0;
      if (this.$store.state.products.cart.length > 0) {
        this.$store.state.products.cart.map((product) => {
          totalAount += product.qty * parseInt(product.price);
        });
      }
      return totalAount;
    },
  },
};
</script>