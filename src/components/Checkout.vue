<template>
  <div>
    <b-card no-body
        class="overflow-hidden product-card pink-background"
        style="margin: 1rem"
    >
    <b-form @submit="onSubmit" @reset="onReset" >
        <b-row no-gutters>
        <b-col md="6" class="d-flex align-items-center">        
            <b-card-body>         
                <b-card-title title-tag="h4">Checkout</b-card-title>
                
                    <b-row>
                        <b-col md="6">
                            <b-form-group id="input-group-2" label="First Name:" label-for="input-2">
                                <b-form-input
                                id="input-2"
                                v-model="form.name"
                                class="form-control"
                                required
                                ></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col md="6">
                            <b-form-group id="input-group-2" label="Last Name:" label-for="input-2">
                                <b-form-input
                                id="input-2"
                                v-model="form.name"
                                required
                                ></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row class="mt">
                        <b-col md="6">
                            <b-form-group
                            id="input-group-1"
                            label="Email address:"
                            label-for="input-1"
                        >
                        <b-form-input
                            id="input-1"
                            v-model="form.email"
                            type="email"
                            required
                        ></b-form-input>
                    </b-form-group>
                        </b-col>
                        <b-col md="6">
                            <b-form-group id="input-group-2" label="Phone Number:" label-for="input-2">
                                <b-form-input
                                id="input-2"
                                v-model="form.name"
                                type="number"
                                required
                                ></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>                
                    <b-form-group id="input-group-3" class="mt" label="Country:" label-for="input-3">
                        <b-form-select
                        id="input-3"
                        v-model="form.food"
                        :options="foods"
                        class="form-control"
                        required
                        ></b-form-select>
                    </b-form-group>
                    <b-form-group id="input-group-2" class="mt" label="Address:" label-for="input-2">
                        <b-form-input
                        id="input-2"
                        v-model="form.name"
                        class="form-control"                   
                        required
                    ></b-form-input>
                    </b-form-group>
                    <b-form-group id="input-group-2" class="mt" label="Town/City:" label-for="input-2">
                        <b-form-input
                        id="input-2"
                        v-model="form.name"
                        class="form-control"
                        required
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group id="input-group-2" class="mt" label="State:" label-for="input-2">
                        <b-form-input
                        id="input-2"
                        v-model="form.name"
                        class="form-control"
                        required
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group id="input-group-2" class="mt" label="Postal Code:" label-for="input-2">
                        <b-form-input
                        id="input-2"
                        v-model="form.name"
                        type="number"
                        required
                        ></b-form-input>
                    </b-form-group>               
                    <div class="mt">
                            <router-link  style="color:red;" to="">Create New Account?</router-link>
                    </div>   
            </b-card-body>                              
        </b-col>
        <b-col md="6">
            <b-card-body>         
            <b-row>
                <b-col md="6">
                <b-card-title title-tag="h6">Product Details</b-card-title>   
                </b-col>
                <b-col md="6">
                <b-card-title title-tag="h6">Total</b-card-title>
                </b-col>
            </b-row>
            <hr>
            <b-row>
                <b-col md="6">
                <span title-tag="p">Denim Jacket</span>   
                </b-col>
                <b-col md="6">
                <span title-tag="p">$ 200</span>
                </b-col>
            </b-row>
            <hr>
            <b-row>
                <b-col md="6">
                <span title-tag="p">Subtotal</span>   
                </b-col>
                <b-col md="6">
                <span title-tag="p">$ 200</span>
                </b-col>
            </b-row>
            <b-row class="mt">
                <b-col md="6">
                <span title-tag="p">Shipping</span>   
                </b-col>
                <b-col md="6">
                    <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
                        <b-form-checkbox-group
                        v-model="form.checked"
                        id="checkboxes-4"
                        :aria-describedby="ariaDescribedby"
                        >
                            <b-form-checkbox value="me">Free Shipping</b-form-checkbox>
                            <b-form-checkbox value="that">Local Pickup</b-form-checkbox>
                        </b-form-checkbox-group>
                    </b-form-group>
                </b-col>
            </b-row>
            <hr>
            <b-row>
                <b-col md="6">
                <span title-tag="p">Total</span>   
                </b-col>
                <b-col md="6">
                    <span title-tag="p" style="color:red;">$ 200</span>
                </b-col>
            </b-row>
                <b-button type="submit" class="mt float-right" variant="danger">Place Order</b-button>               
            </b-card-body>
        </b-col>
        </b-row>
    </b-form>
  </b-card>
 
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'India', 'Singapore', 'Canada', 'United Kingdom'],
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
      }
    }
  }
</script>
<style scoped>
.mt{
    margin-top:10px;
}
.float-right{
    float:right;
}
</style>