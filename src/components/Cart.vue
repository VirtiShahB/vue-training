<template>
  <div>
    <b-container class="bv-example-row">
      <b-row v-for="(c) of cart" :key="c.id" class="mt-5">
        <b-col>
          <img :src="require('@/assets/images/'+c.image)" alt="" class="img-fluid col-2">
        </b-col>
        <b-col class="text-start">
          <h2>{{c.title}}</h2>
          <span>Qty: {{(c.qty)?c.qty:0}}</span><br>
          <span class="item_price">{{'₹ '+ (c.price * c.qty)}}</span><br>
        </b-col>
      </b-row><hr>
    </b-container>
    <label><strong>Total: {{'₹ '+total}}</strong></label>
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
      return this.cart.reduce((acc, c) => acc + (c.price * c.qty), 0);
    }
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
.item_price{
  font-size: 20px;
}
</style>