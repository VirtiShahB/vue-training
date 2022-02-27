<template>
  <div class="product">
    <div class="container">
      <div
        class="col-lg-8 border p-3 main-section bg-white"
        v-for="pdetails in productDetails"
        :key="pdetails.PID"
        :id="'detail_' + pdetails.PID"
      >
        <div
          class="
            d-flex
            align-items-center
            justify-content-end
            px-sm-3
            pt-3
            px-1
          "
        ></div>
        <div class="row m-0" v-if="pdetails.PID == id">
          <div class="col-lg-4 left-side-product-box pb-3">
            <img :src="pdetails.PIMAGE" class="border p-3" />
            <div class="var-img">
              <span
                class="sub-img"
                v-for="(variant, index) in pdetails.VARIANTIMAGE"
                :key="index"
              >
                <img
                  :src="variant"
                  class="border p-2"
                  @mouseover="updateProduct(variant)"
                  @mouseleave="updatemainimage(pdetails.PIMAGE)"
                />
              </span>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="right-side-pro-detail border p-3 m-0">
              <div class="row">
                <div class="col-lg-12">
                  <p class="m-0 p-0">{{ pdetails.PNAME }}</p>
                </div>
                <div class="col-lg-12">
                  <p class="m-0 p-0 price-pro">${{ pdetails.PPRICE }}</p>
                  <hr class="p-0 m-0" />
                </div>
                <div class="col-lg-12 pt-2">
                  <h5>Product Detail</h5>
                  <span>{{ pdetails.DESCRIPTION }}</span>
                  <hr class="m-0 pt-2 mt-2" />
                </div>
                <div class="col-lg-12">
                  <p class="tag-section">
                    <strong>Colors : </strong>
                    <a
                      href="javascript:void(0)"
                      v-for="color in pdetails.COLOR"
                      :key="color"
                      >{{ color }},</a
                    >
                  </p>
                </div>
                <div class="col-lg-12">
                  <p class="tag-section">
                    <strong>Sizes : </strong>
                    <a
                      href="javascript:void(0)"
                      v-for="size in pdetails.SIZE"
                      :key="size"
                      >{{ size }},</a
                    >
                  </p>
                </div>

                <div class="col-lg-12 mt-3">
                  <div class="row">
                    <div
                      class="col-lg-6 pb-3"
                      v-show="!CartProducts.includes(pdetails.PID)"
                    >
                      <a
                        href="javascript:void(0)"
                        @click="AddTOCart(pdetails.PID)"
                        class="btn btn-danger w-100"
                        >Add To Cart</a
                      >
                    </div>
                    <div
                      class="col-lg-6 pb-3"
                      v-show="CartProducts.includes(pdetails.PID)"
                    >
                      <a
                        href="javascript:void(0)"
                        @click="RemoveTOCart(pdetails.PID)"
                        class="btn btn-danger w-100"
                        >Remove To Cart</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { productListMixin } from "../mixins/productListMixin.js";
import { formFieldMixin } from "../mixins/formFieldMixin.js";
export default {
  mixins: [productListMixin, formFieldMixin],
  name: "ProductDetail",
  data() {
    return {
      id: this.$route.query.id,
      productDetails: [],
      pro: localStorage.getItem("PROLIST"),
      count: localStorage.getItem("cartProduct"),
      cart: 1,
      CartProducts: [],
    };
  },
  methods: {
    updateProduct(variantImage) {
      this.mainimage = variantImage;
    },
    updatemainimage(img) {
      this.mainimage = img;
    },
  },
  created() {
    if (this.$store.state.qty) {
      this.ProQty = this.$store.state.qty;
    }
    if (this.$store.state.cartProduct) {
      this.CartProducts = this.$store.state.cartProduct;
    }
  },
};
</script>
<style scoped>
.count {
  background-color: #cbcfd4 !important;
  width: 10% !important;
}
.pt-2 {
  padding-top: 0px !important;
}
</style>
