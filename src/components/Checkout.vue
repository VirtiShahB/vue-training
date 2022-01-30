<template>
   <b-card class="container">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
         <div class="row checkout-section">
            <span class="billing-section">
               <h2>Billing details</h2>
            </span>
            <div class="col-sm-6">
               <b-form-group id="input-group-2" label="First name" label-for="input-2" class="mb-4">
                  <b-form-input
                     id="input-2"
                     placeholder="First name"
                     required
                     ></b-form-input>
               </b-form-group>
               <b-form-group id="input-group-3" label="Last name" label-for="input-3" class="mb-4">
                  <b-form-input
                     id="input-3"
                     placeholder="Last name"
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
                     id="input-1"
                     type="email"
                     placeholder="Enter email"
                     required
                     ></b-form-input>
               </b-form-group>
               <b-form-group id="input-group-3" label="Country:" label-for="input-3" class="mb-4">
                  <b-form-select
                     id="input-3"
                     :options="countries"
                     required
                     ></b-form-select>
               </b-form-group>
               <b-form-group id="input-group-2" label="Phone" label-for="input-2" class="mb-4">
                  <b-form-input
                     id="input-2"
                     placeholder="Phone"
                     required
                     ></b-form-input>
               </b-form-group>
               <b-form-group id="input-group-2" label="Address" label-for="input-2" class="mb-4">
                  <b-form-input
                     id="input-2"
                     placeholder="Address"
                     required
                     ></b-form-input>
               </b-form-group>
               <b-form-group id="input-group-2" label="Town/City" label-for="input-2" class="mb-4">
                  <b-form-input
                     id="input-2"
                     placeholder="Town/City"
                     required
                     ></b-form-input>
               </b-form-group>
               <b-form-group id="input-group-2" label="State/Country" label-for="input-2">
                     <b-form-input
                        id="input-2"
                        placeholder="State/Country"
                        required
                        ></b-form-input>
                  </b-form-group>
                <b-form-group id="input-group-3" label="Postal Code" label-for="input-3">
                     <b-form-input
                        id="input-3"
                        placeholder="Postal Code"
                        required
                        ></b-form-input>
                </b-form-group>
            </div>
            <div class="col-sm-6">
               <b-card class="cart_section">
                    <div class="row">
                     <div class="col-sm-6">
                        <strong>Product</strong>
                        <hr>
                        <p>{{ ProductName }} ({{ Quantity }} x {{ Price }})</p>
                     </div>
                     <div class="col-sm-6">
                        <strong>Total</strong>
                        <hr>
                        <p>${{ Price }}</p>
                     </div>
                  </div>

                  <div class="row">
                     <div class="col-sm-6">
                        <p>Size ( {{Size}} )</p>
                     </div>
                  </div>

                  <hr>
                  <div class="row">
                     <div class="col-sm-6">
                        <p><strong>Subtotal</strong></p>
                        <p><strong>Shipping</strong></p>
                     </div>
                     <div class="col-sm-6">
                        <p :style="{color:'red'}">${{ Quantity * Price }}</p>
                        <p> <b-form-checkbox id="checkbox-1"  name="checkbox-1" value="free_shipping">Free Shipping</b-form-checkbox></p>
                        <p> <b-form-checkbox id="checkbox-2"  name="checkbox-2" value="local_pickup">Local pickup</b-form-checkbox></p>
                     </div>
                  </div>
                  <hr>
                  <div class="row">
                     <div class="col-sm-6">
                        <strong>Total</strong>
                     </div>
                     <div class="col-sm-6">
                        <p :style="{color:'red'}">${{ Quantity * Price }}</p>
                     </div>
                  </div>
                  <hr>

                  <div class="row">
                     <div class="col-sm-6">
                        <b-form-group v-slot="{ ariaDescribedby }">
                           <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="payment_type" value="Stripe">Stripe</b-form-radio>
                           <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="payment_type" value="Paypal">Paypal</b-form-radio>
                        </b-form-group>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-sm-6">
                        <p><b-img src="../../public/images/payment-icon.png" fluid alt="Responsive image"></b-img></p>
                     </div>
                  </div>

                  <div class="row">
                     <div class="col-sm-6" :style="{float:'right'}">
                        <b-button type="submit" variant="primary" class="placeorder">Place order</b-button>
                        <a @click="$router.go(-1)" tag="button" variant="warning" class="btn">Back</a>
                        </div>
                  </div>
               </b-card>
            </div>
         </div>
      </b-form>
   </b-card>
</template>
<script>
   export default {
       name:"Checkoout",
       data() {
         return {
            ProductName : localStorage.getItem('ProductName'),
            Price: localStorage.getItem('Price'),
            Quantity: localStorage.getItem('Quantity'),
            Size: localStorage.getItem('Size').toUpperCase(),
            selected: null,
            form: {
               email: '',
               name: '',
               country: null,
               checked: []
            },
            countries: [{ text: 'Select One', value: null }, 'India', 'Australia', 'Norway', 'France'],
            show: true
         }
       },
       methods: {
         onSubmit(event) {
           event.preventDefault()
           alert(JSON.stringify(this.form))
         },
         onReset(event) {
           event.preventDefault()
           // Reset our form values
           this.form.email = ''
           this.form.name = ''
           this.form.country = null
           this.form.checked = []
           // Trick to reset/clear native browser form validation state
           this.show = false
           this.$nextTick(() => {
             this.show = true
           })
         },
         goToHome(event) {
            event.preventDefault()
            this.$router.push('/');
         }
       }
     }
</script>
<style>
   .cart_section{
   background-color: rgb(247 244 244);
   }
   .billing-section{
   margin-bottom: 20px;
   }
   .row.checkout-section label {
   text-align: left;
   color: black;
   }
   .placeorder{
       margin-right: 20px;
   }
   button.router-link-active {
      background-color: #efe36f;
   }
</style>