<template>
  <div>
    <div>
      <the-header></the-header>
    </div>
    <h1 class="text-left ml-5">Billing</h1>

    <b-form fluid class="bv-example-row">
      <b-row class="m-5">
        <b-col sm="8">
          <b-row>
            <b-col sm="6">
              <b-form-group
                id="input-group-2"
                class="text-left"
                label="First Name"
                label-for="firstname"
              >
                <b-form-input
                  id="firstname"
                ></b-form-input> </b-form-group></b-col
            ><b-col sm="6">
              <b-form-group
                id="input-group-2"
                label="Last Name"
                class="text-left"
                label-for="lastname"
              >
                <b-form-input
                  id="lastname"
                ></b-form-input> </b-form-group></b-col
          ></b-row>
          <b-row>
            <b-col sm="6">
              <b-form-group
                id="input-group-2"
                class="text-left"
                label="Phone"
                label-for="phone"
              >
                <b-form-input id="phone"></b-form-input> </b-form-group></b-col
            ><b-col sm="6">
              <b-form-group
                id="input-group-2"
                label="Email"
                class="text-left"
                label-for="email"
              >
                <b-form-input id="email"></b-form-input> </b-form-group></b-col
          ></b-row>
          <b-row>
            <b-col sm="12">
              <b-form-group
                id="input-group-2"
                class="text-left"
                label="Country"
                label-for="country"
              >
                <b-dropdown
                  split
                  block
                  split-variant="outline-grey"
                  variant="outline-dark"
                  text="India"
                  class="m-2 border"
                  style="text-align: left !important"
                >
                  <b-dropdown-item href="#">India</b-dropdown-item>
                  <b-dropdown-item href="#">USA</b-dropdown-item>
                  <b-dropdown-item href="#">Australia</b-dropdown-item>
                </b-dropdown>
              </b-form-group>
            </b-col></b-row
          >
          <b-row>
            <b-col sm="12">
              <b-form-group
                id="input-group-2"
                class="text-left"
                label="Address"
                label-for="address"
              >
                <b-form-input
                  id="address"
                ></b-form-input> </b-form-group></b-col
          ></b-row>
          <b-row>
            <b-col sm="12">
              <b-form-group
                id="input-group-2"
                class="text-left"
                label="City"
                label-for="city"
              >
                <b-form-input id="city"></b-form-input> </b-form-group></b-col
          ></b-row>
          <b-row>
            <b-col sm="12">
              <b-form-group
                id="input-group-2"
                class="text-left"
                label="State"
                label-for="state"
              >
                <b-form-input id="state"></b-form-input> </b-form-group></b-col
          ></b-row>
          <b-row>
            <b-col sm="12">
              <b-form-group
                id="input-group-2"
                class="text-left"
                label="Postal Code"
                label-for="pcode"
              >
                <b-form-input id="pcode"></b-form-input> </b-form-group></b-col
          ></b-row>
          <b-row>
            <b-button>Create an account</b-button>
          </b-row>
        </b-col>

        <b-col sm="4"
          ><b-card>
            <b-row>
              <b-col class="text-left">
                <span>Product</span>
              </b-col>
              <b-col class="text-left">
                <span>Total</span>
              </b-col>
            </b-row>
            <hr />
            <b-row v-for="cart in cartInfo" :key="cart.id">
              <b-col class="text-left">
                <label>{{ cart.title }} x {{ cart.qty }}</label>
              </b-col>
              <b-col class="text-left">
                <span class="text-danger">EUR {{ getTotal(cart) }}</span>
              </b-col>
            </b-row>
            <hr />
            <b-row>
              <b-col class="text-left">
                <label>Subtotal:</label>
              </b-col>
              <b-col class="text-left">
                <span class="text-danger">EUR {{ getSubTotal() }}</span>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="text-left">
                <label>Shipping:</label>
              </b-col>
              <b-col class="text-left">
                <b-form-checkbox
                  id="checkbox-1"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                >
                  Free Shipping
                </b-form-checkbox>
                <b-form-checkbox
                  id="checkbox-2"
                  name="checkbox-2"
                  value="accepted"
                  unchecked-value="not_accepted"
                >
                  Local Pickup
                </b-form-checkbox>
              </b-col>
            </b-row>
            <hr />
            <b-row>
              <b-col class="text-left">
                <label>Total:</label>
              </b-col>
              <b-col class="text-left">
                <span class="text-danger">EUR {{ getSubTotal() }}</span>
              </b-col>
            </b-row>
            <hr />
            <b-row>
              <b-col class="text-left">
                <b-form-group v-slot="{ ariaDescribedby }">
                  <b-form-radio
                    :aria-describedby="ariaDescribedby"
                    name="some-radios"
                    value="stripe"
                    >Stripe</b-form-radio
                  >
                  <b-form-radio
                    :aria-describedby="ariaDescribedby"
                    name="some-radios"
                    value="paypal"
                    >Paypal</b-form-radio
                  >
                </b-form-group>
              </b-col>
            </b-row>

            <b-button class="float-right" href="#" variant="danger"
              >Place Order</b-button
            >
          </b-card></b-col
        >
      </b-row>
    </b-form>
  </div>
</template>

<script>
import TheHeader from "./Header.vue";

export default {
  components: { TheHeader },
  data() {
    return {
      qty: 1,
    };
  },
  props: {
    id: Number,
    title: String,
    price: Number,
    currency: String,
    image: String,
  },
  computed: {
    cartInfo() {
      return JSON.parse(localStorage.getItem("loggedUserCart"));
    },
  },
  methods: {
    getTotal(cart) {
      return (cart.price * cart.qty).toFixed(2);
    },
    getSubTotal() {
      return this.$store.state.cart
        .reduce((acc, curr) => {
          const tp = curr.price * curr.qty;
          return (acc += tp);
        }, 0)
        .toFixed(2);
    },
  },
};
</script>
