<template>
  <div>
    <b-container class="my-5">
      <h4 class="font-weight-bold">Checkout</h4>
      <b-form @submit.prevent="onSubmit" novalidate>
      <b-row>
        <b-col cols="7">
          <h6>Billing Details</h6>
          <b-alert variant="danger" v-if="showError" show dismissible>
            <p v-for="(err, ind) in errors" class="small mb-0" :key="ind">{{err}}</p>
          </b-alert>
          
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
              <b-form-select
          id="input-5"
          v-model="checkoutForm.country"
          :options="countries"
          required
        ></b-form-select>
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
import CartComponent from "../components/Cart/CartComponent.vue";

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
      countries: [{ text: 'Select One', value: null }, 'India', 'Algeria', 'China', 'Germany'],
      cart:[],
      errors:[],
      showError:false
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
      if(!this.checkoutForm.firstName){
        this.errors.push('First name is required.')
      }
      if(!this.checkoutForm.lastName){
        this.errors.push('Last name is required.')
      }
      if(!this.checkoutForm.phone){
        this.errors.push('Phone is required.')
      }
      if(!this.checkoutForm.email){
        this.errors.push('Email is required.')
      }
      if(!this.checkoutForm.country){
        this.errors.push('Country is required.')
      }
      if(!this.checkoutForm.address){
        this.errors.push('Address is required.')
      }
      if(!this.checkoutForm.townCity){
        this.errors.push('Town Or City is required.')
      }
      if(!this.checkoutForm.state){
        this.errors.push('State is required.')
      }
      if(!this.checkoutForm.postal){
        this.errors.push('Postal code is required.')
      }

      if(this.errors.length){
        this.showError = true;
        setTimeout(()=>{
          this.showError=false;
          this.errors = [];
        },3000)
      }else{
        localStorage.removeItem('cart');
        this.cart = [];
        alert('Order has been placed successfully.');
      }
    }
  }
};
</script>
