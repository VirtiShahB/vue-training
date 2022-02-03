<template>
  <div>
    <h3 class="text-left">Checkout</h3>
    <br />
    <b-form @submit="onSubmit" class="checkour_form">
      <b-row>
        <b-col>
          <b-row>
            <b-col>
              <b-form-group label="First Name" label-for="first_name">
                <b-form-input
                  id="first_name"
                  v-model="form.first_name"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="Last Name" label-for="last_name">
                <b-form-input
                  id="last_name"
                  v-model="form.last_name"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group label="Phone" label-for="phone">
                <b-form-input id="phone" v-model="form.phone"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="Email" label-for="email">
                <b-form-input
                  id="email"
                  v-model="form.email"
                  type="email"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-form-group label="Country" label-for="country">
            <b-form-select
              id="country"
              v-model="form.country"
              :options="country"
            ></b-form-select>
          </b-form-group>
          <b-form-group label="Address" label-for="address">
            <b-form-input id="address" v-model="form.address"></b-form-input>
          </b-form-group>
          <b-form-group label="City" label-for="city">
            <b-form-input id="city" v-model="form.city"></b-form-input>
          </b-form-group>
          <b-form-group label="State" label-for="state">
            <b-form-input id="state" v-model="form.state"></b-form-input>
          </b-form-group>
          <b-form-group label="Postal Code" label-for="postal_code">
            <b-form-input
              id="postal_code"
              v-model="form.postal_code"
              type="number"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-card class="text-center">
            <div>
              <b-table-simple class="checkout_table">
                <b-thead>
                  <b-tr>
                    <b-th class="text-left">Products</b-th>
                    <b-th>Total</b-th>
                  </b-tr>
                </b-thead>
                <b-tbody>
                  <b-tr
                    v-for="(c, index) of cart"
                    :key="index"
                    class="data_row"
                  >
                    <b-td class="text-left">
                      <span>{{ c.title + " X " + c.qty }}</span>
                    </b-td>
                    <b-td>
                      <span>{{ "₹ " + c.price * c.qty }}</span>
                    </b-td>
                  </b-tr>
                  <b-tr>
                    <b-td class="text-left">
                      <span>Subtotal</span>
                    </b-td>
                    <b-td>
                      <span class="red">{{ "₹ " + total }}</span>
                    </b-td>
                  </b-tr>
                  <b-tr>
                    <b-td class="text-left">
                      <span>Shipping</span>
                    </b-td>
                    <b-td>
                      <b-form-checkbox-group
                        v-model="form.shipping_type"
                        id="shipping_type"
                      >
                        <b-form-checkbox value="1"
                          >Free Shipping</b-form-checkbox
                        >
                        <b-form-checkbox value="2"
                          >Local Pickup</b-form-checkbox
                        >
                      </b-form-checkbox-group>
                    </b-td>
                  </b-tr>
                  <b-tr>
                    <b-td class="text-left">
                      <span>Total</span>
                    </b-td>
                    <b-td>
                      <span class="red">{{ "₹ " + total }}</span>
                    </b-td>
                  </b-tr>
                </b-tbody>
              </b-table-simple>
              <div class="text-right mr-5">
                <b-button type="submit" variant="primary">Place Order</b-button>
              </div>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
import { mixin } from "../mixin";

export default {
  mixins: [mixin],
  data() {
    return {
      cart: [],
      form: {
        first_name: "",
        last_name: "",
        email: "",
        address: "",
        city: "",
        state: "",
        postal_code: "",
        country: null,
        shipping_type: [],
      },
      country: ["India", "USA", "UK"],
    };
  },
  computed: {
    total() {
      return this.cart.reduce((acc, c) => acc + c.price * c.qty, 0);
    },
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      JSON.stringify(this.form);
    },
  },
  beforeMount() {
    this.getCart();
  },
};
</script>

<style scoped>
.checkour_form {
  text-align: left;
}
.checkout_table .data_row td {
  padding: 2px 0.75rem;
  border-top: none;
}
</style>
