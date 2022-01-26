<template>
  <div class="ProductDetail">
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="12"> </b-col>
      </b-row>
      <b-row>
        <b-col sm="4" class="border-right">
          <article class="card-body gallery-wrap">
            <div class="img-big-wrap">
              <div>
                <b-card-img
                  :src="productsDetail.image"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </div>
            </div>
          </article>
        </b-col>
        <b-col sm="8" class="col-sm-7">
          <b-card class="text-left">
            <b-card-body>
              <b-card-title>{{ productsDetail.title }} </b-card-title>
              <p class="price-detail-wrap">
                <span class="price h3 text-primary">
                  Price : <span class="currency">US $</span
                  ><span class="num">{{ productsDetail.price }}</span>
                </span>
              </p>
              <b-card-title>Description</b-card-title>
              <b-card-text>
                <p>
                  {{ productsDetail.description }}
                </p>
              </b-card-text>

              <dl class="param param-feature">
                <dt>Configuration</dt>
                <dd>{{ productsDetail.otherData }}</dd>
              </dl>

              <dl class="param param-feature">
                <dt>Delivery</dt>
                <dd>Ahmedabad,Surat</dd>
              </dl>

              <hr />
              <div class="row">
                <div class="col-sm-5">
                  <dl class="param param-inline">
                    <dt>Quantity:</dt>
                    <dd>
                      <b-form-spinbutton
                        id="quantity"
                        v-model="quantity"
                        min="1"
                        max="100"
                      ></b-form-spinbutton>
                    </dd>
                  </dl>
                </div>
                <div class="col-sm-5">
                  <dl class="param param-inline">
                    <dt>Total Amount:</dt>
                    <dd>$ {{ totalAmount }}</dd>
                  </dl>
                </div>
              </div>
              <div>
                <b-button squared variant="success" @click="onAddCart"
                  >Add to Cart</b-button
                >
              </div>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { products } from "../data/Product";
export default {
  name: "ProductDetail",
  data() {
    return {
      productsDetail: null,
      products: products,
      msg: "",
      isCartItem: JSON.parse(localStorage.getItem("product-cart"))
        ? true
        : false,
      quantity: 1,
    };
  },
  created() {
    let productId = this.$route.params.id;
    this.productsDetail = this.products.find(
      (p) => p.id === parseInt(productId)
    );
  },
  computed: {
    totalAmount() {
      return this.quantity * this.productsDetail.price;
    },
  },
  methods: {
    onAddCart() {
      this.isCartItem = true;
      if (this.quantity == 0) {
        this.msg = "Please add quantity";
      } else {
        this.msg = `Product added with qty ${
          this.quantity
        } in a cart & total amount :$${
          this.quantity * this.productsDetail.price
        } successfully.`;
      }
      var cartProductData = {
        title: this.productsDetail.title,
        qty: this.quantity,
        price: this.productsDetail.price,
      };

      var productData = JSON.parse(localStorage.getItem("product-cart"));
      if (productData == null) productData = [];

      localStorage.setItem("cartProductData", JSON.stringify(cartProductData));
      productData.push(cartProductData);
      localStorage.setItem("product-cart", JSON.stringify(productData));
      alert(this.msg);
      this.$router.push({ name: "Dashboard" });
    },
  },
};
</script>
