<template>
  <b-container>
    <b-row class="mt-4">
      <b-col>
        <b-form v-if="show">
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

          <b-form-group
            id="input-group-2"
            label="Your Name:"
            label-for="input-2"
            class="mt-4"
          >
            <b-form-input
              id="input-2"
              placeholder="Enter name"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Address:"
            label-for="input-3"
            class="mt-4"
          >
            <b-form-input
              id="input-3"
              type="text"
              placeholder="Enter address"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Postal Code:"
            label-for="input-4"
            class="mt-4"
          >
            <b-form-input
              id="input-4"
              type="text"
              placeholder="Enter Postal Code"
              required
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary" class="mt-4">Submit</b-button>
          <b-button type="reset" variant="danger" class="mt-4">Reset</b-button>
        </b-form>
      </b-col>
      <b-col>
        <b-table :items="carts" :fields="fields">
          <template slot="bottom-row">
            <td><b>Total</b></td>
            <td />
            <td />
            <td><b>${{ cartTotal }}</b></td>
          </template>
        </b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Checkout",
  data() {
    return {
      fields: [
        "name",
        {
          key: "price",
          formatter: (value) => {
            return "$" + value;
          }
        },
        "quantity",
        {
          key: "total",
          formatter: (value, key, item) => {
            return "$" + item.quantity * item.price;
          },
        },
      ],
      carts: [],
      show: true,
    };
  },
  mounted (){
    this.carts = this.$store.state.cartProducts
  },
  computed: {
    cartTotal() {
      var totalSum = 0;
      for (var i = 0; i < this.carts.length; i++) {
        totalSum += this.carts[i].price * this.carts[i].quantity;
      }
      return totalSum;
    },
  },
};
</script>
