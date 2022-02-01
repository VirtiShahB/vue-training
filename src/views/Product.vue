<template>
  <Main>
    <template #breadcrumbItems> Product </template>
    <template #content>
      <div v-if="!loading" class="row">
        <div class="col-md-6">
          <center>
            <b-carousel
            id="productSlider"
            :interval="4000"
            controls
            indicators
            img-width="300"
            img-height="100"
            style="text-shadow: 1px 1px 2px #333"
          >
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide>
              <template #img>
                <img
                  class="d-block"
                  width="480"
                  height="600"
                  :src="product.image"
                  alt="image slot"
                />
              </template>
            </b-carousel-slide>
          </b-carousel>
          </center>
        </div>

        <div class="col-md-6">
          <h4 class="d-flex justify-content-between">
            {{ product.title }}
          </h4>

          <div class="d-flex">
            <label class="mr-2 mt-1 badge badge-success">
              {{ product.rating.rate }}
            </label>
            <div class="ratings">
              <div class="empty-stars"></div>
              <div class="full-stars" :style="{ width: `${width}%` }"></div>
            </div>
            &nbsp;

            <a class="mr-1" href="#">Write a review</a> (<span
              class="mr-1 font-weight-bold"
              >{{ product.rating.count }}</span
            >
            reviews)
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
            {{ product.description }}
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
                <b-icon-plus></b-icon-plus>
              </button>
            </div>

            <div class="col-1">
              <button
                @click.prevent="deCrement()"
                class="btn btn-md btn-secondary"
              >
                <b-icon-dash></b-icon-dash>
              </button>
            </div>

            <div class="ml-2 col-4">
              <button
                @click.prevent="addToCart()"
                class="btn btn-md btn-danger"
              >
                <b-icon-cart-plus></b-icon-cart-plus> ADD TO CART
              </button>
            </div>
          </div>

          <div class="mt-3 d-flex">
            <button class="btn btn-secondary">
              <b-icon-envelope></b-icon-envelope>
            </button>

            <button class="ml-8 btn btn-secondary">
              <b-icon-printer></b-icon-printer>
            </button>

            <span class="ml-8" v-if="$loggedIn">
              <button
                v-if="!in_wishList"
                title="Add to wishList"
                @click.prevent="addToWishList(product)"
                class="btn btn-secondary"
              >
                <b-icon-heart></b-icon-heart>
              </button>
              <button
                v-else
                title="Remove from wishList"
                @click.prevent="removeFromWishList(product)"
                class="btn btn-secondary"
              >
                <b-icon-heart-fill></b-icon-heart-fill>
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
              :class="{ activeColor: active == 1 }"
              class="border box-yellow"
            >
              &nbsp;
            </div>

            <div
              @click.prevent="chooseColor('2', 'White')"
              :class="{ activeColor: active == 2 }"
              class="ml-8 border bg-white-custom"
            >
              &nbsp;
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <b-row>
          <b-col>
            <b-skeleton-img animation="throb" height="500px"></b-skeleton-img>
          </b-col>
          <b-col>
            <b-skeleton height="30px"></b-skeleton>
            <b-skeleton class="mt-2" width="30%"></b-skeleton>

            <b-skeleton class="mt-5" width="30%"></b-skeleton>
            <b-skeleton class="mt-2" width="30%"></b-skeleton>

            <hr />
            <b-skeleton animation="throb" width="85%"></b-skeleton>
            <b-skeleton animation="throb" width="55%"></b-skeleton>
            <b-skeleton animation="throb" width="70%"></b-skeleton>

            <b-skeleton class="mt-3" type="button"></b-skeleton>

            <hr />

            <b-skeleton animation="throb" height="30px"></b-skeleton>
            <br />
            <div class="clearfix">
              <b-skeleton class="float-left" type="avatar"></b-skeleton>
              <b-skeleton class="ml-2 float-left" type="avatar"></b-skeleton>
              <b-skeleton v-if="$loggedIn" class="ml-2 float-left" type="avatar"></b-skeleton>
            </div>

            <p class="mt-3">
              <b-skeleton width="200px" height="30px"></b-skeleton>
              <b-skeleton width="200px" height="30px"></b-skeleton>
            </p>
          </b-col>
        </b-row>
      </div>
    </template>
  </Main>
</template>

<script>
import Main from "@/views/Header.vue";
import { bus } from "@/eventBus";
export default {
  components: {
    Main,
  },
  data() {
    return {
      product: {},
      price: 0,
      orignalPrice: 0,
      quantity: 1,
      size: "",
      color: "",
      active: 0,
      width: 0,
      loading: true,
      in_wishList: "",
    };
  },
  methods: {
    inCrement() {
      this.quantity = this.quantity + 1;
      this.price = this.orignalPrice * this.quantity;
    },
    reflectPrice() {
      this.quantity = this.quantity == 0 ? 1 : this.quantity;

      console.log(this.quantity);

      this.price = this.orignalPrice * this.quantity;
    },
    deCrement() {
      this.price = this.price / this.quantity;

      let customqty = this.quantity - 1;

      this.price = customqty != 0 ? this.price * customqty : this.price * 1;

      this.quantity = customqty != 0 ? customqty : 1;
    },
    addToCart() {

      if(!this.$loggedIn){
         this.$bvToast.toast("Please login to continue !", {
          title: "Login Required !",
          variant: "danger",
          toaster:  'b-toaster-bottom-center',
          solid: true
        });

        return false;
      }

      if (this.size == "") {
        this.$bvToast.toast("Please select size !", {
          title: "Oops !",
          variant: "danger",
          toaster: "b-toaster-bottom-center",
          solid: true,
        });
        return false;
      }

      if (this.color == "") {
        this.$bvToast.toast("Please choose color !", {
          title: "Oops !",
          variant: "danger",
          toaster: "b-toaster-bottom-center",
          solid: true,
        });
        return false;
      }

      let cart = JSON.parse(localStorage.getItem("cartStorage"));

      cart = cart != null ? cart : [];

      let index = cart.findIndex(
        (c) =>
          c.product == this.product.title &&
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
        product: this.product.title,
      });

      localStorage.setItem("cartStorage", JSON.stringify(cart));

      this.$router.push({ name: "checkout" });
    },
    chooseColor(id, value) {
      this.color = value;
      this.active = id;
    },
    addToWishList(product) {
      let wishList = JSON.parse(localStorage.getItem("wishList"));

      wishList = wishList != null ? wishList : [];

      /** Check if wishList has already have this product */

      let index = wishList.findIndex((c) => c.id == product.id);

      /** if has then remove it  */

      if (index !== -1) {
        wishList.splice(index, 1);
      }

      /** Push the item in wishList array */

      wishList.push(product);

      /** Push cart in localstorage */

      localStorage.setItem("wishList", JSON.stringify(wishList));

      this.in_wishList = true;

      this.$bvToast.toast("Item is added to wishList !", {
        title: "Added !",
        variant: "success",
        toaster: "b-toaster-bottom-center",
        solid: true,
      });

      bus.$emit("wishList");
    },
    removeFromWishList(product) {
      let wishList = JSON.parse(localStorage.getItem("wishList"));

      /** check if wishList is not empty or not null */

      if (wishList != null && wishList.length > 0) {
        /** Check if wishList has already have this product */

        let index = wishList.findIndex((c) => c.id == product.id);

        /** if has then remove it  */

        if (index !== -1) {
          wishList.splice(index, 1);
          localStorage.setItem("wishList", JSON.stringify(wishList));
          this.in_wishList = false;
          this.$bvToast.toast("Item is removed from wishList !", {
            title: "Removed !",
            variant: "success",
            toaster: "b-toaster-bottom-center",
            solid: true,
          });
        }

        bus.$emit("wishList");
      }
    },
  },
  async mounted() {
    await this.$axios
      .get("https://fakestoreapi.com/products/" + this.$route.params.id)
      .then((res) => {
        this.product = res.data;
        this.orignalPrice = res.data.price;
        this.price = res.data.price;
        this.width = (res.data.rating.rate / 5) * 100;

        let fetchWishList = JSON.parse(localStorage.getItem("wishList"));

        /** get item wishList and check if item is in wishList*/

        let in_wishList =
          fetchWishList != null && fetchWishList.length > 0
            ? fetchWishList.findIndex((wish) => wish.id == this.product.id)
            : null;

        this.in_wishList =
          in_wishList != null && in_wishList !== -1 ? true : false;

        this.loading = false;
      })
      .catch((err) => {
        console.log("error : " + err);
      });
  },
};
</script>
<style scoped>
.activeColor {
  border: 1px solid red !important;
}
</style>
