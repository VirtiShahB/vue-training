<template>
  <b-container class="bv-example-row mt-3">
    <div class="row d-flex flex-row-reverse">
      <b-col sm="12" class="mb-1">
        <b-button
          v-if="!this.$store.state.products.isEmptyCart"
          href="#"
          class="float-right ml-1"
          size="md"
          variant="success"
          @click="checkout"
          >Check-out</b-button
        >
        <b-button
          v-b-toggle.sidebar-right
          class="float-right text-white"
          variant="warning"
          >Apply Filter</b-button
        >
      </b-col>
    </div>

    <b-sidebar id="sidebar-right" ref="myFilterSidebar" right backdrop shadow>
      <template>
        <div class="p-3">
          <h4 id="sidebar-no-header-title">Filter Products</h4>
          <b-form @submit.stop.prevent class="pt-3">
            <b-form-group>
              <b-form-select
                class="form-select form-select-sm"
                id="country"
                :options="priceList"
                required
                name="country"
                v-model="filterPrams.price"
              ></b-form-select>
            </b-form-group>
            <b-form-group>
              <b-form-input
                placeholder="Enter Keyword / Products Name"
                id="keyword"
                name="keyword"
                v-model="filterPrams.keyword"
                :value="filterPrams.keyword"
              ></b-form-input>
            </b-form-group>
            <b-button @click="onSubmit($event)" block squared variant="success"
              >Apply Filter</b-button
            >
          </b-form>
        </div>
      </template>
    </b-sidebar>

    <b-row v-if="this.$store.state.products.products.length > 0">
      <b-col
        sm="3"
        class="mt-1"
        v-for="product in this.$store.state.products.products"
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
              :class="'float-right add-to-wishlist-' + product.id"
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
    <b-row v-else>
      <b-col sm="12" class="m-5">
        <b-card bg-variant="light" text-variant="dark" class="text-center">
          <b-card-text> OOPS! No Products Available! </b-card-text>
          <button class="btn btn-outline-primary" @click="getProducts">
            Show All Products
          </button>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { toastMixins } from "../../mixins/toastMixins";
export default {
  mixins: [toastMixins],
  name: "Products",
  data() {
    return {
      priceList: [
        { text: "Select Price Range", value: null },
        { text: "0 - $99", value: "0-99" },
        { text: "$100 - $199", value: "100-199" },
        { text: "$200 - $299", value: "200-299" },
        { text: "$300 - $399", value: "300-399" },
        { text: "$400 - $499", value: "400-499" },
        { text: "Above $500", value: "500" },
      ],
      filterPrams: {
        keyword: null,
        price: null,
      },
    };
  },
  methods: {
    getProducts() {
      this.$api.products.getProducts();
    },
    checkout() {
      if (this.$store.state.products.cart < 1) {
        this.makeToast(
          "danger",
          "Error!",
          "Your Cart is empty! Please Add Some Products!"
        );
      } else {
        this.$router.push({ name: "Checkout" });
      }
    },
    addToWishlist(productId) {
      var product = this.$store.state.products.wishlist.find(
        (p) => p.id === parseInt(productId)
      );
      if (product) {
        this.$store.dispatch("products/removeToWishlist", {
          id: productId,
        });
        this.makeToast(
          "success",
          "Sucess!",
          "Removed product from wishlist successfully!"
        );
      } else {
        this.$store.dispatch("products/addToWishlist", {
          id: productId,
        });
        this.makeToast(
          "success",
          "Sucess!",
          "Added in your wishlist successfully!"
        );
      }
    },
    onSubmit() {
      this.$refs.myFilterSidebar.hide();
      this.$api.products.getProducts(this.filterPrams);
    },
  },
  computed: {
    wishListProducts() {
      return this.$store.state.products.wishlist.map(function (value) {
        return value.id;
      });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>