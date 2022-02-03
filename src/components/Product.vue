<template>
  <div>
    <Cart v-if="showCart == true" :showCart="showCart" />
    <div class="row mb-5" v-for="item in product" :key="item.id">
      <div class="col6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
        <img class="img-fluid" :src="item.img" />
      </div>

      <div
        class="col6 col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex align-items-center justify-content-start"
      >
        <div class="info pt-xl-0 pt-lg-0 pt-5">
          <span class="float-left pr-3">★★★★★</span>
          <h6 style="width: 190px">3 reviews</h6>
          <h1 class="font-weight-bold text-uppercase pt-3">{{ item.title }}</h1>

          <h4>${{ item.price }}</h4>
          <button class="btn btn-secondary">
            <p
              v-if="addedToWishlist == false"
              class="wishlist-btn"
              @click="addTowishlist(item)"
            >
              Add to Wishlist <span><i class="fa fa-heart-o fa-xs"></i></span>
            </p>

            <p v-else class="wishlist-btn" @click="addTowishlist(item)">
              Remove from Wishlist
              <span><i class="fa fa-heart fa-xs"></i></span>
            </p>
          </button>
          <br /><br /><br />
          <div class="control number text-center">
            <button
              class="decrement-button"
              @click="dec"
              style="
                border-right: 0.2px solid lightgrey;
                float: left;
                margin-right: 11px;
              "
            >
              −
            </button>
            <span>{{ productQty }}</span>
            <button
              class="increment-button"
              @click="inc"
              style="border-left: 0.2px solid lightgrey; margin-left: 16px"
            >
              +
            </button>

            <br /><br />
          </div>
          <button class="add-to-cart-button" @click="addtoCart(item, item.id)">
            ADD TO CART
          </button>
          &nbsp; &nbsp;
          <button
            v-if="showCartButton"
            class="add-to-cart-button"
            @click="openCartbox()"
          >
            View Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cart from "./Cart.vue";
import addTowishlistMixin from "../mixin.js";

export default {
  name: "Product",
  mixins: [addTowishlistMixin],

  data() {
    return {
      productQty: 1,
      inCart: [],
      showCart: false,
      product: [],
      wishlistId: [],
    };
  },
  components: {
    Cart,
  },
  computed: {
    showCartButton() {
      if (this.$store.getters.itemsNumber > 0) {
        return true;
      }
      return false;
    },
    addedToWishlist() {
      if (this.wishlistId.includes(this.product[0].id)) {
        return true;
      }
      return false;
    },
  },
  methods: {
    inc() {
      // Info box Incrememnt button
      if (this.productQty <= 8) return this.productQty++;
    },
    dec() {
      // Info box Decrememnt button
      if (this.productQty >= 2) return this.productQty--;
    },
    addtoCart(item, id) {
      this.inCart = [];
      for (var i = 0; i < this.productQty; i++) {
        this.$store.commit("inCart", item, id);
      }

      this.showCart = false;
    },
    openCartbox() {
      this.showCart = true;
    },
  },
  mounted() {
    this.product.push(this.$store.state.infoItem);
    this.getWishlistItemId();
  },
};
</script>

<style scoped>
.img-fluid {
  min-width: 90% !important;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.control.number {
  border: 0.2px solid lightgrey;
  font-size: 19px;
  font-weight: bold;
  height: 35px;
  width: 155px;
  margin-bottom: 30px;
}
.control.number button {
  border: none;
  background: inherit;
  width: 56px;
  height: 35px;
  outline-style: none;
}
.control.number button:active {
  background-color: lightgrey;
}
.control.number h5 {
  margin-left: 13px;
  margin-right: 13px;
}
.add-to-cart-button {
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  width: 155px;
  height: 70px;
  background-color: #2c3539;
  color: #fff;
  font-size: 15px;
  padding: 0px 30px;
  cursor: pointer;
  position: relative;
  top: 0;
  z-index: 10;
  border: none;
  box-shadow: 0 26px 38px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.add-to-cart-button:hover,
.add-to-cart-button:focus {
  background-color: inherit;
  color: black;
}
.wishlist-btn {
  margin-top: 0;
  margin-bottom: 0;
}
</style>
