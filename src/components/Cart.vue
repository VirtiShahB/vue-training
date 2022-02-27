<template>
  <section class="vh-100" style="background-color: #fdccbc">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <p>
            <span class="h2">Shopping Cart </span
            ><span class="h4">({{ CartNew.length }} item in your cart)</span>
          </p>

          <div class="card mb-4" v-if="CartNew.length > 0">
            <div
              class="card-body p-4"
              v-for="products in cartProducts"
              :key="products.PID"
              :id="products.PID"
            >
              <div class="row align-items-center">
                <div class="col-md-2">
                  <img
                    :src="products.PIMAGE"
                    class="img-fluid"
                    alt="Generic placeholder image"
                  />
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                  <div>
                    <p class="small text-muted mb-4 pb-2">Name</p>
                    <p class="lead fw-normal mb-0">
                      {{ products.PNAME }}
                    </p>
                  </div>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                  <div>
                    <p class="small text-muted mb-4 pb-2">Color</p>
                    <p class="lead fw-normal mb-0">
                      <i
                        class="fas fa-circle me-2"
                        :style="{ color: products.PCOLOR }"
                      ></i>
                      {{ products.PCOLOR }}
                    </p>
                  </div>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                  <div>
                    <p class="small text-muted mb-4 pb-2">Size</p>
                    <p class="lead fw-normal mb-0">
                      {{ products.SIZE }}
                    </p>
                  </div>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                  <div>
                    <p class="small text-muted mb-4 pb-2">Price</p>
                    <input
                      type="hidden"
                      name="real-price"
                      :id="'real_' + products.PID"
                      v-model="products.RealPrice"
                    />
                    <p class="lead fw-normal mb-0">${{ products.RealPrice }}</p>
                  </div>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                  <div>
                    <p class="small text-muted mb-4 pb-2">Quantity</p>
                    <p style="display: flex">
                      <a
                        href="javascript:void(0)"
                        class="btn w-100 count"
                        v-on:click="add(products.PID, products.RealPrice)"
                        >+</a
                      >
                      <span
                        class="form-control d-flex text-center w-100"
                        :id="'qty_' + products.PID"
                        >{{ products.QUANTITY }}</span
                      >
                      <a
                        href="javascript:void(0)"
                        class="btn w-100 count"
                        v-on:click="remove(products.PID, products.RealPrice)"
                        >-</a
                      >
                    </p>
                  </div>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                  <div>
                    <p class="small text-muted mb-4 pb-2">Total</p>
                    <input
                      type="hidden"
                      name="total"
                      v-model="products.PPRICE"
                    />
                    $<span
                      class="lead fw-normal mb-0"
                      :id="'pr_' + products.PID"
                      >{{ products.PPRICE }}</span
                    >
                  </div>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                  <div>
                    <p class="small text-muted mb-4 pb-2"></p>
                    <button
                      @click="RemoveCart(products.PID)"
                      class="btn btn-dark text-uppercase"
                    >
                      Remove Product
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card mb-5" v-if="CartNew.length > 0">
            <div class="card-body p-4">
              <div class="float-end">
                <p class="mb-0 me-5 d-flex align-items-center">
                  <span class="small text-muted me-2">Order total:</span>
                  $<span class="lead fw-normal" :id="'totalAmount'">{{
                    totalAmt
                  }}</span>
                </p>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="card mb-5" v-if="CartNew.length == 0">
              <div class="card-body p-4">
                <div>
                  <h3 style="text-align: center">Cart is Empty</h3>
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex justify-content-end">
            <button
              type="button"
              class="btn btn-light btn-lg me-2"
              @click="backToHome()"
            >
              Continue shopping
            </button>
            <button
              v-if="CartNew.length > 0"
              type="button"
              class="btn btn-success btn-lg"
              @click="checkout()"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { productListMixin } from "../mixins/productListMixin.js";
import { formFieldMixin } from "../mixins/formFieldMixin.js";
export default {
  mixins: [productListMixin, formFieldMixin],
  name: "Cart",
  data() {
    return {
      cartProducts: [],
      totalAmt: 0,
      cart: 1,
      ProQty: [],
    };
  },
  computed: {
    TotalAmount: {
      get() {
        return this.totalAmt;
      },
    },
    CartNew: {
      get() {
        if (this.$store.state.cartProduct) {
          return this.$store.state.cartProduct;
        } else {
          var arr = [];
          return arr;
        }
      },
    },
  },
  methods: {
    backToHome() {
      this.$router.push("/");
    },
    checkout() {
      this.$router.push({
        path: "/checkout",
      });
    },
    add(pid, p) {
      var cartNew = document.getElementById("qty_" + pid).textContent;
      cartNew = parseInt(cartNew) + 1;
      document.getElementById("pr_" + pid).innerHTML = p * cartNew;
      document.getElementById("qty_" + pid).innerHTML = cartNew;
      var total = document.getElementById("totalAmount").textContent;
      document.getElementById("totalAmount").innerHTML =
        parseInt(total) + parseInt(p);
      var yes = 0;
      for (var z = 0; z < this.ProQty.length; z++) {
        if (this.ProQty[z]["PID"] == pid) {
          this.ProQty[z]["PQTY"] = cartNew;
          yes = 1;
        }
      }
      if (yes == 0) {
        var objects = {};
        objects["PID"] = pid;
        objects["PQTY"] = cartNew;
        objects["PRICE"] = p;
        this.ProQty.push(objects);
      }

      for (var s = 0; s < this.cartProducts.length; s++) {
        if (this.cartProducts[s]["PID"] == pid) {
          this.cartProducts[s]["QUANTITY"] = cartNew;
          this.cartProducts[s]["PPRICE"] = p * cartNew;
        }
      }
      localStorage.setItem(
        "SelectedProducts",
        JSON.stringify(this.cartProducts)
      );
      this.$store.commit("ProQty", this.ProQty);
      this.$toasted.show("Item added in Cart", {
        title: "added !",
        variant: "success",
        toaster: "b-toaster-bottom-center",
        solid: true,
      });
    },
    remove(pid, price) {
      var cartNew = document.getElementById("qty_" + pid).textContent;
      if (cartNew > 1) {
        cartNew = parseInt(cartNew) - 1;
        document.getElementById("pr_" + pid).innerHTML =
          parseInt(price) * cartNew;
        document.getElementById("qty_" + pid).innerHTML = cartNew;
        var total = document.getElementById("totalAmount").textContent;
        document.getElementById("totalAmount").innerHTML =
          parseInt(total) - parseInt(price);
        for (var z = 0; z < this.ProQty.length; z++) {
          this.ProQty[z]["PQTY"] = cartNew;
        }
        this.$store.commit("ProQty", this.ProQty);

        for (var p = 0; p < this.cartProducts.length; p++) {
          if (this.cartProducts[p]["PID"] == pid) {
            this.cartProducts[p]["QUANTITY"] = cartNew;
            this.cartProducts[p]["PPRICE"] = parseInt(price) * cartNew;
          }
        }
        localStorage.setItem(
          "SelectedProducts",
          JSON.stringify(this.cartProducts)
        );
      }
      this.$toasted.show("Item removed in Cart", {
        title: "removed !",
        variant: "success",
        toaster: "b-toaster-bottom-center",
        solid: true,
      });
    },
    RemoveCart(pid) {
      var total = document.getElementById("pr_" + pid).textContent;
      var newTotal =
        parseInt(document.getElementById("totalAmount").textContent) -
        parseInt(total);
      document.getElementById("totalAmount").innerHTML = newTotal;

      for (var z = 0; z < this.ProQty.length; z++) {
        if (this.ProQty[z]["PID"] == pid) {
          this.ProQty.splice(z, 1);
        }
      }
      this.$store.commit("ProQty", this.ProQty);

      for (var p = 0; p < this.cartProducts.length; p++) {
        if (this.cartProducts[p]["PID"] == pid) {
          this.cartProducts.splice(p, 1);
        }
      }

      const index = this.cartProduct.indexOf(pid);
      if (index > -1) {
        this.cartProduct.splice(index, 1); // 2nd parameter means remove one item only
      }

      document.getElementById(pid).remove();
      this.$store.commit("cart", this.cartProduct);
      localStorage.setItem(
        "SelectedProducts",
        JSON.stringify(this.cartProducts)
      );

      this.$toasted.show("Item removed in Cart", {
        title: "removed !",
        variant: "success",
        toaster: "b-toaster-bottom-center",
        solid: true,
      });
    },
  },
  created() {
    var Likedproduct = this.$store.state.cartProduct;
    var ProdcutList = this.$store.state.products;
    var total = 0;
    if (this.$store.state.qty) {
      this.ProQty = this.$store.state.qty;
    }
    ProdcutList.forEach((element) => {
      if (Likedproduct != null) {
        if (Likedproduct.includes(element.PID)) {
          var objects = {};
          objects["PPRICE"] = element.PPRICE;
          objects["QUANTITY"] = element.QUANTITY;
          for (var z = 0; z < this.ProQty.length; z++) {
            if (this.ProQty[z]["PID"] == element.PID) {
              objects["PPRICE"] =
                parseInt(this.ProQty[z]["PQTY"]) * parseInt(element.PPRICE);
              objects["QUANTITY"] = this.ProQty[z]["PQTY"];
            }
          }
          objects["RealPrice"] = element.PPRICE;
          objects["PID"] = element.PID;
          objects["PNAME"] = element.PNAME;
          objects["PIMAGE"] = element.PIMAGE;
          objects["PCOLOR"] = element.COLOR[3];
          objects["SIZE"] = element.SIZE[0];

          this.cartProducts.push(objects);
          this.$store.commit("cart", this.cartProduct);

          total += objects["PPRICE"];
        }
      }
    });
    this.totalAmt = total;
    localStorage.setItem("SelectedProducts", JSON.stringify(this.cartProducts));
  },
};
</script>
