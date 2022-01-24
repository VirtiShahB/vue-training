<template>
  <div>
    <Header />
    <b-container class="bv-example-row mt-3">
      <b-row>
          <b-col sm="12">
          <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
            </p>
         </b-col>
        <b-col sm="7">
          <b-card class="mt-3" header="Billing Details">
            <pre class="m-0"></pre>
            <b-form @submit="checkForm" method="post" id="frm-billing" v-if="show" class="m-2">
              <b-row>
                <b-col sm="6" class="my-2">
                  <b-form-group
                    id="lbl-first-name"
                    label="First Name:"
                    label-for="first_name"
                    size="sm"                    
                  >
                    <b-form-input
                      size="sm"
                      id="first_name"
                      placeholder="Enter First Name"
                      required
                      name="first_name"
                      v-model="form.first_name"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col sm="6" class="my-2">
                  <b-form-group
                    id="lbl-last-name"
                    label="Last Name:"
                    label-for="last_name"
                    size="sm"
                  >
                    <b-form-input
                      size="sm"
                      id="last_name"
                      placeholder="Enter First Name"
                      required
                      name="last_name"
                      v-model="form.last_name"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col sm="6" class="my-2">
                  <b-form-group
                    id="phone-number"
                    label="Phone number:"
                    label-for="phone_number"
                  >
                    <b-form-input
                      id="phone_number"
                      placeholder="Enter Phone.No"
                      required
                      name="phone_number"
                      size="sm"
                      v-model="form.phone_number"
                      type="number"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col sm="6" class="my-2">
                  <b-form-group
                    id="lbl-email"
                    label="Email Address:"
                    label-for="email"
                  >
                    <b-form-input
                      id="email"
                      placeholder="Enter Email Address"
                      required
                      name="email"
                      size="sm"
                      v-model="form.email"
                      type="email"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col sm="12" class="my-2">
                  <b-form-group
                    id="lbl-address"
                    label="Address:"
                    label-for="address"
                  >
                    <b-form-input
                      id="address"
                      placeholder="Enter Address"
                      required
                      name="address"
                      size="sm"
                      v-model="form.address"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col sm="12" class="my-2">
                  <b-form-group
                    id="country"
                    label="Country:"
                    label-for="country"
                  >
                    <b-form-select
                      class="form-select form-select-sm"
                      id="country"
                      :options="country"
                      required
                      size="sm"
                      name="country"
                      v-model="form.country"
                    ></b-form-select>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col sm="4" class="my-2">
                  <b-form-group
                    id="lbl-city"
                    label="Town/City:"
                    label-for="city"
                  >
                    <b-form-input
                      id="city"
                      placeholder="Enter Town/City"
                      required
                      name="city"
                      size="sm"
                      v-model="form.city"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col sm="4" class="my-2">
                  <b-form-group
                    id="lbl-state"
                    label="State/County:"
                    label-for="state"
                  >
                    <b-form-input
                      id="state"
                      placeholder="Enter State/County"
                      required
                      name="state"
                      size="sm"
                      v-model="form.state"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col sm="4" class="my-2">
                  <b-form-group
                    id="lbl-postal-code"
                    label="Postal Code:"
                    label-for="postal-code"
                  >
                    <b-form-input
                      id="postal-code"
                      placeholder="Enter Postal Code"
                      required
                      name="postal_code"
                      size="sm"
                      v-model="form.postal_code"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-form>
          </b-card>
        </b-col>
        <b-col sm="5">
          <b-card class="mt-3">
            <b-card-text>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <label class="fw-bolder">Product</label>
                  <label class="float-end fw-bolder">Total</label>
                </li>
                <li
                  class="list-group-item"
                  v-for="product in cart"
                  :key="product.id"
                >
                  <label
                    >{{ product.title
                    }}<span class="badge bg-info m-1">
                      {{ product.price }} * {{ product.qty }}
                    </span>
                  </label>
                  <label class="float-end">${{ product.price * product.qty }}</label>
                </li>
              </ul>
              <hr />
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <label>Subtotal</label>
                  <label class="float-end text-danger">${{ cartTotal }}</label>
                </li>
                <li class="list-group-item">
                  <label>Shipping</label>
                  <label class="float-end">
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
                  <label class="float-end text-danger">${{ cartTotal }}</label>
                </li>
              </ul>
              <b-button
                variant="danger"
                @click="checkForm"
                size="sm"
                class="float-end mt-2"
                >Place Order</b-button
              >
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
export default {
  name: "Checkout",
  components: {
    Header,
  },
  props: ["cart"],
  data: function () {
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
      show: true,
      selected: null,
      shipping_method: "free_shipping",
      country: [
        { text: "Select Country", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
    };
  },
  methods: {
    placeOrder: function () {
      alert("Order Placed Successfully!");
    },
    checkForm: function (e) {
      this.errors = [];
      if (!this.form.first_name) {
        this.errors.push("First name is required");
      }
      if (!this.form.last_name) {
        this.errors.push("Last name is required");
      }
      if (!this.form.phone_number) {
        this.errors.push("Phone number is required");
      }
      if (!this.form.email) {
        this.errors.push("email is required");
      }
      if (!this.form.address) {
        this.errors.push("Address is required");
      }
      if (!this.form.country) {
        this.errors.push("Country is required");
      }
      if (!this.form.city) {
        this.errors.push("City is required");
      }
      if (!this.form.state) {
        this.errors.push("State is required");
      }
      if (!this.form.postal_code) {
        this.errors.push("Postal Code is required");
      }
      if (this.errors.length > 0) {
        e.preventDefault();
      } else {
        alert("Order Placed Successfully!");
      }
    },
  },
  computed: {
    cartTotal: function () {
      var totalAount = 0;
      if (this.cart.length > 0) {
        this.cart.map((product) => {
          totalAount += product.qty * parseInt(product.price);
        });
      }
      return totalAount;
    },
  },
};
// console.log(cart);
</script>

<style>
</style>