<template>
  <div class="wrapper rounded bg-white">
    <div
      class="d-flex align-items-center justify-content-end px-sm-3 pt-3 px-1"
    >
      <div class="text-muted">Items per page (<b>6 items</b> )</div>
      <select name="num" id="num" class="px-2 py-1 ml-sm-2 ml-1">
        <option value="10">10</option>
      </select>
      <select
        name="sort"
        id="sort"
        class="px-1 py-1 ml-2"
        @change="onChange($event)"
      >
        <option value="" selected>All</option>
        <option value="rating">Rating</option>
        <option value="popular">Popular</option>
        <option value="featured">Featured</option>
      </select>
    </div>
    <hr />
    <div class="row px-sm-2 px-0 pt-3">
      <div
        v-for="products in this.$store.state.products"
        :key="products.PID"
        class="
          col-md-4
          offset-md-0 offset-sm-2 offset-1
          col-sm-8 col-10
          offset-sm-2 offset-1
          mb-3
        "
      >
        <div class="card" v-if="filters == products.PFILTER || filters == ''">
          <div class="px-2 red text-uppercase">new</div>
          <div
            class="d-flex justify-content-center"
            @click="ProductDetails(products.PID)"
          >
            <img :src="products.PIMAGE" class="product" alt="" />
          </div>
          <b class="px-2">
            <p class="h4">{{ products.PNAME.substring(0, 8) + "..." }}</p>
          </b>
          <div
            class="
              d-flex
              align-items-center
              justify-content-start
              rating
              border-top border-bottom
              py-2
            "
          ></div>
          <div
            class="d-flex align-items-center justify-content-between py-2 px-3"
          >
            <div class="h4"><span>$</span>{{ products.PPRICE }}</div>
            <div
              class="wish-list"
              @click="RemoveToWishList(products.PID)"
              v-show="wishProduct1.includes(products.PID)"
              :id="products.PID"
            >
              <i class="fas fa-heart"></i>
            </div>
            <div
              :id="'wish_' + products.PID"
              class="wish-list"
              v-show="!wishProduct1.includes(products.PID)"
              @click="AddToWishList(products.PID)"
            >
              <i class="far fa-heart" aria-hidden></i>
            </div>

            <div v-show="!cartProduct1.includes(products.PID)">
              <button
                @click="AddTOCart(products.PID)"
                class="btn btn-dark text-uppercase"
              >
                Add To Cart
              </button>
            </div>
            <div v-show="cartProduct1.includes(products.PID)">
              <button
                @click="RemoveTOCart(products.PID)"
                class="btn btn-dark text-uppercase"
              >
                Remove Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <RecommandProducts />
  </div>
</template>

<script>
import RecommandProducts from "./RecommandProducts.vue";
import { formFieldMixin } from "../mixins/formFieldMixin.js";
import { wishlistMixin } from "../mixins/wishlistMixin.js";
export default {
  mixins: [formFieldMixin, wishlistMixin],
  name: "ProductList",
  components: {
    RecommandProducts,
  },
  data() {
    return {
      wishid: "",
      filters: "",
      wishList: JSON.parse(localStorage.getItem("wishProduct"))
        ? JSON.parse(localStorage.getItem("wishProduct"))
        : "0",
      productList: [
        {
          PID: 1,
          PIMAGE: "./assets/images/81Qelj0EE2L._UL1500_.jpg",
          PPRICE: 15,
          PNAME: "Lymio Women's Regular Top",
          VARIANTIMAGE: [
            "./assets/images/81N9SlzS2WL._UL1500_.jpg",
            "./assets/images/81xC+090X+L._UL1500_.jpg",
            "./assets/images/815wroENzxL._UL1500_.jpg",
          ],
          COLOR: ["White", "Green", "Black", "Blue"],
          SIZE: ["XS", "S", "M", "L", "XL"],
          DESCRIPTION:
            "Fabric : Reyon DISCLAIMER: The images shown are for representational purposes only. Please note that the colour of the product may slightly vary in comparison to the picture shown on the website due to various reasons which may include different lighting and devices during photo-shoot and also the colour settings and resolution of your own monitor screen. It is also important to note that we thrive to bring you the best, but, there may be a little difference in terms of fabric and colour, Wash Care: The Dry clean is recommended.",
          PFILTER: "rating",
          PTAGS: "Top",
          QUANTITY: 1,
        },
        {
          PID: 2,
          PIMAGE: "./assets/images/714QwfIyriL._UL1500_.jpg",
          PPRICE: 15,
          PNAME:
            "Lymio Women's Regular Color Chocker Neck Half Sleeve Polyester Digital Printed Top",
          VARIANTIMAGE: [
            "./assets/images/61KrFSQU3wL._UL1500_.jpg",
            "./assets/images/71p7xLPoWnL._UL1500_.jpg",
            "./assets/images/71pvJWIODLL._UL1500_.jpg",
          ],
          COLOR: ["Pista", "Pitch", "Black", "Pink", "Sky Blue"],
          SIZE: ["XS", "S", "M", "L", "XL"],
          DESCRIPTION:
            "Wash Care : first wash is dry clean after that use machine wash or hand wash,Care Instructions: Dry Clean Only,Fit Type: Regular,Fabric : Polyester,Color : Black",
          PFILTER: "rating",
          PTAGS: "Printed",
          QUANTITY: 1,
        },
        {
          PID: 3,
          PIMAGE: "./assets/images/71G7J+1e+EL._UL1500_.jpg",
          PPRICE: 10,
          PNAME: "Women's Top",
          VARIANTIMAGE: [
            "./assets/images/41Qgmobhw4L.jpg",
            "./assets/images/31BCeJlOXTL.jpg",
            "./assets/images/71Dyt1Ctd1L._UL1500_.jpg",
          ],
          COLOR: [
            "White",
            "Garnet Maroon",
            "Mint Green",
            "Scarlet Red",
            "Yellow",
          ],
          SIZE: ["XS", "S", "M", "L", "XL"],
          DESCRIPTION:
            "Care Instructions: Hand Wash Only,Fit Type: Slim Fit,Collar Style: Collarless; Fit Type: Slim Fit; Sleeve Type: Long Sleeve.",
          PFILTER: "popular",
          PTAGS: "Top",
          QUANTITY: 1,
        },
        {
          PID: 4,
          PIMAGE: "./assets/images/61ixnJfhicL._UL1500_.jpg",
          PPRICE: 15,
          PNAME:
            "Elyraa Women's Western Polka Dot Long Sleeve Stylish Tops for Women/Girls",
          VARIANTIMAGE: [
            "./assets/images/61IBDEdXE9L._UL1500_.jpg",
            "./assets/images/61ixnJfhicL._UL1500_.jpg",
            "./assets/images/718xuKCH76L._UL1500_.jpg",
          ],
          COLOR: ["Black", "Red", "Green", "Maroon", "Yellow"],
          SIZE: ["XS", "S", "M", "L", "XL"],
          DESCRIPTION:
            "Care Instructions: Hand Wash Only,Fit Type: Slim Fit,Collar Style: Collarless; Fit Type: Slim Fit; Sleeve Type: Long Sleeve.",
          PFILTER: "popular",
          PTAGS: "Printed",
          QUANTITY: 1,
        },
        {
          PID: 5,
          PIMAGE: "./assets/images/71+h8xvBcQL._UL1500_.jpg",
          PPRICE: 15,
          PNAME: "Lymio Women's Regular Top",
          VARIANTIMAGE: [
            "./assets/images/81RgDs9JpBL._UL1500_.jpg",
            "./assets/images/81o+wtPxnqL._UL1500_.jpg",
            "./assets/images/511D2DIUTXL._UL1118_.jpg",
          ],
          COLOR: ["Black", "Red", "Green", "Maroon", "Yellow"],
          SIZE: ["XS", "S", "M", "L", "XL"],
          DESCRIPTION:
            "Care Instructions: Hand Wash Only,Fit Type: Slim Fit,Collar Style: Collarless; Fit Type: Slim Fit; Sleeve Type: Long Sleeve.",
          PFILTER: "featured",
          PTAGS: "Regular",
          QUANTITY: 1,
        },
        {
          PID: 6,
          PIMAGE: "./assets/images/71mNCtoF4vL._UL1500_.jpg",
          PPRICE: 12,
          PNAME: "Shasmi Women's Western Blouse",
          VARIANTIMAGE: [
            "./assets/images/71Gj9P08fmL._UL1500_.jpg",
            "./assets/images/71jo5PSiN2L._UL1500_.jpg",
            "./assets/images/71uBDuZjZjL._UL1500_.jpg",
          ],
          COLOR: ["Black", "Red", "Green", "Maroon", "Yellow"],
          SIZE: ["XS", "S", "M", "L", "XL"],
          DESCRIPTION:
            "Care Instructions: Hand Wash Only,Fit Type: Slim Fit,Collar Style: Collarless; Fit Type: Slim Fit; Sleeve Type: Long Sleeve.",
          PFILTER: "featured",
          PTAGS: "Regular",
          QUANTITY: 1,
        },
      ],
    };
  },
  mounted() {
    localStorage.setItem("PROLIST", JSON.stringify(this.productList));
    this.$store.commit("productList", this.productList);
  },
  computed: {
    wishProduct1: {
      get() {
        if (this.$store.state.wishpro) {
          return this.$store.state.wishpro;
        } else {
          return [];
        }
      },
    },
    cartProduct1: {
      get() {
        if (this.$store.state.cartProduct) {
          return this.$store.state.cartProduct;
        } else {
          return [];
        }
      },
    },
  },
  methods: {
    ProductDetails(id) {
      this.$router.push({
        path: "/productDetails",
        query: {
          id: id,
        },
      });
    },
    onChange(event) {
      this.filters = event.target.value;
    },
  },
  created: function () {
    if (JSON.parse(localStorage.getItem("cartProduct"))) {
      this.CartPro = JSON.parse(localStorage.getItem("cartProduct")).length;
    }
  },
};
</script>
