<template>
  <div>
    <div>
      <div class="appbar-desktop d-none d-lg-block border-bottom">
        <b-navbar variant="faded" type="light" toggleable="lg" class="py-0">
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-navbar-brand class="mb-0">
            <span
              style="font-size: 28px; font-weight: 700; font-family: Amaranth"
            >
              ShoeMart
            </span>
          </b-navbar-brand>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item
                class="py-4 category"
                v-for="(category, index) in categories"
                :key="index"
              >
                <div class="px-2">
                  <span class="text-muted text">
                    {{ category }}
                  </span>
                </div>
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>

          <b-navbar-nav class="ml-auto d-flex flex-row align-items-center">
            <b-nav-item class="col-6">
              <b-dropdown
                size="xl"
                variant="link"
                toggle-class="text-decoration-none"
                no-caret
                right
              >
                <template #button-content>
                  <b-img src="/assets/icon-cart.svg" alt=""></b-img>
                  <span class="cart-count">
                    {{ cartItemsCount }}
                  </span>
                </template>

                <!-- <b-dropdown-item href="#"> -->
                <div
                  style="
                    min-width: 350px;
                    box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.1);
                    border-radius: 15px !important;
                  "
                >
                  <div class="d-flex flex-column">
                    <div class="col-12 p-3 border-bottom">
                      <span style="font-weight: 700"> Cart </span>
                    </div>
                    <div
                      class="col-12 px-1 mt-3"
                      style="max-height: 200px; overflow: auto"
                    >
                      <div v-if="cartItems && cartItems.length > 0">
                        <div
                          v-for="(item, index) in cartItems"
                          :key="index"
                          class="d-flex flex-row justify-content-between my-3"
                        >
                          <div class="col-3 px-0 text-center">
                            <img
                              :src="item.image"
                              alt="product Image"
                              width="70%"
                              height="50px"
                              style="object-fit: cover; border-radius: 10px"
                            />
                          </div>
                          <div class="col-8 px-1 d-flex flex-column">
                            <div>
                              <span style="font-size: 14px" class="text-muted">
                                {{ item.title }}
                              </span>
                            </div>
                            <div>
                              <span style="font-size: 15px" class="text-muted">
                                ${{ parseFloat(item.price).toFixed(2) }} X
                                {{ item.quantity }}
                              </span>
                              <span style="font-weight: 700">
                                ${{ calcPrice(item) }}
                              </span>
                            </div>
                          </div>
                          <div class="col-1 px-1">
                            <span @click="deleteItem(item, index)">
                              <img src="/assets/icon-delete.svg" alt="" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div v-else>
                        <div
                          class="row justify-content-center align-items-center"
                          style="min-height: 200px"
                        >
                          <div class="col-12 text-center">
                            <span class="text-muted" style="font-weight: 700">
                              Your cart is empty.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 my-3" v-if="cartItems && cartItems.length > 0">
                      <button
                        class="p-3 text-white border-0 w-100 checkout-btn"
                        style="
                          background-color: hsl(26, 100%, 55%);
                          font-weight: 700;
                          font-size: 14px;
                          border-radius: 10px;
                        "
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
                <!-- </b-dropdown-item> -->
              </b-dropdown>
            </b-nav-item>
            <b-nav-item class="col-6">
              <span>
                <b-img
                  src="./assets/user.jpg"
                  class="avatar"
                  rounded="circle"
                  alt="User"
                  height="40px"
                ></b-img>
              </span>
            </b-nav-item>
          </b-navbar-nav>
        </b-navbar>
      </div>
    </div>

    <div class="container my-0 my-md-4">
      <div class="row align-items-center justify-content-between">
        <div class="col-12 col-md-5 p-0 p-md-2">
          <div class="d-flex flex-column">
            <div class="col-12 px-md-2 d-none d-md-block">
              <div style="cursor: pointer">
                <b-img
                  :src="mainImage"
                  alt=""
                  style="width: 100%"
                  class="image"
                ></b-img>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 text-left my-3">
          <div class="container">
            <div>
              <span
                style="
                  font-size: 13px;
                  letter-spacing: 1px;
                  color: hsl(26, 100%, 55%);
                  font-weight: 700;
                "
              >
                Adidas Company
              </span>
            </div>

            <div class="mt-2 mb-4">
              <span
                style="
                  font-size: 40px;
                  font-weight: 900;
                  color: black;
                  line-height: 2.8rem;
                "
              >
                {{ title }}
              </span>
            </div>

            <div class="my-3">
              <span class="text-muted">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before the final copy is available
              </span>
            </div>

            <div class="row">
              <div class="col-8 col-md-12 d-flex flex-row align-items-center">
                <div>
                  <span style="font-size: 24px; font-weight: 900">
                    ${{ parseFloat(price).toFixed(2) }}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import NavBar from './NavBar'

export default {
  name: "ProductPage",
  props: {},
  components: {
    // NavBar
  },
  data() {
    return {
      title: "Limited Edition Sneakers",
      price: "1250.00",
      count: 1,
      mainImage: "/assets/image-product-1.jpg",
      categories: ["Home"],
      cartItems: [],
    };
  },
  mounted() {
    const items = JSON.parse(localStorage.getItem("myCart"));
    console.log("items", items);
    this.cartItems = items;
  },
  computed: {
    cartItemsCount() {
      return this.cartItems.length;
    },
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
    calcPrice(item) {
      return parseFloat(
        parseFloat(item.price).toFixed(2) * item.quantity
      ).toFixed(2);
    },
    deleteItem(item, index) {
      this.cartItems.splice(index, 1);
      localStorage.setItem("myCart", JSON.stringify(this.cartItems));
    },
    submit() {
      var ItemData = JSON.parse(localStorage.getItem("myCart"));

      if (ItemData == null) ItemData = [];

      var entry = {
        title: this.title,
        price: this.price,
        quantity: this.count,
        image: this.mainImage,
      };

      localStorage.setItem("latestItem", JSON.stringify(entry));

      ItemData.push(entry);
      localStorage.setItem("myCart", JSON.stringify(ItemData));

      console.log("myCart", JSON.parse(localStorage.getItem("myCart")));

      this.cartItems = JSON.parse(localStorage.getItem("myCart"));
    },
  },
};
</script>

<style scoped>
.image {
  border-radius: 10px;
}

.discount {
  background-color: hsl(25, 100%, 94%);
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
  box-shadow: 0px 23px 19px 10px hsl(25, 100%, 94%);
}

.bg-add-cart:hover {
  background-color: hsl(24, 91%, 86%);
}

.plus-minus {
  color: hsl(26, 100%, 55%);
  cursor: pointer;
}

.thumbnail img {
  cursor: pointer;
  opacity: 1;
  transition: 0.3s;
}

.thumbnail:hover img {
  opacity: 0.3 !important;
}

.activess {
  opacity: 0.4 !important;
  border: 3px solid hsl(26, 100%, 55%) !important;
}

i {
  transition: 0.3s;
}

i:hover {
  color: hsl(24, 91%, 86%);
}

.avatar:hover {
  border: 2px solid hsl(26, 100%, 55%) !important;
}

.category {
  transition: 0.1s;
}

.category:hover {
  border-bottom: 3px solid hsl(26, 100%, 55%);
}

.category:hover .text {
  color: black !important;
}

.checkout-btn {
  transition: 0.3s;
}

.checkout-btn:hover {
  background-color: hsl(24, 91%, 86%) !important;
}

.cart-count {
  position: absolute;
  top: 3px;
  left: 22px;
  padding: 0px 7px;
  font-size: 9px;
  background-color: hsl(26, 100%, 55%);
  color: white;
  border-radius: 5px;
}
</style>
