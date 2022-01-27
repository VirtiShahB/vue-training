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
          :img-src="product.image"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <h5>
            {{ product.name
            }}<b-link
              :class="'float-end add-to-wishlist-' + product.id"
              @click="addToWishlist(product.id)"
            >
              <img
                v-if="wishListProducts.includes(product.id)"
                src="../../assets/heart-fill.svg"
              />
              <img v-else src="../../assets/heart.svg" />
            </b-link>
          </h5>
          <b-card-text>
            Price:
            <span class="text-danger">${{ product.price }}</span>
          </b-card-text>
          <b-card-text>
            Available Stock:
            <span class="text-success">{{ product.quantity }} Piece</span>
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
    getProducts() {
      this.$api.products.getProducts();
    },
    checkout() {
      if (this.$store.state.cart < 1) {
        alert("Your Cart is empty! Please Add Some Products!");
      } else {
        this.$router.push({ name: "Checkout" });
      }
    },
    addToWishlist(productId) {
      var product = this.$store.state.wishlist.find(
        (p) => p.id === parseInt(productId)
      );
      if (product) {
        this.$store.dispatch("removeToWishlist", {
          id: productId,
        });
        alert("Sucess! Removed product from wishlist successfully!");
      } else {
        this.$store.dispatch("addToWishlist", {
          id: productId,
        });
        alert("Sucess! Added in your wishlist successfully!");
      }
    },
  },
  computed: {
    wishListProducts() {
      return this.$store.state.wishlist.map(function (value) {
        return value.id;
      });
    },
  },
  mounted() {
    // this.getProducts();
  },
};
</script>

<style>
</style>