<template>
  <div>
    <div class="appbar-desktop d-none d-lg-block border-bottom">
      <b-navbar variant="faded" type="light" toggleable="lg" class="py-0">
        <div class="container">
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-navbar-brand class="mb-0">
            <span
              style="font-size: 28px; font-weight: 700; font-family: Amaranth"
            >
              ShoeMart
            </span>
          </b-navbar-brand>

          <b-collapse id="nav-collapse" is-nav v-if="this.$loggedIn">
            <b-navbar-nav>
              <b-nav-item
                class="py-4 category"
                v-for="(category, index) in categories"
                :key="index"
                :href="category.path_name"
              >
                {{ category.title }}
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>

          <b-navbar-nav class="ml-auto d-flex flex-row align-items-center">
            <b-nav-item v-if="this.$loggedIn">
              <b-dropdown
                size="xl"
                variant="link"
                toggle-class="text-decoration-none"
                no-caret
                right
              >
                <template #button-content>
                  <b-img
                    v-if="wishListItems.length > 0"
                    src="/assets/heart.png"
                    class="wishlist-icon"
                    alt="WishList"
                  ></b-img>
                  <b-img
                    v-else
                    src="/assets/love.png"
                    class="wishlist-icon"
                    alt="WishList"
                  ></b-img>
                  <span class="cart-count">
                    {{
                      wishListItems && wishListItems.length > 0
                        ? wishListItems.length
                        : 0
                    }}
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
                      <span style="font-weight: 700"> Wishlist </span>
                    </div>
                    <div
                      class="col-12 px-1 mt-3"
                      style="max-height: 200px; overflow: auto"
                    >
                      <div v-if="wishListItems && wishListItems.length > 0">
                        <div
                          v-for="(item, index) in wishListItems"
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
                          </div>
                          <div class="col-1 px-1">
                            <span @click="deleteWishListItem(item, index)">
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
                              Your wish list is empty.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- </b-dropdown-item> -->
              </b-dropdown>
            </b-nav-item>

            <b-nav-item v-if="this.$loggedIn">
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
                    {{
                      cartItems && cartItems.length > 0 ? cartItems.length : 0
                    }}
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
                    <div
                      class="col-12 my-3"
                      v-if="cartItems && cartItems.length > 0"
                    >
                      <router-link
                        :to="{ name: 'checkout' }"
                        class="p-3 text-white border-0 w-100 checkout-btn"
                        style="
                          background-color: hsl(26, 100%, 55%);
                          font-weight: 700;
                          font-size: 14px;
                          border-radius: 10px;
                        "
                        >Checkout</router-link
                      >
                    </div>
                  </div>
                </div>
                <!-- </b-dropdown-item> -->
              </b-dropdown>
            </b-nav-item>

            <b-nav-item-dropdown
              :text="this.$loggedUser.user_name"
              right
              v-if="this.$loggedIn"
            >
              <b-dropdown-item href="#" @click.prevent="signoutUser"
                >Signout</b-dropdown-item
              >
            </b-nav-item-dropdown>

            <b-nav-item
              :to="{ name: 'signin' }"
              right
              v-if="this.$route.name === 'signup'"
              >Sign In</b-nav-item
            >
            <b-nav-item
              :to="{ name: 'signup' }"
              right
              v-if="this.$route.name === 'signin'"
              >Sign Up</b-nav-item
            >
          </b-navbar-nav>
        </div>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import { bus } from "../eventBus";
import toastMixin from "../mixins/toastMixin";

export default {
  mixins: [toastMixin],
  name: "NavBar",
  data() {
    return {
      categories: [
        {
          title: "Dashboard",
          path_name: "/",
        },
        {
          title: "Products",
          path_name: "/products",
        },
      ],
      cartItems: [],
      wishListItems: [],
    };
  },
  created() {
    this.cartItems = JSON.parse(localStorage.getItem("myCart"));
    this.wishListItems = JSON.parse(localStorage.getItem("wishListItems"));
  },
  mounted() {
    bus.$on("cartItems", () => {
      let items = JSON.parse(localStorage.getItem("myCart"));
      this.cartItems = items;
    });

    bus.$on("wishListItems", () => {
      let wishListItems = JSON.parse(localStorage.getItem("wishListItems"));
      this.wishListItems = wishListItems;
    });
  },
  methods: {
    calcPrice(item) {
      return parseFloat(
        parseFloat(item.price).toFixed(2) * item.quantity
      ).toFixed(2);
    },
    deleteItem(item, index) {
      this.cartItems.splice(index, 1);
      localStorage.setItem("myCart", JSON.stringify(this.cartItems));
      this.fireToastNotification(
        "success",
        item.title + " successfully removed from cart!"
      );
    },
    deleteWishListItem(item, index) {
      this.wishListItems.splice(index, 1);
      localStorage.setItem("wishListItems", JSON.stringify(this.wishListItems));
      this.fireToastNotification(
        "success",
        item.title + " successfully removed from wishlist!"
      );
    },
    signoutUser() {
      localStorage.removeItem("activeUser");
      this.$router.push("/signin");
      this.fireToastNotification("success", "User signedout successfully!");
    },
  },
};
</script>

<style>
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
  color: rgb(27, 26, 26);
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
.wishlist-icon {
  height: 22px;
  width: 20px;
}
</style>
