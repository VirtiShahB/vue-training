<template>
  <section class="vh-100" style="background-color: #fdccbc">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <p>
            <span class="h2">Shopping Cart </span
            ><span class="h4"
              >({{ this.$route.query.pcart }} item in your cart)</span
            >
          </p>

          <div class="card mb-4" v-if="cartProducts.length > 0">
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
                    <p class="lead fw-normal mb-0">${{ products.PPRICE }}</p>
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
                    <p class="lead fw-normal mb-0">${{ products.PPRICE }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card mb-5">
            <div class="card-body p-4">
              <div class="float-end">
                <p class="mb-0 me-5 d-flex align-items-center">
                  <span class="small text-muted me-2">Order total:</span>
                  <span class="lead fw-normal">${{ totalAmt }}</span>
                </p>
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
export default {
  mixins: [productListMixin],
  name: "Cart",
  data() {
    return {
      cartProducts: [],
      totalAmt: 0,
    };
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
  },
  created() {
    var Likedproduct = JSON.parse(localStorage.getItem("cartProduct"));
    var ProdcutList = JSON.parse(localStorage.getItem("PROLIST"));
    var total = 0;
    ProdcutList.forEach((element) => {
      if (Likedproduct.includes(element.PID)) {
        var objects = {};
        objects["PID"] = element.PID;
        objects["PNAME"] = element.PNAME;
        objects["PIMAGE"] = element.PIMAGE;
        objects["PPRICE"] = element.PPRICE;
        objects["PCOLOR"] = element.COLOR[3];
        objects["SIZE"] = element.SIZE[0];
        this.cartProducts.push(objects);
        total += element.PPRICE;
      }
    });
    this.totalAmt = total;
    localStorage.setItem("SelectedProducts", JSON.stringify(this.cartProducts));
  },
};
</script>
