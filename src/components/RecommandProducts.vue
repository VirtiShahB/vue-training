<template>
  <div class="RecommandProducts" v-if="RecommandIds.length > 0">
    <h3>Recommanded Products</h3>
    <div class="row px-sm-2 px-0 pt-3">
      <div
        v-for="products in RecommandIds"
        :key="products.PID"
        class="
          col-md-4
          offset-md-0 offset-sm-2 offset-1
          col-sm-8 col-10
          offset-sm-2 offset-1
          mb-3
        "
      >
        <div class="card">
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
  </div>
</template>

<script>
import { formFieldMixin } from "../mixins/formFieldMixin.js";
import { wishlistMixin } from "../mixins/wishlistMixin.js";
export default {
  mixins: [formFieldMixin, wishlistMixin],
  name: "RecommandProducts",
  data() {
    return {
      wishList: [],
      RecommandIds: [],
      productList: [
        {
          PID: 13,
          PIMAGE: "./assets/images/914dlXhbmkL._UL1500_.jpg",
          PPRICE: 15,
          PNAME: "SIRIL Women's Crepe Slim Fit Digital Printed Top",
          VARIANTIMAGE: [
            "./assets/images/81d1WtX6jkL._UL1500_.jpg",
            "./assets/images/81-OiPWQYeL._UL1500_.jpg",
            "./assets/images/71cAreRed6L._UL1500_.jpg",
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
          PID: 14,
          PIMAGE: "./assets/images/81V0IoZTWWL._UL1500_.jpg",
          PPRICE: 15,
          PNAME: "Lymio Women's Regular Top",
          VARIANTIMAGE: [
            "./assets/images/81KqFxmw9TL._UL1500_.jpg",
            "./assets/images/81+ZFyPFNzL._UL1500_.jpg",
            "./assets/images/71NBrIFi7WL._UL1500_.jpg",
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
          PID: 14,
          PIMAGE: "./assets/images/71ooEN04ZHL._UL1500_.jpg",
          PPRICE: 10,
          PNAME: "Shasmi Women's Solid Western T-Shirt",
          VARIANTIMAGE: [
            "./assets/images/71ovkiAIvwL._UL1500_.jpg",
            "./assets/images/71Kh4N9erPL._UL1500_.jpg",
            "./assets/images/71enD7rhtFL._UL1500_.jpg",
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
          PID: 16,
          PIMAGE: "./assets/images/61gDJU3IELL._UL1440_.jpg",
          PPRICE: 15,
          PNAME:
            "JUNEBERRY Cotton Full Sleeve Regular Fit T-Shirt for Women/Girls",
          VARIANTIMAGE: [
            "./assets/images/71j+swcqXYL._UL1500_.jpg",
            "./assets/images/61UJMR+zQlL._UL1500_.jpg",
            "./assets/images/61VqNqdFabL._UL1080_.jpg",
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
          PID: 17,
          PIMAGE: "./assets/images/715iMLfgovL._UL1440_.jpg",
          PPRICE: 15,
          PNAME: "Deaim Women Printed Regular fit top",
          VARIANTIMAGE: [
            "./assets/images/51T61WUVQSL.jpg",
            "./assets/images/51qBasLowxL.jpg",
            "./assets/images/71IS8jHmhYL._UL1440_.jpg",
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
          PID: 18,
          PIMAGE: "./assets/images/71gIpd1jZyL._UL1500_.jpg",
          PPRICE: 12,
          PNAME: "Shasmi Women's Western Blouse",
          VARIANTIMAGE: [
            "./assets/images/71Ix8-KhxIL._UL1500_.jpg",
            "./assets/images/81-WuDemrzL._UL1500_.jpg",
            "./assets/images/91bXfu0Dg2L._UL1500_.jpg",
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
          PID: 7,
          PIMAGE: "./assets/images/61SR8oXZ6QL._UL1500_.jpg",
          PPRICE: 15,
          PNAME: "SIRIL Women's Crop Solid Top",
          VARIANTIMAGE: [
            "./assets/images/61K6FYOAC2L._UL1500_.jpg",
            "./assets/images/61O5XpiiYwL._UL1500_.jpg",
            "./assets/images/61M7jc-sUbL._UL1500_.jpg",
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
          PID: 8,
          PIMAGE: "./assets/images/617qeBIEoVL._UL1500_.jpg",
          PPRICE: 15,
          PNAME:
            "Elyraa Women's Casual Long Sleeve Western Top for Women/Girls",
          VARIANTIMAGE: [
            "./assets/images/71lEGASiC7L._UL1500_.jpg",
            "./assets/images/71fWdHT0dHL._UL1500_.jpg",
            "./assets/images/71UDzDKbfxL._UL1500_.jpg",
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
          PID: 9,
          PIMAGE: "./assets/images/714H361NfrL._UL1440_.jpg",
          PPRICE: 10,
          PNAME: "Lymio Women's Regular Top",
          VARIANTIMAGE: [
            "./assets/images/713JKOZ9+7L._UL1440_.jpg",
            "./assets/images/711b4tNMHYL._UL1440_.jpg",
            "./assets/images/71Vba59mv+L._UL1440_.jpg",
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
          PID: 10,
          PIMAGE: "./assets/images/41y7AEudTbL.jpg",
          PPRICE: 15,
          PNAME:
            "HELISHA® Women's & Girl's Slim Fit Padded Crush Tank-Top (Removable Pads) Free-Size (26-32 Bust-Size)",
          VARIANTIMAGE: [
            "./assets/images/61xMEbfXzhL._UL1320_.jpg",
            "./assets/images/61vFcF6U4UL._UL1077_.jpg",
            "./assets/images/61c9LCiI37L._UL1080_.jpg",
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
          PID: 11,
          PIMAGE: "./assets/images/61W8LcK2OPL._UL1500_.jpg",
          PPRICE: 15,
          PNAME: "Harpa Women's Plain Top",
          VARIANTIMAGE: [
            "./assets/images/61mhKF3aksL._UL1500_.jpg",
            "./assets/images/61jj-Gt67XL._UL1500_.jpg",
            "./assets/images/616SS0xfOxL._UL1500_.jpg",
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
          PID: 12,
          PIMAGE: "./assets/images/81CIBvF4VrL._UL1500_.jpg",
          PPRICE: 12,
          PNAME:
            "Miss Chase Women's Super Soft Round Neck Full Sleeves Solid Boxy Crop Top",
          VARIANTIMAGE: [
            "./assets/images/81cyER9vfBL._UL1500_.jpg",
            "./assets/images/71KBLxa1CPL._UL1500_.jpg",
            "./assets/images/71zQrdLtkuL._UL1500_.jpg",
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
  },
  created() {
    var pro = this.$store.state.products;
    var tagsdata = [];
    var Likedproduct = JSON.parse(localStorage.getItem("wishProduct"));
    pro.forEach((ele) => {
      if (Likedproduct.includes(ele.PID)) {
        tagsdata.push(ele.PTAGS);
      }
    });
    this.wishList = Likedproduct;
    var ProdcutList = this.productList;
    ProdcutList.forEach((element) => {
      if (tagsdata.includes(element.PTAGS)) {
        var objects = {};
        objects["PID"] = element.PID;
        objects["PNAME"] = element.PNAME;
        objects["PIMAGE"] = element.PIMAGE;
        objects["PPRICE"] = element.PPRICE;
        this.RecommandIds.push(objects);
      }
    });

     this.$store.commit("recommandProducts", this.productList);
  },
};
</script>
