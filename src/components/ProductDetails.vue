<template>
  <div>
    <div class="container my-0 my-md-4">
      <div class="row align-items-center justify-content-between">
        <!-- Details left side -->
        <div class="col-12 col-md-5 p-0 p-md-2">
          <div class="d-flex flex-column">
            <div class="col-12 px-md-2 d-none d-md-block">
              <div style="cursor: pointer">
                <b-img
                  :src="product.image"
                  alt=""
                  style="width: 100%"
                  class="image"
                ></b-img>
              </div>
            </div>
          </div>
        </div>
        <!-- Details left side end -->

        <!-- Details right side -->
        <div class="col-12 col-md-6 text-left my-3">
          <div class="container">
            <div class="mt-2 mb-4">
              <span
                style="
                  font-size: 40px;
                  font-weight: 900;
                  color: black;
                  line-height: 2.8rem;
                "
              >
                {{ product.title }}
              </span>
            </div>

            <div class="my-3">
              <span class="text-muted">
                {{ product.description }}
              </span>
            </div>

            <div class="row">
              <div class="col-8 col-md-12 d-flex flex-row align-items-center">
                <div>
                  <span style="font-size: 24px; font-weight: 900">
                    ${{ parseFloat(product.price).toFixed(2) }}
                  </span>
                </div>
              </div>
            </div>

            <div class="my-3 row">
              <div class="col-12 col-md-4 text-center px-md-0 mt-3">
                <div
                  class="bg-quantity d-flex flex-row justify-content-between"
                  style="font-weight: 700"
                >
                  <div class="plus-minus">
                    <i class="fas fa-minus" @click="decrement()"></i>
                  </div>
                  <div>
                    {{ count }}
                  </div>
                  <div class="plus-minus">
                    <i class="fas fa-plus" @click="increment()"></i>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-8 text-center mt-3">
                <b-button
                  class="bg-add-cart border-0"
                  :disabled="this.count == 0"
                  style="width: 100%"
                  @click="submit"
                >
                  <span class="mx-3">
                    <i class="fas fa-shopping-cart text-white"></i>
                  </span>
                  <span style="font-weight: 700"> Add to cart </span>
                </b-button>
                <b-button
                  class="bg-add-cart border-0 mt-1"
                  :disabled="this.count == 0"
                  style="width: 100%"
                  @click="addToWishList"
                >
                  <span class="mx-3">
                    <i class="fas fa-heart text-white"></i>
                  </span>
                  <span style="font-weight: 700"> Add to Wishlist </span>
                </b-button>
              </div>
            </div>
          </div>
        </div>
        <!-- Detais right side end -->
      </div>
    </div>
  </div>
</template>

<script>
import { bus } from "../eventBus";
import toastMixin from "../mixins/toastMixin";
var one_product = JSON.parse(localStorage.getItem("products_list"));

export default {
  name: "ProductPage",
  mixins: [toastMixin],
  data() {
    return {
      product: one_product[this.$route.params.prod_id - 1],
      count: 1,
    };
  },
  methods: {
    increment() {
      this.count += 1;
    },
    decrement() {
      if (this.count - 1 >= 0) {
        this.count -= 1;
      }
    },
    submit() {
      var ItemData = JSON.parse(localStorage.getItem("myCart"));

      if (ItemData == null) ItemData = [];

      //Find index of specific object using findIndex method.
      var objIndex = ItemData.findIndex((obj) => obj.id == this.product.id);

      if (ItemData[objIndex]) {
        //Update object's name property.
        ItemData[objIndex].quantity = this.count;
      } else {
        var entry = {
          id: this.product.id,
          title: this.product.title,
          price: this.product.price,
          quantity: this.count,
          image: this.product.image,
          description: this.product.description,
        };
        ItemData.push(entry);
      }
      localStorage.setItem("myCart", JSON.stringify(ItemData));
      this.cartItems = JSON.parse(localStorage.getItem("myCart"));
      bus.$emit("cartItems");
      this.fireToastNotification(
        "success",
        this.product.title + " successfully added to cart!"
      );
    },
    addToWishList() {
      var wishListData = JSON.parse(localStorage.getItem("wishListItems"));
      if (wishListData == null) wishListData = [];
      //Find index of specific object using findIndex method.
      var objIndex = wishListData.findIndex((obj) => obj.id == this.product.id);

      if (
        wishListData[objIndex] === "undefined" ||
        wishListData[objIndex] == null
      ) {
        var wishList = {
          id: this.product.id,
          title: this.product.title,
          price: this.product.price,
          quantity: this.count,
          image: this.product.image,
          description: this.product.description,
        };
        wishListData.push(wishList);
        localStorage.setItem("wishListItems", JSON.stringify(wishListData));
        this.wishListItems = JSON.parse(localStorage.getItem("wishListItems"));
        bus.$emit("wishListItems");
        this.fireToastNotification(
          "success",
          this.product.title + " successfully added to wishlist!"
        );
      } else {
        this.fireToastNotification(
          "danger",
          this.product.title + " already wishlisted!"
        );
      }
    },
  },
};
</script>

<style scoped>
.image {
  border-radius: 10px;
}

.bg-quantity {
  background-color: #f1f1f1;
  border-radius: 10px;
  font-size: 16px;
  padding: 14px;
}

.bg-add-cart {
  background-color: hsl(26, 100%, 55%);
  color: white !important;
  border-radius: 10px;
  font-size: 15px;
  padding: 14px;
  transition: 0.3s;
  cursor: pointer;
}

.bg-add-cart:hover {
  background-color: hsl(24, 91%, 86%);
  border: 1px solid gray !important;
}

.plus-minus {
  color: hsl(26, 100%, 55%);
  cursor: pointer;
}
</style>
