<template>
  <b-card class="container prod-details">
    <b-alert :variant="variant" :show="show">{{ showmsg }}</b-alert>
    <div class="card">
      <div class="row">
        <div class="col-sm-4">
          <b-img
            v-bind:src="'../../images/' + imgName"
            alt="Earphone"
            fluid-grow
          ></b-img>
        </div>
        <div class="col-sm-7">
          <div class="card-body p-5">
            <h3 class="title mb-3">{{ productName }}</h3>
            <p class="price-detail-wrap">
              <span class="price h3 text-warning">
                <span class="Price">${{ price }}</span>
              </span>
            </p>
            <dl>
              <dt>Description</dt>
              <dd>
                <p>{{ description }}</p>
              </dd>
            </dl>
            <dl>
              <dt>Model#</dt>
              <dd>{{ model }}</dd>
            </dl>
            <dl>
              <dt>Color</dt>
              <dd>{{ color }}</dd>
            </dl>
            <hr />
            <div class="row">
              <div class="col-sm-5">
                <b-input-group>
                  <b-input-group-prepend>
                    <b-btn variant="outline-info" @click="quantity--">-</b-btn>
                  </b-input-group-prepend>
                  <b-form-input
                    type="number"
                    min="0.00"
                    v-model="quantity"
                    class="cart-quantity"
                  ></b-form-input>
                  <b-input-group-append>
                    <b-btn variant="outline-secondary" @click="quantity++"
                      >+</b-btn
                    >
                  </b-input-group-append>
                </b-input-group>
              </div>
              <div class="col-sm-7">
                <div>
                  <b-form-select
                    v-model="selected"
                    :options="options"
                    class="mb-3"
                  >
                    <template #first>
                      <b-form-select-option :value="null" disabled
                        >-- Please select size --</b-form-select-option
                      >
                    </template>
                  </b-form-select>
                </div>
              </div>
              <input type="hidden" :val="this.$route.params.id" class="proid" />
            </div>
            <hr />
            <b-button
              class="buy-now text-uppercase"
              variant="primary"
              @click="addToCart(quantity, 'buy')"
            >
              Buy now
            </b-button>
            <b-button
              class="text-uppercase"
              @click="addToCart(quantity, 'cart')"
              variant="success"
            >
              <b-icon icon="cart"></b-icon> Add to cart
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </b-card>
</template>
<script>
import toastMessage from "../mixins/ToastMessage";
export default {
  name: "ProductDetail",
  mixins: [toastMessage],
  data() {
    return {
      productName: "",
      price: "",
      description: "",
      quantity: 0,
      model: "",
      color: "",
      imgName: "",
      selected: null,
      options: [
        { value: "sm", text: "SM" },
        { value: "md", text: "MD" },
        { value: "xxl", text: "XXL" },
      ],
      variant: "",
      show: false,
      showmsg: "",
    };
  },
  methods: {
    addToCart(quantity, action) {
      this.show = true;
      if (quantity == 0) {
        this.makeToastMessage("Please select at least 1 quantity.", "danger");
      } else if (this.selected == null) {
        this.makeToastMessage("Please select any size.", "danger");
      } else {
        localStorage.setItem("productName", this.productName);
        localStorage.setItem("price", this.price);
        localStorage.setItem("quantity", this.quantity);
        localStorage.setItem("size", this.selected);

        if (action == "cart") {
          this.makeToastMessage(
            "Product added in cart successfully.",
            "success"
          );
        }
        this.$router.push("/checkout");
      }
    },
  },
  watch: {
    quantity(newValue) {
      if (this.quantity == 0) {
        localStorage.setItem("productName", "");
        localStorage.setItem("price", "");
        localStorage.setItem("quantity", "");
        localStorage.setItem("size", "");
        this.makeToastMessage("Removed item from cart.", "success");
      }
      if (newValue <= -1) {
        this.quantity = 0;
      }
    },
  },
  created() {
    var id = this.$route.params.id;
    var items = localStorage.getItem("items"); // From localstorage
    var itemsObject = JSON.parse(items);
    const productDetails = itemsObject.find(function (value) {
      if (value.id == id) return true;
    });
    this.productName = productDetails.productName;
    this.price = productDetails.price;
    this.description = productDetails.description;
    this.model = productDetails.model;
    this.color = productDetails.color;
    this.imgName = productDetails.image;
  },
};
</script>
<style scoped>
.gallery-wrap .img-big-wrap img {
  height: fit-content;
  width: auto;
  display: inline-block;
}

.gallery-wrap .img-small-wrap {
  text-align: center;
}
.buy-now {
  margin-right: 10px;
}
.card-body.p-5 {
  text-align: initial;
}
div img.img-fluid.w-100 {
  object-fit: fill;
  width: 100%;
  height: 100%;
}
.prod-details {
  margin-top: 50px;
}
</style>
