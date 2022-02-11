<template>
  <b-card class="container checkout-container">
    <b-form @submit="onSubmit" v-if="show">
      <div class="row checkout-section">
        <div class="col-sm-12">
          <h2>Billing details</h2>
        </div>
        <div class="col-sm-6">
          <b-form-group
            id="input-group-2"
            label="First name"
            label-for="input-2"
            class="mb-4"
          >
            <b-form-input
              id="firstName"
              placeholder="First name"
              v-model="form.firstName"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-3"
            label="Last name"
            label-for="input-3"
            class="mb-4"
          >
            <b-form-input
              id="lastName"
              placeholder="Last name"
              v-model="form.lastName"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
            class="mb-4"
          >
            <b-form-input
              id="email"
              type="email"
              placeholder="Enter email"
              v-model="form.email"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-3"
            label="Country:"
            label-for="input-3"
            class="mb-4"
          >
            <b-form-select
              id="input-3"
              :options="countries"
              required
            ></b-form-select>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Phone"
            label-for="input-2"
            class="mb-4"
          >
            <b-form-input
              id="phone"
              placeholder="Phone"
              v-model="form.phone"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Address"
            label-for="input-2"
            class="mb-4"
          >
            <b-form-input
              id="address"
              placeholder="Address"
              v-model="form.address"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Town/City"
            label-for="input-2"
            class="mb-4"
          >
            <b-form-input
              id="city"
              placeholder="Town/City"
              v-model="form.city"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="State/Country"
            label-for="input-2"
          >
            <b-form-input
              id="state"
              placeholder="State"
              v-model="form.state"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-3"
            label="Postal Code"
            label-for="input-3"
          >
            <b-form-input
              id="postalCode"
              placeholder="Postal Code"
              v-model="form.postalCode"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-sm-6">
          <b-card class="cart_section">
            <div class="row">
              <div class="col-sm-6">
                <strong>Product</strong>
                <hr />
                <p>{{ productName }} ({{ quantity }} x {{ price }})</p>
              </div>
              <div class="col-sm-6">
                <strong>Total</strong>
                <hr />
                <p>${{ price }}</p>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-6">
                <p>Size ( {{ size }} )</p>
              </div>
            </div>

            <hr />
            <div class="row">
              <div class="col-sm-6">
                <p><strong>Subtotal</strong></p>
                <p><strong>Shipping</strong></p>
              </div>
              <div class="col-sm-6">
                <p :style="{ color: 'red' }">${{ quantity * price }}</p>
                <p>
                  <b-form-checkbox
                    id="checkbox-1"
                    name="checkbox-1"
                    value="free_shipping"
                    >Free Shipping</b-form-checkbox
                  >
                </p>
                <p>
                  <b-form-checkbox
                    id="checkbox-2"
                    name="checkbox-2"
                    value="local_pickup"
                    >Local pickup</b-form-checkbox
                  >
                </p>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-6">
                <strong>Total</strong>
              </div>
              <div class="col-sm-6">
                <p :style="{ color: 'red' }">${{ quantity * price }}</p>
              </div>
            </div>
            <hr />

            <div class="row">
              <div class="col-sm-6">
                <b-form-group v-slot="{ ariaDescribedby }">
                  <b-form-radio
                    v-model="form.selected"
                    :aria-describedby="ariaDescribedby"
                    name="payment_type"
                    value="Stripe"
                    >Stripe</b-form-radio
                  >
                  <b-form-radio
                    v-model="form.selected"
                    :aria-describedby="ariaDescribedby"
                    name="payment_type"
                    value="Paypal"
                    >Paypal</b-form-radio
                  >
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <p>
                  <b-img
                    src="../../public/images/payment-icon.png"
                    fluid
                    alt="Responsive image"
                  ></b-img>
                </p>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-6" :style="{ float: 'right' }">
                <b-button type="submit" variant="primary" class="placeorder"
                  >Place order</b-button
                >
                <a
                  @click="$router.go(-1)"
                  tag="button"
                  variant="warning"
                  class="btn"
                  >Back</a
                >
              </div>
            </div>
          </b-card>
        </div>
      </div>
    </b-form>
  </b-card>
</template>
<script>
import toastMessage from "../mixins/ToastMessage";
export default {
  name: "Checkoout",
  mixins: [toastMessage],
  data() {
    return {
      productName: localStorage.getItem("productName"),
      price: localStorage.getItem("price"),
      quantity: localStorage.getItem("quantity"),
      size: localStorage.getItem("size").toUpperCase(),
      selected: null,
      form: {
        email: "",
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
        country: null,
        selected: "",
        checked: [],
        price: localStorage.getItem("price"),
        quantity: localStorage.getItem("quantity"),
        size: localStorage.getItem("size").toUpperCase(),
      },
      countries: [
        { text: "Select One", value: null },
        "India",
        "Australia",
        "Norway",
        "France",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      if (
        localStorage.getItem("loginnedUser") !== null &&
        localStorage.getItem("loginnedUser") != ""
      ) {
        localStorage.setItem("placedOrder", JSON.stringify(this.form));
        this.makeToastMessage("Thank you for placed order.", "success");
      } else {
        this.makeToastMessage(
          "Your account should be login. Please login.",
          "danger"
        );
      }
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.country = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    goToHome(event) {
      event.preventDefault();
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.cart_section {
  background-color: rgb(247 244 244);
}
.billing-section {
  margin-bottom: 20px;
}
.row.checkout-section label {
  text-align: left;
  color: black;
}
.placeorder {
  margin-right: 20px;
}
button.router-link-active {
  background-color: #efe36f;
}
p {
  font-size: 16px;
}
a.btn {
  background-color: darkgrey;
  font-size: large;
}
</style>
