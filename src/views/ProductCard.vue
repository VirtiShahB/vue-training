<template>
  <div :class="block[product.id]" class="h-100 card">
    <div class="border-primay bg-primary card-header">
      <h5 :title="product.title" class="card-title">
        <router-link
          class="text-light"
          active-class="active"
          :to="{
            name: 'view.product',
            params: { id: product.id, name: product.title.replace(' ', '-') },
          }"
        >
          {{ product.title.length > 25
            ? product.title.substring(0, 25) + "..."
            : product.title }}
        </router-link>
      </h5>
    </div>
    <a
      v-if="tempWishList.findIndex((w) => w == product.id) == -1"
      title="Add to wishlist"
      class="p-3"
      @click.prevent="addToWishList(product)"
    >
      <b-icon-heart class="float-right text-danger"></b-icon-heart>
    </a>
    <a
      v-else
      title="Remove from wishlist"
      class="p-3"
      @click.prevent="removeFromWishList(product)"
    >
      <b-icon-heart-fill class="float-right text-danger"></b-icon-heart-fill>
    </a>
    <router-link
      :to="{
        name: 'view.product',
        params: { id: product.id, name: product.title.replace(' ', '-') },
      }"
    >
      <img
        :src="product.image"
        class="card-img-custom card-img-top"
        :alt="product.image"
      />
    </router-link>
    <div class="card-body">
          

      <p class="card-text">
        {{
          product.description.length > 100
            ? product.description.substring(0, 100) + "..."
            : product.description
        }}
      </p>

      <p class="card-text">
        In :
        <span class="font-weight-normal">{{
          product.category.toUpperCase()
        }}</span>
      </p>

      <div class="d-inline mr-2">{{ product.rating.rate }}</div>
      <div class="ratings">
        <div class="empty-stars"></div>
        <div
          class="full-stars"
          :style="{ width: `${product.rating.width}%` }"
        ></div>
      </div>

      <p class="card-text">({{ `${product.rating.count} reviews` }})</p>
    </div>
    <div class="card-footer">
      <a
        @click.prevent="
          addToCart(1, product.price, 'L', 'White', product.title)
        "
        class="btn btn-success btn-md"
      >
        <i class="fa fa-cart-plus"></i> ADD TO CART
      </a>

      <h4 class="text-danger float-right">${{ product.price.toFixed(2) }}</h4>
    </div>
  </div>
</template>

<script>
import { bus } from "@/eventBus";
export default {
  props: ["product"],
  data() {
    return {
      tempWishList: [],
      block: [],
    };
  },
  methods: {
    addToCart(qty, price, size, color, product) {
      /** Fetch existing cart from storage */

      let cart = JSON.parse(localStorage.getItem("cartStorage"));

      cart = cart != null ? cart : [];

      /** Check if cart has already have this product */

      let index = cart.findIndex((c) => c.product == product);

      /** if has then remove it  */

      if (index !== -1) {
        cart.splice(index, 1);
      }

      /** Push the item in cart */

      cart.push({
        qty: qty,
        price: price,
        size: size,
        color: color,
        product: product,
      });

      /** Push cart in localstorage */

      localStorage.setItem("cartStorage", JSON.stringify(cart));

      this.$bvToast.toast("Item is added to cart !", {
        title: "Added",
        variant: "success",
        toaster:  'b-toaster-bottom-center',
        solid: true
      });

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

      this.$bvToast.toast("Item is added to wishlist !", {
        title: "Added",
        variant: "success",
        toaster:  'b-toaster-bottom-center',
        solid: true,
      });

      this.tempWishList.push(product.id);

      bus.$emit("wishList");
    },
    removeFromWishList(product) {
      if (this.$route.name == "wishList") {
        this.block[product.id] = "d-none";
      }

      let wishList = JSON.parse(localStorage.getItem("wishList"));

      /** check if wishList is not empty or not null */

      if (wishList != null && wishList.length > 0) {
        /** Check if wishList has already have this product */

        let index = wishList.findIndex((c) => c.id == product.id);

        /** if has then remove it  */

        if (index !== -1) {
          wishList.splice(index, 1);

          localStorage.setItem("wishList", JSON.stringify(wishList));

          this.$bvToast.toast("Item is removed from wishlist !", {
            title: "Removed",
            variant: "success",
            toaster:  'b-toaster-bottom-center',
            solid: true,
          });
        }
      }

      if (this.tempWishList != null && this.tempWishList.length > 0) {
        let index = this.tempWishList.findIndex((w) => w == product.id);

        if (index !== -1) {
          this.tempWishList.splice(index, 1);
        }
      }

      bus.$emit("wishList");
    },
  },

  mounted() {

    if (this.product.in_wishlist == true) {
      this.tempWishList.push(this.product.id);
    }

  },
};
</script>
<style scoped>
  .card-img-custom {
    width: 200px;
    height: 200px;
    object-fit: scale-down;
    align-items: center;
    position: relative;
    left: 70px;
    padding: 15px;
  }
</style>
