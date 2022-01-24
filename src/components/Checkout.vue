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
                     :options="foods"
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
                  <b-form-group id="input-group-2" label="Product" label-for="input-2">
                     <b-form-input
                        id="input-2"
                        placeholder="Product"
                        required
                        ></b-form-input>
                  </b-form-group>
                  <b-form-group id="input-group-3" label="Postal Code" label-for="input-3">
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
                     >
                     <b-form-input
                        id="input-1"
                        type="email"
                        placeholder="Enter email"
                        required
                        ></b-form-input>
                  </b-form-group>
                  <b-form-group id="input-group-3" label="Food:" label-for="input-3">
                     <b-form-select
                        id="input-3"
                        :options="foods"
                        required
                        ></b-form-select>
                  </b-form-group>
                  <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
                     <b-form-checkbox-group
                        id="checkboxes-4"
                        :aria-describedby="ariaDescribedby"
                        >
                     </b-form-checkbox-group>
                  </b-form-group>
                  <b-button type="submit" variant="primary" class="placeorder">Place order</b-button>
                  <b-button type="button" variant="warning" @click="goToHome()">Back</b-button>
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
           form: {
             email: '',
             name: '',
             food: null,
             checked: []
           },
           foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
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
           this.form.food = null
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
</style>