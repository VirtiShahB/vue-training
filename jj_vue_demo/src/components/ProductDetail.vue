<template>
  <div class="container">
    <b-card
      :img-src="product.img"
      img-alt="Card image"
      img-left
      class="mb-3 mt-4"
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
        ><b-button
          v-b-toggle.sidebar-right
          variant="outline-primary"
          class="mt-3 mr-3"
          style="margin-left: 3px"
          @click="showSimilar()"
          >View Similar</b-button
        >
        <br />
        <b-icon-suit-heart
          v-if="showIcon"
          @click="updateWishlist('add')"
          scale="1"
          class="mr-3 mt-3"
        ></b-icon-suit-heart>
        <b-icon-suit-heart-fill
          v-else
          scale="1"
          class="mr-3 mt-3"
          @click="updateWishlist('remove')"
        ></b-icon-suit-heart-fill>
      </b-card-text>
    </b-card>
    <div>
      <b-sidebar id="sidebar-right" title="Recommended" right shadow>
        <div class="px-3 py-2">
          <ul
            v-for="similarProduct in similarProducts"
            :key="similarProduct.id"
          >
            <b-card
              :img-src="similarProduct.img"
              img-alt="Card image"
              img-left
              class="mb-3 mt-4"
            >
              <b-card-text>
                <h3>{{ similarProduct.name }}</h3>
                <hr />
                <h5>{{ similarProduct.description }}</h5>
                <h5>${{ similarProduct.price }}</h5>
                <b-button
                  variant="outline-primary"
                  class="mt-3 mr-3"
                  style="margin-right: 10px"
                  @click="showProduct(similarProduct)"
                  >View Product</b-button
                >
              </b-card-text>
            </b-card>
          </ul>
        </div>
      </b-sidebar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
      products: [],
      showIcon: true,
      similarProducts: [],
    };
  },
  mounted() {
    this.products = this.$store.state.products;
  },
  created() {
    this.product = this.$route.params.data;
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
      var cartProducts = this.$store.state.cartProducts;

      if (cartProducts.length < 1) {
        cartProducts.push(this.product);
      } else {
        for (var i = 0; i < cartProducts.length; i++) {
          if (cartProducts[i].id != this.product.id) {
            cartProducts.push(this.product);
          }
        }
      }
    },
    updateWishlist(productAction) {
      this.showIcon = !this.showIcon;
      var wishlishtProducts = this.$store.state.wishlistProducts;

      if (productAction == "add") {
        wishlishtProducts.push(this.product);
      } else {
        wishlishtProducts.find((element, index) => {
          if (element.id == this.product.id) {
            wishlishtProducts.splice(index, 1);
          }
        });
      }
    },
    showSimilar() {
      var productsLength = this.products.length;
      for (var i = 0; i < productsLength; i++) {
        if (this.product.tags == this.products[i].tags) {
          this.similarProducts.push(this.products[i]);
        }
      }
    },
    showProduct(similarProduct) {
      this.product = similarProduct;
    },
  },
};
</script>

<style>
.cart__quantity {
  font-size: 1.5rem;
  margin: 0 1rem;
}
.card-img-left {
  width: 35%;
  height: 300px;
}
</style>
