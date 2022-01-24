<template>
  <Main>
    <template #iteminbread>
      Checkout
    </template>
    <template #content>
      <div class="row">
        <div class="col-md-6">
          <h4>
            Billing Details
          </h4>

          <div class="row">
            <div class="mb-2 col-md-6">
              <div class="form-group">
                <label class="py-1">
                  First Name
                </label>

                <input type="text" class="form-control" placeholder="Enter first name">
              </div>
            </div>
            <div class="mb-2 col-md-6">
              <div class="form-group">
                <label class="py-1">
                  Last Name
                </label>

                <input type="text" class="form-control" placeholder="Enter first name">
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label class="py-1">
                  Phone
                </label>

                <input type="text" class="form-control" placeholder="Enter phone">
              </div>
            </div>

            <div class="mb-2 col-md-6">
              <div class="form-group">
                <label class="py-1">
                  Email Address
                </label>

                <input type="email" class="form-control" placeholder="Enter email address">
              </div>
            </div>

            <div class="mb-2 col-md-12">
              <div class="form-group">
                <label class="py-1">
                  Select Country
                </label>

                <select class="form-control">
                  <option value="">Please select country</option>
                  <option v-for="country in countries" :key="country.id" :value="country.id">{{ country.name }}</option>
                </select>
              </div>
            </div>

            <div class="mb-2 col-md-12">
              <div class="form-group">
                <label class="py-1">
                  Address
                </label>

               <input type="text" class="form-control" placeholder="Enter address">
              </div>
            </div>

            <div class="mb-2 col-md-12">
              <div class="form-group">
                <label class="py-1">
                  Town/City
                </label>

               <input type="text" class="form-control" placeholder="Enter town or city">
              </div>
            </div>

            <div class="mb-2 col-md-12">
              <div class="form-group">
                <label class="py-1">
                  State / Country:
                </label>

               <input type="text" class="form-control" placeholder="Enter state or country">
              </div>
            </div>

            <div class="mb-2 col-md-12">
              <div class="form-group">
                <label class="py-1">
                  Postel Code:
                </label>

               <input type="text" class="form-control" placeholder="Enter postel code" pattern="[0-9]+">
              </div>
            </div>

            <div class="mb-5 col-md-12">
              <a class="text-warning font-weight-bold" href="">
                Create Account ?
              </a>
            </div>

          </div>

        </div>

        <div class="col-md-6">
            <div class="border p-5 bg-light">
              <div class="row">
                  <div class="col-xs-6 col-sm-6 col-md-6">
                    Product
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-6">
                    TOTAL
                  </div>
                  <hr class="mt-4">
                  <div class="col-xs-6 col-sm-6 col-md-6">
                    BELTED DRESS X 1
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-6">
                    $185.00
                  </div>
                  <hr class="mt-4">
                  <div class="col-xs-6 col-sm-6 col-md-6">
                    <small>Subtotal</small>
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-6">
                    <span class="font-weight-bold text-danger">
                      $185.00
                    </span>
                  </div>

                  <div class="mt-3 col-xs-6 col-sm-6 col-md-6">
                    <small>Shipping</small>
                  </div>
                  <div class="mt-3 col-xs-6 col-sm-6 col-md-6">
                    <label>
                      <input type="checkbox" name="shipping" id="free_s"> Free Shipping
                    </label>
                    <br>
                    <label>
                      <input type="checkbox" name="shipping" id="lp"> Local Pickup
                    </label>
                  </div>
                  <hr class="mt-4">
                    <div class="col-xs-6 col-sm-6 col-md-6">
                    <small>Total</small>
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-6">
                    <span class="font-weight-bold text-danger">
                      $185.00
                    </span>
                  </div>
                  <hr class="mt-4">

                  <div class="col-12">
                    <label>
                      <input type="radio" name="payment" id="free_s"> Stripe
                    </label>
                    <br>
                    <label>
                      <input type="radio" name="payment" id="lp"> Paypal
                    </label>
                  </div>

                  <div class="col-12">
                    <img width="250px" class="paymentprovider img-fluid" src="../assets/images/paymentproviders.png" alt="payment_provider.png">
                  </div>

                  <div class="offset-md-6 col-6">
                    <button disabled class="pull-right btn btn-md btn-danger">
                      Place Order
                    </button>
                  </div>

              </div>
            </div>
        </div>
      </div>
    </template>
  </Main>
</template>

<script>
  import Main from './Main.vue';

  export default {
    components: {
      Main
    },
    data() {
      return {

        countries: [{
            name: 'India',
            id: 1
          },
          {
            name: 'South Africa',
            id: 2
          },
          {
            name: 'United Arab Emirates',
            id: 3
          },
          {
            name: 'USA',
            id: 4
          },
          {
            name: 'Australia',
            id: 5
          },


        ]
      }
    },
    mounted() {
      console.log('Hey i am mounted');
    }
  }
</script>

<style>
  .paymentprovider{
    position: relative;
    right: 15px;
  }
</style>