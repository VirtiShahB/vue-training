<template>
  <div class="product">
    
    <div class="container">
      <div class="col-lg-8 border p-3 main-section bg-white">
        <div
      class="d-flex align-items-center justify-content-end px-sm-3 pt-3 px-1"
    >
      <div class="cart-div">
        <a href=""><i class="fa fa-shopping-cart"></i></a>
        <span v-if="count > 0">{{count}}</span>
      </div>
    </div>
        <div class="row m-0">
          <div class="col-lg-4 left-side-product-box pb-3" >
            <img :src="mainimage" class="border p-3" />
            <div class="var-img">
              <span
              class="sub-img"
              v-for="(variant, index) in variants"
              :key="index"
            >
              <img
                :src="variant.variantImage"
                class="border p-2"
                @mouseover="updateProduct(variant.variantImage)"
                @mouseleave="updatemainimage(mainimage)"
              />
            </span>
            </div>
            
          </div>
          <div class="col-lg-8">
            <div class="right-side-pro-detail border p-3 m-0">
              <div class="row">
                <div class="col-lg-12">
                  <span>Who What Wear</span>
                  <p class="m-0 p-0">{{ product }}</p>
                </div>
                <div class="col-lg-12">
                  <p class="m-0 p-0 price-pro">${{ price }}</p>
                  <hr class="p-0 m-0" />
                </div>
                <div class="col-lg-12 pt-2">
                  <h5>Product Detail</h5>
                  <span>{{ description }}</span>
                  <hr class="m-0 pt-2 mt-2" />
                </div>
                <div class="col-lg-12">
                  <p class="tag-section">
                    <strong>Tag : </strong>
                    <a
                      href="javascript:void(0)"
                      v-for="tag in protags"
                      :key="tag"
                      >{{ tag }}</a
                    >
                  </p>
                </div>
                <div class="col-lg-12" style="display: inline-flex">
                  <h6>Quantity :</h6>
                  <a
                    href="javascript:void(0)"
                    class="btn w-100 count"
                    v-on:click="add"
                    >+</a
                  >
                  <span class="form-control text-center w-100">{{ cart }}</span>
                  <a
                    href="javascript:void(0)"
                    class="btn w-100 count"
                    v-on:click="remove"
                    >-</a
                  >
                </div>
                <div class="col-lg-12 mt-3">
                  <div class="row">
                    <div class="col-lg-6 pb-2">
                      <a
                        href="javascript:void(0)"
                        @click="addToCart()"
                        class="btn btn-danger w-100"
                        >Add To Cart</a
                      >
                    </div>
                    <div class="col-lg-6">
                      <a
                        href="javascript:void(0)"
                        @click="checkout()"
                        class="btn btn-success w-100"
                        >Shop Now</a
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
export default {
  name: "ProductDetail",
  data() {
    return {
      pro : localStorage.getItem('PROLIST'),
      count : localStorage.getItem('cartProduct'),
      product: "Women's Velvet Dress",
      price: 30,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris.",
      mainimage: "./assets/images/pd-image1.jpg",
      cart: 1,
      variants: [
        {
          variantId: 1,
          variantImage: "./assets/images/pd-image2.jpg",
        },
        {
          variantId: 2,
          variantImage: "./assets/images/pd-image3.jpg",
        },
        {
          variantId: 3,
          variantImage: "./assets/images/pd-image4.jpg",
        },
      ],
      protags: ["Woman,", "Man"],
    };
  },
  methods: {
    add() {
      this.cart += 1;
    },
    remove() {
      if (this.cart > 1) {
        this.cart -= 1;
      }
    },
    updateProduct(variantImage) {
      this.mainimage = variantImage;
    },
    updatemainimage(img) {
      this.mainimage = img;
    },
    addToCart() {
      this.$router.push({
        path: "/addtocart",
        query: {
          pname: this.product,
          pprice: this.price,
          pcart: this.cart,
          pimage: this.mainimage,
        },
      });
    },
    checkout() {
      this.$router.push({
        path: "/checkout",
        query: {
          name: this.product,
          price: this.price,
          cart: this.cart,
          mainimage: this.mainimage,
        },
      });
    },
  },
};
</script>


