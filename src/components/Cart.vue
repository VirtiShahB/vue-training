<template>
  <div>
    <div :class="cClass">
      <div class="cart-menu">
        <h1 class="text-center">Cart</h1>
        <hr />

        <transition name="fade">
          <div
            v-if="this.cartItem.length === 0"
            class="text-center font-italic"
          >
            Your cart is empty, try to Add stuff.
          </div>
        </transition>

        <transition-group name="fade">
          <div
            class="row"
            v-for="(item, index) in cartItem"
            :key="index + item.id"
          >
            <div class="col4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
              <img :src="item.img" style="width: 90px" />
            </div>
            <div class="col6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <h4>{{ item.title }}{{ index }}</h4>
              <h6>${{ item.price }}</h6>
            </div>
            <div class="col2 col-xl-2 col-lg-2 col-md-2 col-sm-2 pt-4">
              <span class="remove-btn" @click="removeThing(item.id)"
                >remove</span
              >
            </div>
          </div>
        </transition-group>
        <hr v-if="this.cartItem.length !== 0" />
        <div
          class="row justify-content-between"
          style="background: #7dcf85; padding: 10px 10px 10px 10px"
          v-if="this.cartPrice"
        >
          <div class="flex-column pl-3">
            <h4>Total</h4>
          </div>
          <div class="flex-column pr-3">
            <h4>${{ cartPrice }}</h4>
          </div>
        </div>
        <button type="button" class="checkout-button" @click="showCheckout()">
          Checkout
        </button>
      </div>
    </div>

    <div :class="modalClass" @click="cartON"></div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: ["showCart"],
  data() {
    return {
      cClass: "",
      modalClass: "",
      cartItem: [],
    };
  },
  computed: {
    cartPrice() {
      return this.$store.getters.cartTotalAmount;
    },
  },
  methods: {
    cartON() {
      if (this.cClass === "cart on") {
        this.cClass = "cart";
        this.modalClass = "modal off";
      } else {
        this.cClass = "cart on";
        this.modalClass = "modal";
      }
    },
    showCheckout() {
      this.$router.push({ path: "/checkout" });
    },
    removeThing(itemId) {
      let index = this.$store.state.cartItems.findIndex((x) => x.id === itemId);
      this.$store.state.cartItems.splice(index, 1);
    },
  },
  mounted() {
    if (this.showCart == true) {
      (this.cClass = "cart on"), (this.modalClass = "modal");
    } else {
      (this.cClass = "cart"), (this.modalClass = "modal off");
    }
    this.cartItem = this.$store.state.cartItems;
  },
};
</script>

<style scoped>
/* Modal Overlay */
.modal {
  display: block;
  z-index: 1050;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
.modal.off {
  display: none;
}
/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
/* Cart Body */
.cart {
  position: fixed;
  margin-right: 0px;
  top: 0;
  right: 0;
  width: 360px;
  height: 100%;
  background: #303e49;
  overflow-y: auto;
  z-index: 1051;
  -webkit-overflow-scrolling: touch;
  transform: translateX(360px);
  transition-property: transform;
  transition-duration: 0.4s;
}
.cart.on {
  transform: translateX(0);
  -webkit-overflow-scrolling: touch;
  transition-property: transform;
  transition-duration: 0.4s;
}

.cart-menu {
  color: #eee;
  margin-left: 10px;
  margin-right: 15px;
}

hr {
  border-color: white;
}

.row {
  margin-top: 10px;
  margin-bottom: 10px;
}

.remove-btn {
  border-radius: 50%;
  content: url("../assets/multiply.png");
}

.remove-btn:hover {
  background-color: grey;
}
.checkout-button {
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  width: 330px;
  height: 35px;
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
.checkout-button:hover,
.checkout-button:focus {
  background-color: inherit;
  color: black;
}
</style>
