<template>
  <div>
    <div v-if="isEmptyCart" class="container pt-lg-md">
      <div class="row d-flex flex-row-reverse">
        <b-col sm="12" class="mt-5" style="margin-right: 45px">
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
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <b-card
            v-for="product in products"
            :key="product.id"
            no-body
            class="overflow-hidden m-5"
          >
            <b-row no-gutters>
              <b-col md="4">
                <b-card-img
                  :src="product.image"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="8">
                <b-card-body :title="product.title">
                  <hr class="secondary" />
                  <b-row>
                    <b-row class="mt-2">
                      <b-col sm="12">
                        <b-card-text>
                          {{ product.description }}
                        </b-card-text>
                      </b-col>
                    </b-row>
                    <b-row class="mt-3">
                      <b-col sm="2">
                        <label for="input-small">Price:</label>
                      </b-col>
                      <b-col sm="10">
                        <label for="input-small">${{ product.price }}</label>
                      </b-col>
                    </b-row>
                    <b-row class="mt-3 mb-3">
                      <b-col sm="2">
                        <label for="input-small">Quanity:</label>
                      </b-col>
                      <b-col sm="4">
                        <b-form-input
                          :id="'product-' + product.id"
                          size="sm"
                          placeholder="Qty."
                          type="number"
                          min="0"
                          v-model="productQty[product.id]"
                          :value="productQty[product.id]"
                        ></b-form-input>
                      </b-col>
                      <b-col sm="4">
                        <b-button
                          @click="addQty(product.id)"
                          href="#"
                          class="mx-1"
                          size="sm"
                          variant="success"
                          >+</b-button
                        >
                        <b-button
                          @click="removeQty(product.id)"
                          href="#"
                          size="sm"
                          class="mx-1"
                          variant="danger"
                          >-</b-button
                        >
                      </b-col>
                    </b-row>
                  </b-row>
                  <hr class="secondary" />
                  <b-row class="mt-3">
                    <b-col>
                      <b-button
                        @click="addToCart(product)"
                        block
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
    </div>

    <div v-if="isCheckout">
      <div class="row mt-5">
        <b-col md="8" offset-md="2">
          <div class="overflow-hidden mx-5">
            <h2 class="text-success float-start">Cart Details</h2>
            <b-button
              class="float-end"
              href="#"
              block
              size="md"
              variant="success ml-5"
              >Total amount is {{ cartTotal }}</b-button
            >
          </div>
        </b-col>
      </div>
      <div class="row">
        <b-col md="8" offset-md="2">
          <b-card class="overflow-hidden m-5">
            <ul class="list-unstyled m-2">
              <b-media v-for="product in cart" tag="li" :key="product.id">
                <template #aside>
                  <b-img
                    :src="product.image"
                    width="64"
                    alt="placeholder"
                  ></b-img>
                </template>
                <h5 class="mt-0 mb-1">
                  {{ product.title }}
                </h5>
                <p class="mb-0">
                  {{ product.description }}
                </p>
                <p>
                  <span class="badge bg-danger">
                    $Price: {{ product.price }}
                  </span>
                  <span class="badge bg-primary mx-1"
                    >Qty: {{ product.qty }} Piece</span
                  >
                </p>
              </b-media>
            </ul>
          </b-card>
        </b-col>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Dashboard",
  data: function () {
    return {
      isEmptyCart: true,
      isCheckout: false,
      productQty: [],
      quanity: [],
      cart: [],
      products: [
        {
          id: 1,
          image: require("../../assets/product_images/img1.jpg"),
          title: "Product 1",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
          price: 100,
        },
        {
          id: 2,
          image: require("../../assets/product_images/img2.jpg"),
          title: "Product 2",
          description:
            "0s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also",
          price: 150,
        },
        {
          id: 3,
          image: require("../../assets/product_images/img3.jpg"),
          title: "Product 3",
          description:
            "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop pu",
          price: 200,
        },
        {
          id: 4,
          image: require("../../assets/product_images/img4.jpg"),
          title: "Product 4",
          description:
            "atin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable",
          price: 250,
        },
      ],
    };
  },
  computed: {
    // a computed getter
    cartTotal: function () {
      var totalAount = 0;
      if (this.cart.length > 0) {
        this.cart.map((product) => {
          totalAount += product.qty * parseInt(product.price);
        });
      }
      return totalAount;
    },
  },
  methods: {
    addQty: function (productId) {
      this.productQty[productId] = parseInt(this.productQty[productId]) + 1;
      document.getElementById("product-" + productId).value =
        this.productQty[productId];
    },
    removeQty: function (productId = 0) {
      if (this.productQty[productId] > 0) {
        this.productQty[productId] = parseInt(this.productQty[productId]) - 1;
        document.getElementById("product-" + productId).value =
          this.productQty[productId];
      }
    },
    addToCart: function (productObj = {}) {
      productObj.qty = this.productQty[productObj.id];
      var IsAlreadyAdded = false;
      if (
        this.productQty[productObj.id] &&
        this.productQty[productObj.id] > 0
      ) {
        this.cart.forEach((product) => {
          if (productObj.id === product.id) {
            alert("It is already Added!");
            IsAlreadyAdded = true;
          }
        });
        if (!IsAlreadyAdded) {
          this.cart.push(productObj);
          alert("Sucess! Product added sucessfully!");
        }
      } else {
        alert("Error! Please add some qty.");
      }
    },
    checkout: function () {
      if (this.cart.length < 1) {
        alert("Your Cart is empty! Please Add Some Products!");
      } else {
        this.isEmptyCart = false;
        this.isCheckout = true;
      }
    },
  },
};
</script>

<style scoped>
.media {
  display: flex;
  align-items: flex-start;
}
.media img {
  width: 100px;
}
</style>
