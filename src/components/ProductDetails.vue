<template>
  <div class="p-4">
    <div class="row">
      <span
        ><strong>{{ title }}</strong></span
      >
    </div>
    <div class="row align-items-center">
      <div class="col-1 pl-0">
        <b-form-rating
          style="padding: 0 !important"
          id="rating-sm-no-border"
          no-border
          inline
          value="4"
          size="sm"
        ></b-form-rating>
      </div>
      <div class="col-6">
        <span>write a review</span>
      </div>
    </div>
    <div class="row">
      <span style="color: grey" size="sm">Reference: {{ this.reference }}</span>
    </div>
    <div class="row">
      <span style="color: grey">Condition: {{ this.condition }}</span>
    </div>
    <div class="pl-0">
      <hr />
      <div class="row mt-2">
        <span>{{ title }}</span>
      </div>
      <div class="row mt-2">
        <span style="color: red"> $ {{ price }}</span>
      </div>
      <hr />
    </div>
    <div class="row align-items-center pl-0">
      <div class="pl-0">
        <b-form inline>
          <label style="color: grey">Quantity:</label>
          <b-form-input
            class="col-2 mb-2 mr-sm-2 mb-sm-0"
            id="input-1"
            type="text"
            v-model="qty"
            placeholder="Enter Quantity"
          ></b-form-input
          ><b-button
            squared
            class="border mb-2 mr-sm-2 mb-sm-0"
            variant="light"
            @click="incrementQty()"
            >+</b-button
          ><b-button
            squared
            class="border mb-2 mr-sm-2 mb-sm-0"
            variant="light"
            @click="decrementQty()"
            >-</b-button
          >
          <b-button squared :pressed="true" variant="danger"
            ><b-icon icon="cart"></b-icon
          ></b-button>
          <b-button
            @click="isInCart ? removeFromCart(id) : addToCart(id, qty)"
            squared
            variant="danger"
            >{{ isInCart ? "Remove" : "ADD TO CART" }}</b-button
          ></b-form
        >
      </div>
    </div>
    <div class="row mt-3 pl-0">
      <div style="font-size: 3rem">
        <b-icon icon="envelope" class="rounded-circle p-2 mr-2"></b-icon>
        <b-icon icon="printer" class="rounded-circle p-2 mr-2"></b-icon>

        <b-icon
          v-bind:icon="isInWishList(id) ? 'heart-fill' : 'heart'"
          @click="addToWishList(id)"
          class="rounded-circle p-2"
        ></b-icon>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductDetails",
  components: {},
  data() {
    return {
      qty: 1,
      isLiked: false,
      reference: Math.random().toString(36).substring(2, 10),
      condition: "New",
    };
  },
  props: {
    id: Number,
    title: String,
    price: Number,
    currency: String,
    image: String,
  },
  computed: {
    isInCart() {
      return this.$store.getters.isInCart(this.id);
    },
  },
  methods: {
    addToCart(id, qty) {
      this.$store.dispatch("addToCart", { id, qty });
    },
    removeFromCart(id) {
      this.$store.dispatch("removeFromCart", { id });
    },
    incrementQty() {
      this.qty++;
    },
    decrementQty() {
      if (this.qty > 1) {
        this.qty--;
      }
    },
    addToWishList(id) {
      const isPresent = this.$store.state.wishList.find((item) => {
        return item.id === id;
      });
      if (isPresent) {
        this.isLiked = false;
        this.$store.dispatch("removeFromWishList", { id });
      } else {
        this.isLiked = true;
        this.$store.dispatch("addToWishList", { id });
      }
    },
    isInWishList(id) {
      const isPresent = this.$store.state.wishList.find((item) => {
        return item.id === id;
      });

      return (this.isLiked = isPresent ? true : false);
    },
  },
};
</script>
<style scoped>
hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 !important;
}
</style>
