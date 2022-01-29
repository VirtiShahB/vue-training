<template>
  <div>
    <b-card no-body header="Cart">
      <b-list-group flush>
        <b-list-group-item class="text-danger" v-if="cart.length == 0">
          Cart is empty
        </b-list-group-item>
        <cart-item-component
          v-for="(item, ind) in cart"
          :key="ind"
          :cart="item"
        ></cart-item-component>
      </b-list-group>
      <b-card-footer>
        <div class="d-flex flex-row justify-content-between">
          <h6>SubTotal</h6>
          <h6 class="text-danger font-weight-bold">${{ getCartTotal }}</h6>
        </div>
      </b-card-footer>
      <b-card-body>
        <b-row>
          <b-col>Shipping</b-col>
          <b-col class="text-right">
            <b-form-group>
              <b-form-checkbox size="sm">Free Shipping</b-form-checkbox>
              <b-form-checkbox size="sm">Local Pickup</b-form-checkbox>
            </b-form-group>
          </b-col>
        </b-row>
      </b-card-body>
      <b-card-footer>
        <div class="d-flex flex-row justify-content-between">
          <h5>Total</h5>
          <h5 class="text-danger font-weight-bold">${{ getCartTotal }}</h5>
        </div>
      </b-card-footer>
    </b-card>
  </div>
</template>
<script>
import CartItemComponent from "./CartItemComponent.vue";
export default {
  components: { CartItemComponent },
  props: {
    cart: {
      type: Array,
      required: true,
    },
  },
  computed: {
    // To get the total of cart items and called when any changes happen in cart prop
    getCartTotal: function () {
      return this.cart.reduce(function (acc, obj) {
        return acc + obj.quantity * obj.price;
      }, 0);
    },
  },
};
</script>
