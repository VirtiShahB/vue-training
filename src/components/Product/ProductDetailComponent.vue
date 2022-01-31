<template>
  <div>
    <b-card no-body class="overflow-hidden">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img
            :src="product.image"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body>
            <b-card-title class="font-weight-bold">{{
              product.title
            }}</b-card-title>
            <b-card-sub-title class="font-weight-bold mt-3"
              >Description</b-card-sub-title
            >
            <b-card-text class="text-muted">{{
              product.description
            }}</b-card-text>
            <b-card-sub-title class="font-weight-bold mt-3"
              >Price</b-card-sub-title
            >
            <h4 class="text-danger font-weight-bolder">
              $ {{ product.price }}
            </h4>
            <b-row>
              <b-col>
                <b-form-spinbutton
                  id="quantity"
                  v-model="quantity"
                  min="0"
                  max="100"
                ></b-form-spinbutton>
              </b-col>
              <b-col>
                <b-button variant="success" @click="onAddToCart"
                  ><b-icon-cart /> Add To Cart</b-button
                >
              </b-col>
            </b-row>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "ProductDetailComponent",
  props: {
    product: Object,
  },
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    // Method to add item in a cart
    onAddToCart() {
      let variant = "danger";
      let msg = "please select at least one quantity";
      if (this.quantity) {
        this.product.quantity = this.quantity;
        let cartItems = JSON.parse(localStorage.getItem("cart"));
        if (cartItems) {
          // if cart exists in localstorage then find item index
          let itemInd = cartItems.findIndex(
            item => item.id == this.product.id
          );
          if (itemInd >= 0) {
            cartItems[itemInd] = this.product;
          } else {
            cartItems.push(this.product);
          }
        } else {
          cartItems = [];
          cartItems.push(this.product);
        }
        localStorage.setItem("cart", JSON.stringify(cartItems));
        msg = `Product added in cart successfully`;
        variant = "success";
      }
      this.$bvToast.toast(msg, {
        title: "Added in cart",
        variant: variant,
        solid: true,
      });
    },
  },
};
</script>

<style></style>
