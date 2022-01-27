<template>
  <div id="app">
    <b-container class="my-5">
      <h4 class="font-weight-bold">Product Detail</h4>
      <b-row>
        <b-col cols="8" :key="product.id">
          <product-detail-component
            :product="product"
            @addToCart="onAddToCart($event)"
          ></product-detail-component>
        </b-col>
        <b-col cols="4">
          <cart-component :cart="cart"></cart-component>
          <router-link
            class="btn btn-primary btn-block mt-3"
            :class="{ disabled: !cart.length }"
            to="/checkout"
            >Checkout</router-link
          >
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ProductDetailComponent from "../../components/Product/ProductDetailComponent.vue";
import { products } from "../../services/Product";
import CartComponent from "../../components/Cart/CartComponent.vue";
export default {
  name: "App",
  components: {
    ProductDetailComponent,
    CartComponent,
  },
  data() {
    return {
      products,
      cart: [],
      product: {},
    };
  },
  created() {
      
      let productInd = products.findIndex(
      (item) => item.id == this.$route.params.id
    );
    if (productInd >= 0) {
      this.product = this.products[productInd];
    }

    let cartItems = JSON.parse(localStorage.getItem("cart"));
    if (cartItems) {
      this.cart = cartItems;
    }
  },
  methods: {
    // Emit an event and update cart
    onAddToCart(product) {
      // check cart in localstorage
      let cartItems = JSON.parse(localStorage.getItem("cart"));
      if (cartItems) {
        // if cart exists in localstorage then find item index
        let itemInd = cartItems.findIndex((item) => item.id == product.id);
        if (itemInd >= 0) {
          cartItems[itemInd] = product;
          this.cart[itemInd].quantity = product.quantity;
        } else {
          cartItems.push(product);
          this.cart.push(product);
        }
      } else {
        cartItems = [];
        cartItems.push(product);
        this.cart.push(product);
      }
      localStorage.setItem("cart", JSON.stringify(cartItems));
    },
  },
};
</script>
