<template>
  <Main>
    <template #breadcrumbItems> Checkout </template>
    <template #content>
      <div v-if="carts != null && carts.length > 0" class="row">
        <div class="col-md-6">
          <h4>Billing Details</h4>

          <form id="billingForm" @submit.prevent="checkOut()" method="POST">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>
                    First Name: <span class="text-danger">*</span>
                  </label>

                  <input
                    type="text"
                    class="form-control"
                    required
                    placeholder="Enter first name"
                    v-model="checkOutData.firstName"
                    autofocus
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label> Last Name: <span class="text-danger">*</span></label>

                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter first name"
                    required
                    v-model="checkOutData.lastName"
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label> Phone: <span class="text-danger">*</span></label>

                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter phone"
                    required
                    v-model="checkOutData.phone"
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label> Email Address </label>

                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter email address"
                    v-model="checkOutData.email"
                  />
                </div>
              </div>

              <div class="col-md-12">
                <div class="form-group">
                  <label>
                    Select Country: <span class="text-danger">*</span>
                  </label>

                  <select
                    v-model="checkOutData.country"
                    required
                    class="form-control"
                  >
                    <option value="">Please select country</option>
                    <option
                      v-for="country in countries"
                      :key="country.id"
                      :value="country.id"
                    >
                      {{ country.name }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="col-md-12">
                <div class="form-group">
                  <label> Address: <span class="text-danger">*</span></label>

                  <input
                    required
                    type="text"
                    class="form-control"
                    placeholder="Enter address"
                    v-model="checkOutData.address"
                  />
                </div>
              </div>

              <div class="col-md-12">
                <div class="form-group">
                  <label> Town/City: <span class="text-danger">*</span></label>

                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter town or city"
                    required
                    v-model="checkOutData.city"
                  />
                </div>
              </div>

              <div class="col-md-12">
                <div class="form-group">
                  <label>
                    State / Country: <span class="text-danger">*</span>
                  </label>

                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter state or country"
                    required
                    v-model="checkOutData.state"
                  />
                </div>
              </div>

              <div class="col-md-12">
                <div class="form-group">
                  <label>
                    Postel Code: <span class="text-danger">*</span>
                  </label>

                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter postel code"
                    pattern="[0-9]+"
                    required
                    v-model="checkOutData.pincode"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>

        <div class="col-md-6">
          <div class="border p-5 bg-light">
            <div class="row">
              <div class="col-xs-6 col-sm-6 col-md-9">
                <span class="font-weight-bold"> PRODUCTS </span>
              </div>
              <div class="col-xs-6 col-sm-6 col-md-3">
                <span class="font-weight-bold"> TOTAL </span>
              </div>
            </div>
            <hr />
            <div
              v-for="(cart, index) in carts"
              :key="index"
              class="border-bottom p-2 mt-3 row"
            >
              <div class="col-xs-6 col-sm-6 col-md-9">
                {{ index + 1 }}. {{ cart.product }} ({{ cart.size }},{{
                  cart.color
                }})
              </div>
              <div class="font-weight-bold col-xs-6 col-sm-6 col-md-3">
                ${{ cart.price.toFixed(2) }}
              </div>
            </div>

            <div class="mt-4 row">
              <div class="p-2 border-bottom col-xs-6 col-sm-6 col-md-9">
                <small class="font-weight-bold">Subtotal</small>
              </div>
              <div class="p-2 border-bottom col-xs-6 col-sm-6 col-md-3">
                <span class="font-weight-bold text-danger">
                  ${{ grandTotal.toFixed(2) }}
                </span>
              </div>
              <div class="p-2 border-bottom mt-3 col-xs-6 col-sm-6 col-md-8">
                <small class="font-weight-bold">Shipping</small>
              </div>
              <div class="p-2 border-bottom mt-3 col-xs-6 col-sm-6 col-md-4">
                <label>
                  <input
                    v-model="checkOutData.shipping"
                    required
                    form="billingForm"
                    type="radio"
                    value="free_Shipping"
                    id="free_Shipping"
                  />
                  Free Shipping
                </label>
                <br />
                <label>
                  <input
                    v-model="checkOutData.shipping"
                    required
                    form="billingForm"
                    type="radio"
                    value="local_Pickup"
                    id="local_Pickup"
                  />
                  Local Pickup
                </label>
              </div>
              <div class="p-3 border-bottom col-xs-6 col-sm-6 col-md-9">
                <small class="font-weight-bold">Total</small>
              </div>
              <div class="p-3 border-bottom col-xs-6 col-sm-6 col-md-3">
                <span class="font-weight-bold text-danger">
                  ${{ grandTotal.toFixed(2) }}
                </span>
              </div>

              <div class="p-3 col-12">
                <label>
                  <input
                    form="billingForm"
                    type="radio"
                    v-model="checkOutData.paymentMethod"
                    id="stripe_Payment"
                    value="stripe"
                    required
                  />
                  Stripe
                </label>
                <br />
                <label>
                  <input
                    form="billingForm"
                    type="radio"
                    v-model="checkOutData.paymentMethod"
                    id="paypal_Payment"
                    value="paypal"
                    required
                  />
                  Paypal
                </label>
              </div>

              <div class="col-12">
                <img
                  width="250px"
                  class="paymentprovider img-fluid"
                  src="@/assets/images/paymentproviders.png"
                  alt="payment_provider.png"
                />
              </div>

              <div class="offset-md-6 col-6">
                <button
                  type="submit"
                  form="billingForm"
                  class="float-right btn btn-md btn-danger"
                  :disabled="process"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else>
        <h4 class="text-center">
          <b-icon-cart3></b-icon-cart3> Your cart is empty
        </h4>
      </div>
    </template>
  </Main>
</template>

<script>
import Main from "@/views/Header.vue";

export default {
  components: {
    Main,
  },
  data() {
    return {
      grandTotal: 0,
      process: false,
      checkOutData: {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        country: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        shipping: "",
        paymentMethod: "",
        userid: this.$store.getters.fetchLoginUser.id,
      },
      countries: [
        {
          name: "India",
          id: "India",
        },
        {
          name: "South Africa",
          id: "South Africa",
        },
        {
          name: "United Arab Emirates",
          id: "United Arab Emirates",
        },
        {
          name: "USA",
          id: "USA",
        },
        {
          name: "Australia",
          id: "Australia",
        },
      ],
      carts: [],
    };
  },
  methods: {
    checkOut() {
      this.process = true;

      /** Submit order into local storage */
      var orders = JSON.parse(localStorage.getItem("myOrders"));
      orders = orders != null ? orders : [];

      var today = new Date();
      today.toISOString().substring(0, 10);

      orders.push({
        orderID : this.$uuid.v1(),
        date : today,
        billingDetails: this.checkOutData,
        items: this.carts,
      });

      localStorage.setItem("myOrders", JSON.stringify(orders));
      /** Done */

      localStorage.removeItem("cartStorage");
      this.$router.push({ name: "my.orders" }).catch(() => {});
    },
  },
  mounted() {
    this.carts = JSON.parse(localStorage.getItem("cartStorage"));

    if (this.carts != null && this.carts.length > 0) {
      this.carts = this.carts.filter((el) =>
        el.userid.match(this.$store.getters.fetchLoginUser.id)
      );

      this.carts.map((element) => {
        this.grandTotal += element.price;
      });
    }
  },
};
</script>

<style>
.paymentprovider {
  position: relative;
  right: 15px;
}
</style>
