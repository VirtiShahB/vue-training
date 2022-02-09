<template>
  <div class="container grid">
    <div class="row justify-content-around">
      <div class="col col-xl-3 col-lg-3 d-none d-lg-block d-xl-block">
        <div class="card-selector">
          <div class="card-body p-5">
            <div class="search-title">
              <h4 class="search-title">Filter by +</h4>

              <br />
              <h6 @click="sortI('men')">Men's Were</h6>
              <h6 @click="sortI('women')">Women's Were</h6>
              <h6 @click="sortI('electronics')">Electronics</h6>
              <h6 @click="sortI('jewelery')">Jewelery</h6>
              <hr />
              <br />
              <!-- <div class="co">
                <h5>Color</h5>
                <span
                  class="circle"
                  style="background-color: yellow"
                  @click="sortI('yellow')"
                ></span>
                <span
                  class="circle"
                  style="background-color: blue"
                  @click="sortI('blue')"
                ></span>
                <span
                  class="circle"
                  style="background-color: white"
                  @click="sortI('white')"
                ></span>
                <span
                  class="circle"
                  style="background-color: black"
                  @click="sortI('black')"
                ></span>
              </div> -->
              <br />
              <button
                v-if="showRestButton"
                type="button"
                class="btn btn-outline-secondary btn-sm"
                @click="resetFilter()"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="showInfoComp == false"
        class="row col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12 text-center"
      >
        <div
          v-if="this.CardArray.length == 0"
          class="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12"
        >
          <h4 style="margin-left: 9rem; margin-right: 9rem">
            Sorry, we can't find a product with this features
          </h4>
        </div>

        <transition-group name="fade" class="row" tag="div">
          <div
            v-for="item in CardArray"
            class="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-4 pb-3"
            :key="item.id"
          >
            <div class="card">
              <img
                class="card-img-top card-image"
                :src="item.image"
                alt="Card image cap"
              />
              <div class="overlay">
                <router-link to="/product-info"
                  ><button
                    type="button"
                    class="btn btn-outline-secondary btn-lg"
                    @click="showinfo(item)"
                  >
                    Info
                  </button></router-link
                >
              </div>
              <div class="card-body">
                <h5 class="card-title">{{ item.title | shortProductName }}</h5>
                <p class="card-text">${{ item.price }}</p>
                <button
                  class="btn btn-outline-secondary btn-sm"
                  @click="addTowishlist(item)"
                >
                  Add to Wishlist <i class="fa fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
// import Product from "./Product.vue";
import addTowishlistMixin from "../mixin.js";

export default {
  name: "AllProduct",
  mixins: [addTowishlistMixin],

  data() {
    return {
      CardArray: [],
      itemCount: 0,
      infoItem: [],
      showInfoComp: false,
      wishlist: [],
      wishlistId: [],
      allProduct: [],
      showRestButton: false,
    };
  },
  components: {
    // Product,
  },
  methods: {
    addtoCart() {},
    showinfo(item) {
      this.infoItem = [];
      this.$store.state.infoItem = item;
      this.showInfoComp = true;
    },
    sortI(value) {
      if (value == "men") {
        value = "men's clothing";
      } else if(value == "women") {
        value = "women's clothing";
      }
      this.showRestButton = true;
      this.CardArray = this.allProduct.filter(
        (item) =>
          item.category.toLowerCase().match(value)
      );
    },
    resetFilter() {
      this.CardArray = this.allProduct;
      this.showRestButton = false;
    },
    async getAPIData() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      this.$store.state.items = data;
      this.allProduct = this.$store.state.items;
      this.itemCount = this.$store.state.items.length;
      this.CardArray = this.allProduct;
    },
  },
  mounted() {
    this.showInfoComp = false;
    this.getWishlistItemId();
  },
  created() {
    this.allProduct = this.$store.state.items;
    this.itemCount = this.$store.state.items.length;
    this.wishlist = this.$store.state.wishlist;
    this.CardArray = this.allProduct;
    this.getAPIData();
    this.$store.getters.getRecommendedCategories;
  },
};
</script>
<style scoped>
.fade-move {
  transition: transform 1s;
}
/* Card Style */
.card {
  transition: 500ms;
  position: relative;
  overflow: hidden;
}

.card img {
  z-index: 1;
}
.card-image {
  float: left;
  width: 100px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
}

.card button {
  width: 140px;
  margin-bottom: 10px;
}

.card:hover img {
  filter: blur(4px);
}

.card:hover .overlay {
  opacity: 0.8;
}

.card .overlay {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
  background-color: #232b34;
  opacity: 0;
  z-index: 100;
  transition: all 0.3s ease-in;
}

.card:hover,
.card:active {
  transform: scaleY(1.1) scaleX(1.06);
  box-shadow: 0 14px 98px rgba(0, 0, 0, 0.25), 0 0px 60px rgba(0, 0, 0, 0.22);
}

.container.grid {
  min-height: 60rem;
}

.container.grid a {
  cursor: pointer !important;
}

.btn-light {
  color: black !important;
  background: white;
  border-radius: 0 !important;
  border: 1px solid grey !important;
}
.dropdown-menu {
  background-color: #eee;
  color: #2c3539;
}

.dropdown-menu > a:hover {
  background-color: #dae0e5;
}

.btn-outline-secondary {
  border-radius: 0 !important;
}

/*search options*/

.card-selector {
  color: #dcdcdc;
  height: 40rem;
  background: #2c3539 !important;
  box-shadow: 0 8px 6px 0 rgba(0, 0, 0, 0.1), 0 26px 70px 0 rgba(0, 0, 0, 0.69);
}

.search-title h6 {
  cursor: pointer;
}

.circle {
  height: 17px;
  width: 17px;
  border-radius: 50%;
  border: 0.7px solid #2c3539;
  display: inline-block;
  margin-left: 6px;
  cursor: pointer;
}
</style>
