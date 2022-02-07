<template>
  <div>
    <b-container class="bv-example-row w-100">
      <h1 class="text-left">Products Listing</h1>
      <b-row>
        <b-col cols="9">
          <b-row>
            <b-col
              cols="3"
              v-for="item of computedProducts"
              :key="item.id"
              class="p-0 mt-5 item_block"
            >
              <router-link
                :to="{
                  name: 'ProductDetail',
                  params: { id: item.id, item: item },
                }"
              >
                <img
                  :src="item.image"
                  alt="item image"
                  class="img-fluid mb-2"
                  v-bind="mainProps"
                />
              </router-link>
              <span class="wishlist_block">
                <b-icon
                  v-if="isWishlisted(item.id)"
                  icon="heart"
                  @click="addWishlist(item, wishListItemId)"
                  font-scale="1.5"
                  class="wishlist_icon"
                ></b-icon>
                <b-icon
                  v-else
                  icon="heart-fill"
                  font-scale="1.5"
                  class="wishlist_icon"
                  @click="removeFromWishlist(item, wishListItemId)"
                  variant="danger"
                ></b-icon>
              </span>
              <div class="item_detail_block">
                <router-link
                  :to="{
                    name: 'ProductDetail',
                    params: { id: item.id, item: item },
                  }"
                >
                  <p class="mb-0 item_title">{{ item.title }}</p>
                </router-link>
                <div>
                  <b-icon
                    v-if="isLikedItem(item.id)"
                    icon="hand-thumbs-up"
                    font-scale="0.5"
                    class="like_icon"
                    variant="info"
                    @click="addLikedItem(item.id, likedItemId)"
                  ></b-icon>
                  <b-icon
                    v-else
                    icon="hand-thumbs-up"
                    font-scale="1.5"
                    class="rounded-circle bg-danger p-1 liked_icon"
                    variant="light"
                    @click="dislikedItem(item.id, likedItemId)"
                  ></b-icon>
                  <p class="red mt-2 mb-2">{{ "₹ " + item.price }}</p>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="3">
          <b-card class="filter text-left">
            <div>
              <label><strong>Keyword</strong></label>
              <b-form-input type="text" v-model="keyword"> </b-form-input><br />
              <label><strong>Tags</strong></label>
              <br />
              <b-form-checkbox
                v-model="tags"
                v-for="(filterTag, index) of filterTags"
                :key="index + '-filter_author'"
                :value="filterTag"
                >{{ filterTag }}
              </b-form-checkbox>
            </div>
          </b-card>
          <b-card
            class="recommand_product text-left mt-2 text-center"
            v-if="this.recommandProduct.length > 0"
          >
            <strong>Recommand Products</strong>
            <b-row
              class="d-block mt-5"
              v-for="recommandProduct of this.recommandProduct"
              :key="recommandProduct.id"
            >
              <img
                :src="recommandProduct.image"
                alt="item image"
                class="img-fluid mb-2 h-10"
                v-bind="recommandProps"
              />
              <p class="item_title">{{ recommandProduct.title }}</p>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mixin } from "../mixin";

export default {
  mixins: [mixin],
  name: "Dashboard",
  data() {
    return {
      tags: [],
      keyword: "",
      filterTags: [],
      wishList: [],
      wishListItemId: [],
      likedItemId: [],
      recommandProduct: [],
      mainProps: { blank: true, class: "m1" },
      recommandProps: { width: 150, height: 150 },
      items: [
        {
          id: 1,
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          price: 109.95,
          description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          tag: "men's clothing",
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          default_qty: 1,
        },
        {
          id: 2,
          title: "Mens Casual Premium Slim Fit T-Shirts ",
          price: 22.3,
          description:
            "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
          tag: "men's clothing",
          image:
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
          default_qty: 1,
        },
        {
          id: 3,
          title: "Mens Cotton Jacket",
          price: 55.99,
          description:
            "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
          tag: "men's clothing",
          image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
          default_qty: 1,
        },
        {
          id: 4,
          title: "Mens Casual Slim Fit",
          price: 15.99,
          description:
            "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
          tag: "men's clothing",
          image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
          default_qty: 1,
        },
        {
          id: 5,
          title:
            "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
          price: 695,
          description:
            "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
          tag: "jewelery",
          image:
            "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
          default_qty: 1,
        },
        {
          id: 6,
          title: "Solid Gold Petite Micropave ",
          price: 168,
          description:
            "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
          tag: "jewelery",
          image:
            "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
          default_qty: 1,
        },
        {
          id: 7,
          title: "White Gold Plated Princess",
          price: 9.99,
          description:
            "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
          tag: "jewelery",
          image:
            "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
          default_qty: 1,
        },
        {
          id: 8,
          title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
          price: 10.99,
          description:
            "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
          tag: "jewelery",
          image:
            "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
          default_qty: 1,
        },
        {
          id: 9,
          title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
          price: 64,
          description:
            "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
          tag: "electronics",
          image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
          default_qty: 1,
        },
        {
          id: 10,
          title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
          price: 109,
          description:
            "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
          tag: "electronics",
          image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
          default_qty: 1,
        },
        {
          id: 11,
          title:
            "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
          price: 109,
          description:
            "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
          tag: "electronics",
          image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
          default_qty: 1,
        },
        {
          id: 12,
          title:
            "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
          price: 114,
          description:
            "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
          tag: "electronics",
          image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
          default_qty: 1,
        },
        {
          id: 13,
          title:
            "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
          price: 599,
          description:
            "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
          tag: "electronics",
          image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
          default_qty: 1,
        },
        {
          id: 14,
          title:
            "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) ",
          price: 999.99,
          description:
            "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
          tag: "electronics",
          image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
          default_qty: 1,
        },
        {
          id: 15,
          title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
          price: 56.99,
          description:
            "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
          tag: "women's clothing",
          image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
          default_qty: 1,
        },
        {
          id: 16,
          title:
            "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
          price: 29.95,
          description:
            "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
          tag: "women's clothing",
          image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
          default_qty: 1,
        },
        {
          id: 17,
          title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
          price: 39.99,
          description:
            "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
          tag: "women's clothing",
          image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
          default_qty: 1,
        },
        {
          id: 18,
          title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
          price: 9.85,
          description:
            "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
          tag: "women's clothing",
          image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
          default_qty: 1,
        },
        {
          id: 19,
          title: "Opna Women's Short Sleeve Moisture",
          price: 7.95,
          description:
            "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
          tag: "women's clothing",
          image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
          default_qty: 1,
        },
        {
          id: 20,
          title: "DANVOUY Womens T Shirt Casual Cotton Short",
          price: 12.99,
          description:
            "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
          tag: "women's clothing",
          image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
          default_qty: 1,
        },
      ],
      sortBy: "title",
    };
  },
  computed: {
    computedProducts: function () {
      return this.items
        .filter((item) => {
          return (
            (this.keyword.length === 0 || item.title.includes(this.keyword)) &&
            (this.tags.length === 0 || this.tags.includes(item.tag))
          );
        })
        .sort((a, b) => {
          return a[this.sortBy]
            .toString()
            .localeCompare(b[this.sortBy].toString());
        });
    },
  },
  methods: {
    addWishlist(item, wishListItemId) {
      this.$store.commit("addWishlist", { item, wishListItemId });
    },
    addLikedItem(itemId, likedItemId) {
      this.$store.commit("addLikedItem", { itemId, likedItemId });
    },
    dislikedItem(itemId, likedItemId) {
      this.$store.commit("dislikedItem", {
        itemId,
        likedItemId,
      });
    },
    isWishlisted(itemId) {
      return !this.wishListItemId.includes(itemId);
    },
    isLikedItem(itemId) {
      return !this.likedItemId.includes(itemId);
    },
    getLikedList() {
      if (!localStorage.getItem("likedList")) {
        localStorage.setItem("likedList", JSON.stringify([]));
      }
      const likedListArray = JSON.parse(localStorage.getItem("likedList"));
      if (likedListArray.length > 0) {
        for (var i = 0; i < likedListArray.length; i++) {
          this.likedItemId[i] = likedListArray[i];
        }
      }
    },
    getRecommandProductList() {
      const getRecomandTags = [];
      if (this.likedItemId.length > 0 && this.items.length > 0) {
        for (var j = 0; j < this.items.length; j++) {
          if (this.likedItemId.includes(this.items[j].id)) {
            if (!getRecomandTags.includes(this.items[j].tag)) {
              getRecomandTags.push(this.items[j].tag);
            }
          }
        }
        for (var i = 0; i < this.items.length; i++) {
          if (getRecomandTags.includes(this.items[i].tag)) {
            this.recommandProduct.push(this.items[i]);
          }
        }
      }
    },
  },
  beforeMount() {
    if (this.items.length > 0) {
      for (var i = 0; i < this.items.length; i++) {
        if (!this.filterTags.includes(this.items[i].tag)) {
          this.filterTags.push(this.items[i].tag);
        }
      }
    }
    this.getWishList();
    this.getLikedList();
    this.getRecommandProductList();
  },
};
</script>

<style scoped>
.filter .author {
  float: left;
}
.item_block {
  cursor: pointer;
  height: 100%;
  margin: 0 10px;
  border: none;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
  box-shadow: 0px 3px 6px rgb(0 0 0 / 16%);
}
.item_block img {
  overflow: hidden;
  height: 222px;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.item_block .item_detail_block {
  height: 100px;
}
.wishlist_icon {
  position: absolute;
  right: 5px;
  top: 8px;
  background-repeat: no-repeat;
  background-size: 25px;
  background-position: 0 1px;
  width: 28px;
  height: 28px;
  cursor: pointer;
}
.like_icon,
.liked_icon {
  position: absolute;
  right: 5px;
  background-repeat: no-repeat;
  background-size: 25px;
  background-position: 0 1px;
  cursor: pointer;
}
.liked_icon {
  width: 30px;
  height: 30px;
}
.like_icon {
  width: 20px;
  height: 20px;
}
.wishlist_block {
  width: 40px;
  height: 40px;
  position: absolute;
  right: 15px;
  background: #00000058;
  border-radius: 5px;
  top: 20px;
}
</style>
