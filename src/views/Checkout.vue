<template>
  <div>
    <b-container class="my-5">
      <h4 class="font-weight-bold">Checkout</h4>
      <b-row>
        <b-col cols="7">
          <b-form @submit="onSubmit">
            <b-form-row>
              <b-form-group id="input-group-1" class="col-6" label="First Name">
              <b-form-input
                id="input-1"
                v-model="checkoutForm.firstName"
                type="text"
                trim
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" class="col-6" label="Last Name">
              <b-form-input
                id="input-2"
                v-model="checkoutForm.lastName"
                type="text"
                trim
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-3" class="col-6" label="Phone">
              <b-form-input
                id="input-3"
                v-model="checkoutForm.phone"
                type="number"
                trim
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-4" class="col-6" label="Email">
              <b-form-input
                id="input-4"
                v-model="checkoutForm.email"
                type="email"
                trim
                required
              ></b-form-input>
            </b-form-group>
            </b-form-row>
            <b-form-group id="input-group-5" label="Country">
              <b-form-input
                id="input-5"
                v-model="checkoutForm.country"
                type="text"
                trim
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-6" label="Address">
              <b-form-input
                id="input-6"
                v-model="checkoutForm.address"
                type="text"
                trim
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-7" label="Town/City">
              <b-form-input
                id="input-7"
                v-model="checkoutForm.townCity"
                type="text"
                trim
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-8" label="State">
              <b-form-input
                id="input-8"
                v-model="checkoutForm.state"
                type="text"
                trim
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-9" label="Postal Code">
              <b-form-input
                id="input-9"
                v-model="checkoutForm.postal"
                type="number"
                trim
                required
              ></b-form-input>
            </b-form-group>
            
          </b-form>
          <b-button variant="danger">Create an account</b-button>
        </b-col>
        <b-col cols="5">
          <cart-component :cart="cart"></cart-component>
          <b-button type="button" variant="primary" class="float-right mt-3">Place Order</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import CartComponent from "../components/Cart/CartComponent.vue";

export default {
  components: { CartComponent },
  data() {
    return {
      checkoutForm: {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        country: "",
        address: "",
        townCity: "",
        state: "",
        postal: "",
      },
      cart:[]
    };
  },
  created() {
     let cartItems = JSON.parse(localStorage.getItem("cart"));
    if (cartItems) {
      this.cart = cartItems;
    }
  },
  methods:{
    onSubmit(){

    }
  }
};
</script>
