<template>
  <div>
    <h3 class="text-left">Shopping Cart</h3><br>
    <b-table-simple>
      <b-thead>
        <b-tr>
          <b-th class="text-left">Products</b-th>
          <b-th>Quntity</b-th>
          <b-th>Price</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="(c, index) of cart" :key="index">
          <b-td>
            <b-row>
              <b-col class="text-left">
                <img
                  :src="require('@/assets/images/' + c.image)"
                  alt=""
                  class="d-inline-block img-fluid col-1"
                />
                <span class="cart_book_title d-inline-block">
                  <router-link :to="{ name: 'ProductDetail', params: {id:c.id,item:c}}">{{ c.title }}</router-link>
                </span>
              </b-col>
            </b-row>
          </b-td>
          <b-td>{{ c.qty ? c.qty : 0 }}</b-td>
          <b-td>
            <span class="item_price ">{{
              "₹ " + c.price * c.qty
            }}</span></b-td
          >
        </b-tr>
        <b-tr>
          <b-td></b-td>
          <b-td>
            <p class="text-center" v-if="! total">No item in your cart</p>
          </b-td>
          <b-td>
            <strong v-if="total">Total: {{ "₹ " + total }}</strong>
          </b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
    <div class="text-right">
      <b-button variant="primary" class="mr-5 " size="lg"> 
        <router-link class="checkout_btn" to="/checkout">Checkout</router-link>
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      cart: [],
    };
  },
  computed: {
    total() {
      return this.cart.reduce((acc, c) => acc + c.price * c.qty, 0);
    },
  },
  methods: {
    getCart() {
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      this.cart = JSON.parse(localStorage.getItem("cart"));
    },
  },
  beforeMount() {
    this.getCart();
  },
};
</script>

<style scoped>
.item_price {
  font-size: 20px;
}
.cart_book_title {
  margin-left: 10px;
  font-weight: 700;
  vertical-align: top;
}
.checkout_btn{
  color: #fff;
  text-decoration: none;
}
</style>
