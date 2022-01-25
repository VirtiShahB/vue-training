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
                  ><b-icon-cart></b-icon-cart> Add To Cart</b-button
                >
              </b-col>
            </b-row>
            <b-alert
              v-model="showDismissibleAlert"
              :variant="alertType"
              class="mt-3"
              dismissible
            >
              {{ alertMsg }}
            </b-alert>
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
      showDismissibleAlert: false,
      alertType: "success",
      alertMsg: "",
    };
  },
  methods: {
    
    // Method to add item in a cart
    onAddToCart() {
      if (this.quantity == 0) {
        this.alertMsg = "Please select atleast one";
      } else {
        this.product.quantity = this.quantity;
        this.$emit("addToCart", this.product);
        this.alertMsg = `Product added in cart successfully`;
      }
      this.showDismissibleAlert = true;
    },
  },
};
</script>

<style></style>
