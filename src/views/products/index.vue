<template>
  <b-container class="bv-example-row mt-3">
    <div
      v-if="!this.$store.state.isEmptyCart"
      class="row d-flex flex-row-reverse"
    >
      <b-col sm="12" class="mb-1">
        <b-button
          href="#"
          class="float-end"
          block
          size="md"
          variant="success"
          @click="checkout"
          >Check-out</b-button
        >
      </b-col>
    </div>
    <b-row>
      <b-col
        sm="3"
        class="mt-1"
        v-for="product in this.$store.state.products"
        :key="product.id"
      >
        <b-card
          :title="product.title"
          :img-src="product.image"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text>
            Price:
            <span class="text-danger">${{ product.price }}</span>
          </b-card-text>
          <b-card-text>
            Available Stock:
            <span class="text-success">{{ product.stock }} Piece</span>
          </b-card-text>
          <router-link
            class="btn btn-outline-primary"
            :to="'/product/' + product.id"
            >View Details</router-link
          >
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: "Products",
  methods: {
    checkout: function () {
      if (this.$store.state.cart < 1) {
        alert("Your Cart is empty! Please Add Some Products!");
      } else {
        this.$router.push({ name: "Checkout" });
      }
    },
  },
};
</script>

<style>
</style>