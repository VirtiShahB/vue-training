<template>
  <main class="mt-5 pt-4">
    <div class="container wow fadeIn">
      <h2 class="my-8 h2">Checkout form</h2>
      <div class="row">
        <div class="col-md-8 mb-4">
          <!--Card-->
          <div class="card">
            <!--Card content-->
            <form class="card-body">
              <!--Grid row-->
              <div class="row">
                <!--Grid column-->
                <div class="col-md-6 mb-2">
                  <!--firstName-->
                  <div class="md-form">
                    <label for="firstName" class="">First name</label>
                    <input type="text" id="firstName" class="form-control" />
                  </div>
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-md-6 mb-2">
                  <!--lastName-->
                  <div class="md-form">
                    <label for="lastName" class="">Last name</label>
                    <input type="text" id="lastName" class="form-control" />
                  </div>
                </div>

                <!--Grid column-->
              </div>
              <!--Grid row-->

              <div class="row">
                <!--Grid column-->
                <div class="col-md-6 mb-2">
                  <!--firstName-->
                  <div class="md-form">
                    <label for="phone" class="">Phone</label>
                    <input type="text" id="phone" class="form-control" />
                  </div>
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-md-6 mb-2">
                  <!--lastName-->
                  <div class="md-form">
                    <label for="email" class="">Email</label>
                    <input type="text" id="email" class="form-control" />
                  </div>
                </div>

                <!--Grid column-->
              </div>
              <!--Grid row-->

              <div class="row">
                <!--Grid column-->
                <div class="col-md-6 mb-2">
                  <!--firstName-->
                  <div class="md-form">
                    <label for="country" class="">Country</label>
                    <input type="text" id="country" class="form-control" />
                  </div>
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-md-6 mb-2">
                  <!--lastName-->
                  <div class="md-form">
                    <label for="state" class="">State</label>
                    <input type="text" id="state" class="form-control" />
                  </div>
                </div>

                <!--Grid column-->
              </div>
              <!--Grid row-->

              <div class="row">
                <!--Grid column-->
                <div class="col-md-6 mb-2">
                  <!--firstName-->
                  <div class="md-form">
                    <label for="city" class="">City</label>
                    <input type="text" id="city" class="form-control" />
                  </div>
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-md-6 mb-2">
                  <!--lastName-->
                  <div class="md-form">
                    <label for="zipcode" class="">Zipcode</label>
                    <input type="text" id="zipcode" class="form-control" />
                  </div>
                </div>

                <!--Grid column-->
              </div>
              <!--Grid row-->

              <!--address-->
              <div class="md-form mb-5">
                <label for="address" class="">Address</label>
                <input
                  type="text"
                  id="address"
                  class="form-control"
                  placeholder="1234 Main St"
                />
              </div>

              <!--address-2-->
              <div class="md-form mb-5">
                <label for="address-2" class="">Shipping Address</label>
                <input
                  type="text"
                  id="address-2"
                  class="form-control"
                  placeholder="Apartment or suite"
                />
              </div>

              <hr class="mb-4" />
              <button class="btn btn-primary btn-lg btn-block" type="submit">
                Continue to checkout
              </button>
            </form>
          </div>
          <!--/.Card-->
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-md-4 mb-4">
          <!-- Heading -->

          <!-- Cart -->
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
            >
              <div style="display: flex">
                <img :src="pimage" alt="" style="width: 50px" />
                <ul style="list-style: none">
                  <li>
                    <small class="text-muted">{{
                      this.$route.query.name
                    }}</small>
                  </li>
                  <li>
                    <small class="text-muted p-price"
                      >{{ this.$route.query.price }}X{{
                        this.$route.query.cart
                      }}</small
                    >
                  </li>
                </ul>
              </div>
              <span class="text-muted">${{ ptotal }}</span>
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
          <!-- Cart -->

          <!-- Promo code -->
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
          <!-- Promo code -->

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
        <!--Grid column-->
      </div>
      <!--Grid row-->
    </div>
  </main>
  <!--Main layout-->
</template>
<script>
export default {
  name: "CheckoutDetail",
  data() {
    return {
      ptotal: this.$route.query.price * this.$route.query.cart,
      pimage: this.$route.query.mainimage,
      promocode: 5,
      maintotal: this.$route.query.price * this.$route.query.cart - 5,
    };
  },
};
</script>