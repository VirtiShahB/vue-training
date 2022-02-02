<template>
  <b-container class="bv-example-row mt-3">
    <div class="row d-flex flex-row-reverse">
      <b-col sm="12" style="margin-right: 18px">
        <router-link class="btn btn-outline-primary float-right" :to="'/'"
          >Back</router-link
        >
      </b-col>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-12">
        <b-card no-body class="overflow-hidden m-3">
          <b-row no-gutters>
            <b-col md="4">
              <b-card-img
                :src="getProductById['image']"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col md="8">
              <b-card-body :title="getProductById['name']">
                <hr class="secondary" />
                <b-row class="mt-2">
                  <b-col sm="12">
                    <b-card-text>
                      {{ getProductById["description"] }}
                    </b-card-text>
                  </b-col>
                </b-row>
                <b-row class="mt-3">
                  <b-col sm="2">
                    <label for="input-small">Price:</label>
                  </b-col>
                  <b-col sm="10">
                    <label for="input-small"
                      >${{ getProductById["price"] }}</label
                    >
                  </b-col>
                </b-row>
                <b-row class="mt-3 mb-3">
                  <b-col sm="2">
                    <label for="input-small">Quanity:</label>
                  </b-col>
                  <b-col sm="4">
                    <b-form-input
                      :id="'product-' + getProductById['id']"
                      size="sm"
                      placeholder="Qty."
                      type="number"
                      min="0"
                      v-model="quanity"
                      :value="quanity"
                    ></b-form-input>
                  </b-col>
                  <b-col sm="4">
                    <b-button
                      @click="addQty()"
                      href="#"
                      class="mx-1"
                      size="sm"
                      variant="success"
                      >+</b-button
                    >
                    <b-button
                      @click="removeQty()"
                      href="#"
                      size="sm"
                      class="mx-1"
                      variant="danger"
                      >-</b-button
                    >
                  </b-col>
                </b-row>
                <hr class="secondary" />
                <b-row class="mt-3">
                  <b-col>
                    <b-button
                      @click="addToCart(getProductById['id'])"
                      variant="secondary"
                      >ADD TO CART
                    </b-button>
                  </b-col>
                </b-row>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
       style="text-shadow: 0px 0px 2px #000"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
        img-width="200"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide
        img-src="https://picsum.photos/1024/480/?image=58"
      ></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut
          pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>
  </b-container>
</template>

<script>
import { toastMixins } from "../../mixins/toastMixins";
export default {
  mixins: [toastMixins],
  name: "ProductDetail",
  data() {
    return {
      quanity: 0,
      slide: 0,
      sliding: true,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
    addQty() {
      this.quanity = parseInt(this.quanity) + 1;
    },
    removeQty() {
      if (this.quanity > 0) {
        this.quanity = parseInt(this.quanity) - 1;
      }
    },
    addToCart(productId = {}) {
      var IsAlreadyAdded = false;
      if (this.quanity && this.quanity > 0) {
        this.$store.state.products.cart.forEach((product) => {
          if (productId === product.id) {
            this.makeToast("danger", "Error!", "It is already Added!");
            IsAlreadyAdded = true;
          }
        });
        if (!IsAlreadyAdded) {
          this.$store.dispatch("products/addToCart", {
            id: this.$route.params.id,
            qty: this.quanity,
          });
          this.makeToast(
            "success",
            "Success!",
            "Product added to cart sucessfully!"
          );
          this.$router.push({ name: "Dashboard" });
        }
      } else {
        this.makeToast("danger", "Error!", "Error! Please add some quantity");
      }
    },
  },

  computed: {
    getProductById() {
      return this.$store.getters["products/getProductById"](
        this.$route.params.id
      );
    },
  },
};
</script>

<style>
</style>