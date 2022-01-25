<template>
  <div>
    <b-card
      img-src="https://placekitten.com/300/300"
      img-alt="Card image"
      img-left
      class="mb-3"
    >
      <b-card-text>
        <h3>{{ product.name }}</h3>
        <hr />
        <h5>{{ product.description }}</h5>
        <h5>${{ product.price }}</h5>
        <b-col sm="2">
          <b-button
            variant="outline-primary"
            class="mt-3 mr-md-5"
            style="margin-right: 10px"
            @click="incQty()"
            >+</b-button
          >
          <span class="cart__quantity">{{ product.quantity }}</span>
          <b-button
            variant="outline-primary"
            class="mt-3 mr-3"
            @click="decQty()"
            >-</b-button
          >
        </b-col>
        <b-button
          variant="outline-primary"
          class="mt-3 mr-3"
          style="margin-right: 10px"
          @click="updateCart()"
          >Add to cart</b-button
        >
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {};
  },
  methods: {
    incQty() {
      this.product.quantity += 1;
    },
    decQty() {
      if (this.product.quantity > 0) {
        this.product.quantity -= 1;
      }
    },
    updateCart() {
      this.$root.$emit("cartcount", this.product.quantity);
      var cartProducts = this.$parent.cartProducts;

      if (cartProducts.length < 1) {
        cartProducts.push(this.product);
      } else {
        for (var i = 0; i < cartProducts.length; i++) {
          if (cartProducts[i].id != this.product.id) {
            cartProducts.push(this.product);
          }
        }
      }
      window.localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    },
  },
};
</script>

<style>
.cart__quantity {
  font-size: 1.5rem;
  margin: 0 1rem;
}
</style>
