<template>
  <main class="mt-5 pt-4">
    <div class="container wow fadeIn">
      <h2 class="my-8 h2">Checkout form</h2>
      <div class="row">
        <div class="col-md-8 mb-4">
          <div class="card">
            <form class="card-body" @submit.stop.prevent>
              <div class="row">
                <div class="col-md-6 mb-2">
                  <div class="md-form">
                    <label for="firstName" class="">First name</label>
                    <input type="text" id="firstName" class="form-control" v-model="firstname" name="firstname"/>
                  </div>
                </div>

                <div class="col-md-6 mb-2">
                  <div class="md-form">
                    <label for="lastName" class="">Last name</label>
                    <input type="text" id="lastName" class="form-control" v-model="lastname" name="lstname"/>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-2">
                  <div class="md-form">
                    <label for="phone" class="">Phone</label>
                    <input type="number" id="phone" class="form-control" v-model="phone" name="phone"/>
                  </div>
                </div>

                <div class="col-md-6 mb-2">
                  <div class="md-form">
                    <label for="email" class="">Email</label>
                    <input type="text" id="email" class="form-control" v-model="email" name="email"/>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-2">
                  <div class="md-form">
                    <label for="country" class="">Country</label>
                    <input type="text" id="country" class="form-control" v-model="country" name="country"/>
                  </div>
                </div>

                <div class="col-md-6 mb-2">
                  <div class="md-form">
                    <label for="state" class="">State</label>
                    <input type="text" id="state" class="form-control" v-model="state" name="state"/>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-2">
                  <div class="md-form">
                    <label for="city" class="">City</label>
                    <input type="text" id="city" class="form-control" v-model="city" name="city"/>
                  </div>
                </div>

                <div class="col-md-6 mb-2">
                  <div class="md-form">
                    <label for="zipcode" class="">Zipcode</label>
                    <input type="text" id="zipcode" class="form-control" v-model="zipcode" name="zipcode"/>
                  </div>
                </div>
              </div>

              <div class="md-form mb-5">
                <label for="address" class="">Address</label>
                <input
                  type="text"
                  id="address"
                  class="form-control"
                  placeholder="1234 Main St"
                  v-model="address" name="address"
                />
              </div>

              <div class="md-form mb-5">
                <label for="address-2" class="">Shipping Address</label>
                <input
                  type="text"
                  id="address-2"
                  class="form-control"
                  placeholder="Apartment or suite"
                  v-model="shippingaddress" name="shippingaddress"
                />
              </div>

              <hr class="mb-4" />
              <button class="btn btn-primary btn-lg btn-block" type="submit" @click="Submit">
                Continue to checkout
              </button>

               <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                  <li v-for="error in errors" :key="error">{{ error }}</li>
                </ul>
              </p>
            </form>
          </div>
        </div>

        <div class="col-md-4 mb-4">
          <ul class="list-group mb-3 z-depth-1">
            <li
              class="
                list-group-item
                d-flex
                justify-content-between
                lh-condensed
              "
            >
              <h5>Products</h5>
            </li>
            <li
              class="
                list-group-item
                d-flex
                justify-content-between
                lh-condensed
              "
              v-for="products in ProdcutList"
              :key="products.PID"
              :id="products.PID"
            >
              <div style="display: flex">
                <img :src="products.PIMAGE" alt="" style="width: 50px" />
                <ul style="list-style: none">
                  <li>
                    <small class="text-muted">{{ products.PNAME }}</small>
                  </li>
                  <li>
                    <small class="text-muted p-price"
                      >{{ products.RealPrice }}X{{products.QUANTITY}}</small
                    >
                  </li>
                </ul>
              </div>
              <span class="text-muted">${{ products.PPRICE }}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between bg-light">
              <div class="text-success">
                <h6 class="my-0">Promo code</h6>
                <small>EXAMPLECODE</small>
              </div>
              <span class="text-success">-${{ promocode }}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>${{ maintotal }}</strong>
            </li>
          </ul>

          <form class="card p-2">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Promo code"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-secondary btn-md waves-effect m-0"
                  type="button"
                >
                  Redeem
                </button>
              </div>
            </div>
          </form>

          <div class="card mb-4 mb-lg-0">
            <div class="card-body">
              <p><strong>We accept</strong></p>
              <img
                class="me-2"
                width="45px"
                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                alt="Visa"
              />
              <img
                class="me-2"
                width="45px"
                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                alt="American Express"
              />
              <img
                class="me-2"
                width="45px"
                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                alt="Mastercard"
              />
              <img
                class="me-2"
                width="45px"
                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                alt="PayPal acceptance mark"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: "CheckoutDetail",
  data() {
    return {
      promocode: 5,
      maintotal: 0,
      ProdcutList: [],
      errors: [],
      firstname: null,
      lastname: null,
      phone: null,
      email: null,
      country: null,
      state: null,
      city: null,
      zipcode: null,
      address: null,
      shippingaddress: null,
      products: [],
      Orders: [],
    };
  },
  created() {
    this.ProdcutList = JSON.parse(localStorage.getItem("SelectedProducts"));
    var total = 0;
    this.ProdcutList.forEach((element) => {
      total += element.PPRICE;
      this.products.push(element.PID);
    });
    this.maintotal = total - this.promocode;
  },
  methods: {
    Submit() {
      this.submitted = true;
      this.errors = [];

      if (!this.firstname) {
        this.errors.push("First Name required.");
      }
      if (!this.lastname) {
        this.errors.push("Last Name required.");
      }
      if (!this.phone) {
        this.errors.push("Phone required.");
      }
      if (!this.email) {
        this.errors.push("Email required.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Valid email required.");
      }
      if (!this.country) {
        this.errors.push("Country required.");
      }
      if (!this.state) {
        this.errors.push("State required.");
      }
      if (!this.city) {
        this.errors.push("City required.");
      }
      if (!this.zipcode) {
        this.errors.push("Zipcode required.");
      }
      if (!this.address) {
        this.errors.push("Address required.");
      }
      if (!this.shippingaddress) {
        this.errors.push("Shipping Address required.");
      }

      if (!this.errors.length) {
        var OrderDetails = {};
        OrderDetails["orderId"] = Math.floor(Math.random() * (100 - 1 + 1) + 1);
        OrderDetails["firstName"] = this.firstname;
        OrderDetails["lastName"] = this.lastname;
        OrderDetails["email"] = this.email;
        OrderDetails["phone"] = this.phone;
        OrderDetails["country"] = this.country;
        OrderDetails["state"] = this.state;
        OrderDetails["city"] = this.city;
        OrderDetails["zipcode"] = this.zipcode;
        OrderDetails["address"] = this.address;
        OrderDetails["shippingAddress"] = this.shippingaddress;
        OrderDetails["total"] = this.maintotal;
        OrderDetails["products"] = this.products;
        OrderDetails["pro"] = this.ProdcutList;
        OrderDetails["discount"] = this.promocode;
        this.Orders.push(OrderDetails);
        localStorage.setItem("OrderDetails", JSON.stringify(this.Orders));
        localStorage.removeItem("cartProduct");
        this.$store.commit("removeCart");
        this.$store.commit("removeItemQTY");
        localStorage.removeItem("SelectedProducts");
        this.$store.commit("SetOrders", this.Orders);
        this.$router.push({ path: "/thankYou" });
        return true;
      }
    },
    validEmail: function (email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>
<style scoped>
img {
  width: 50px;
  height: unset;
  display: unset;
}
ul li {
  list-style: none;
  color: red;
}
</style>
