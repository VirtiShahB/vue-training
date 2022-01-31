<template>
  <div class="p-4">
    <Header />
    <div class="row">
      <b-button class="mr-3" variant="outline-primary" @click="openCart()"
        >Cart</b-button
      >
      <b-button class="mr-3" variant="outline-primary" @click="openWishlist()"
        >Wishlist</b-button
      >
    </div>
    <div class="row">
      <span
        ><strong>{{ name }}</strong></span
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
      <span style="color: grey" size="sm">Reference:</span>
    </div>
    <div class="row">
      <span style="color: grey">Condition:</span>
    </div>
    <div class="pl-0">
      <hr />
      <div class="row mt-2">
        <span>{{ name }}</span>
      </div>
      <div class="row mt-2">
        <span style="color: red">{{ currency }} {{ price }}</span>
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
          v-bind:icon="isLiked ? 'heart-fill' : 'heart'"
          @click="addToWishList(id)"
          class="rounded-circle p-2"
        ></b-icon>
      </div>
    </div>
    <div class="row align-items-center pl-0">
      <div class="col-1 pl-0">
        <span style="color: grey; font-size: 0.9rem">Size:</span>
      </div>
      <div class="col-1 pl-0">
        <b-dropdown
          split
          split-variant="outline-seccondary"
          variant="light"
          text="S"
          class="border"
        >
          <b-dropdown-item href="#">S</b-dropdown-item>
          <b-dropdown-item href="#">M</b-dropdown-item>
          <b-dropdown-item href="#">L</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "./Header.vue";

export default {
  name: "ProductDetails",
  components: {
    Header,
  },
  data() {
    return {
      qty: 1,
      isLiked: false,
    };
  },
  props: {
    id: Number,
    name: String,
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
      if (this.qty > 0) {
        this.qty--;
      }
    },
    openCart() {
      this.$router.push({
        name: "checkout",
        params: { cart: this.$store.state.cart },
      });
    },
    addToWishList(id) {
      this.isLiked = true;
      this.$store.dispatch("addToWishList", { id });
    },
    openWishlist() {
      this.$router.push({
        name: "wishlist",
        params: { wishList: this.$store.state.wishList },
      });
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
