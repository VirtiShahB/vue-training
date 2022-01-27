<template>
  <b-container class="bv-example-row mt-3">
    <div class="row d-flex flex-row-reverse">
      <b-col sm="12" style="margin-right: 18px">
        <router-link class="btn btn-outline-primary float-end" :to="'/'"
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
              <b-card-body :title="getProductById['title']">
                <hr class="secondary" />
                <b-row>
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
                </b-row>
                <hr class="secondary" />
                <b-row class="mt-3">
                  <b-col>
                    <b-button
                      @click="addToCart(getProductById['id'])"
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
  </b-container>
</template>

<script>
export default {
  name: "ProductDetail",
  data: function () {
    return {
      quanity: 0,
    };
  },
  methods: {
    addQty: function () {
      this.quanity = parseInt(this.quanity) + 1;
    },
    removeQty: function () {
      if (this.quanity > 0) {
        this.quanity = parseInt(this.quanity) - 1;
      }
    },
    addToCart (productId = {}) {
      var IsAlreadyAdded = false;
      if (this.quanity && this.quanity > 0) {
        this.$store.state.cart.forEach((product) => {
          if (productId === product.id) {
            alert("It is already Added!");
            IsAlreadyAdded = true;
          }
        });
        if (!IsAlreadyAdded) {
          this.$store.dispatch("addToCart", {
            id: this.$route.params.id,
            qty: this.quanity,
          });
          alert("Sucess! Product added sucessfully!");
          this.$router.push({ name: "Dashboard" });
        }
      } else {
        alert("Error! Please add some qty.");
      }
    },
  },
  computed: {
    getProductById() {
      return this.$store.getters.getProductById(this.$route.params.id);
    },
  },
};
</script>

<style>
</style>