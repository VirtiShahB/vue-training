<template>
  <Main>
    <template #breadcrumbItems> Checkout </template>
    <template #content>
      <div class="row">
        <div class="col-md-6">
          <center>
            <carousel :items="1" :autoplay="true" :nav="false">
              <img class="img-owl" src="https://placeimg.com/200/200/any?1" />

              <img class="img-owl" src="https://placeimg.com/200/200/any?2" />

              <img class="img-owl" src="https://placeimg.com/200/200/any?3" />

              <img class="img-owl" src="https://placeimg.com/200/200/any?4" />
            </carousel>
          </center>
        </div>

        <div class="col-md-6">
          <h4 class="d-flex justify-content-between">
            {{ product }}
          </h4>

          <div class="d-flex">
            <div>
              <span class="text-warning fa fa-star checked"></span>
              <span class="text-warning fa fa-star checked"></span>
              <span class="text-warning fa fa-star checked"></span>
              <span class="text-warning fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
            &nbsp;
            <a href="#"> Write a review </a>
          </div>

          <br />

          <p class="d-flex">
            Reference : <span class="ml-8 text-danger">demo_42</span>
          </p>

          <p class="d-flex">
            Condition : <span class="ml-8 text-danger">New Product</span>
          </p>

          <hr />

          <p class="d-flex">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, amet!
          </p>

          <h4 class="text-danger d-flex">${{ price.toFixed(2) }}</h4>

          <hr />

          <div class="d-flex row">
            <div class="col-2">Quantity</div>

            <div class="col-2">
              <input
                @change="reflectPrice()"
                type="text"
                class="form-control"
                v-model="quantity"
              />
            </div>

            <div class="col-1">
              <button
                @click.prevent="inCrement()"
                class="btn btn-md btn-secondary"
              >
                +
              </button>
            </div>

            <div class="col-1">
              <button
                @click.prevent="deCrement()"
                class="btn btn-md btn-secondary"
              >
                -
              </button>
            </div>

            <div class="col-4">
              <button
                @click.prevent="addToCart()"
                class="btn btn-md btn-danger"
              >
                <i class="fa fa-cart-plus"></i> ADD TO CART
              </button>
            </div>
          </div>

          <div class="mt-3 d-flex">
            <button class="btn btn-secondary">
              <i class="text-white fa fa-envelope"></i>
            </button>

            <button class="ml-8 btn btn-secondary">
              <i class="text-white fa fa-print"></i>
            </button>

            <span class="ml-8">
              <button class="btn btn-secondary">
                <i class="text-white fa fa-heart"></i>
              </button>
            </span>
          </div>

          <div class="mt-3 d-flex">
            <label class="p-1">Size</label>
            <select
              name="size"
              id="size"
              v-model="size"
              class="ml-15 w-50 form-control"
            >
              <option value="">Please select size</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>

          <div class="mt-3 d-flex">
            <label class="p-1">Color</label>
          </div>

          <div class="p-1 mt-1 d-flex">
            <div
              @click.prevent="chooseColor('1', 'Yellow')"
              :class="{ activeColor : active == 1 }"
              class="border box-yellow"
            >
              &nbsp;
            </div>

            <div
              @click.prevent="chooseColor('2', 'White')"
              :class="{ activeColor : active == 2 }"
              class="ml-8 border bg-white-custom"
            >
              &nbsp;
            </div>
          </div>
        </div>
      </div>
    </template>
  </Main>
</template>

<script>
import Main from "@/views//Header.vue";
import carousel from "vue-owl-carousel";

export default {
  data() {
    return {
      product: "PRINTED SUMMER DRESS",
      quantity: 1,
      price: 30.5,
      orignal_price: 30.5,
      size: "",
      color: "",
      active: 0,
    };
  },
  components: {
    Main,
    carousel,
  },
  methods: {
    inCrement() {
      this.quantity = this.quantity + 1;
      this.price = this.orignal_price * this.quantity;
    },
    reflectPrice() {
      this.price = this.orignal_price * this.quantity;
    },
    deCrement() {
      this.price = this.price / this.quantity;

      let customqty = this.quantity - 1;

      this.price = customqty != 0 ? this.price * customqty : this.price * 1;

      this.quantity = customqty != 0 ? customqty : 1;
    },
    addToCart() {

      if (this.size == "") {
        this.$bvToast.toast("Please select size !", {
          title: "Oops !",
          variant: "danger",
          toaster:  'b-toaster-bottom-center',
          solid: true,
        });
        return false;
      }

      if (this.color == "") {
        this.$bvToast.toast("Please choose color !", {
          title: "Oops !",
          variant: "danger",
          toaster:  'b-toaster-bottom-center',
          solid: true,
        });
        return false;
      }

      let cart = JSON.parse(localStorage.getItem("cartStorage"));

      cart = cart != null ? cart : [];

      let index = cart.findIndex(
        (c) =>
          c.product == this.product &&
          c.size == this.size &&
          c.color == this.color
      );

      if (index !== -1) {
        cart.splice(index, 1);
      }

      cart.push({
        qty: this.quantity,
        price: this.price,
        size: this.size,
        color: this.color,
        product: this.product,
      });

      localStorage.setItem("cartStorage", JSON.stringify(cart));

      this.$router.push({name : 'checkout'});

    },
    chooseColor(id, value) {
      this.color = value;
      this.active = id;
    },
  },
};
</script>

<style scoped>
.activeColor {
  border: 1px solid red !important;
}
</style>
