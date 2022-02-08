<template>
  <div>
    <b-card no-body class="overflow-hidden">
      <b-row no-gutters>
        <b-col md="6" class="text-center">
          <b-card-img
            :src="product.image"
            alt="Image"
            class="rounded-0 my-4"
            style="width: 200px; height: 300px"
          />
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
                />
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
import toastMixin from "@/mixins/toastMixins";
export default {
  name: "ProductDetailComponent",
  props: {
    product: Object,
  },
  mixins: [toastMixin],
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    // Method to add item in a cart
    onAddToCart: function () {
      let variant = "danger";
      let msg = "please select at least one quantity";
      if (this.quantity) {
        this.product.quantity = this.quantity;
        let cartItems = JSON.parse(localStorage.getItem("cart"))
          ? JSON.parse(localStorage.getItem("cart"))
          : [];
        let itemInd = cartItems.findIndex((item) => item.id == this.product.id);
        itemInd >= 0
          ? (cartItems[itemInd] = this.product)
          : cartItems.push(this.product);
        localStorage.setItem("cart", JSON.stringify(cartItems));
        msg = `Product added in cart successfully`;
        variant = "success";
      }
      this.showToast(msg, "Cart", variant);
    },
  },
};
</script>

<style></style>
