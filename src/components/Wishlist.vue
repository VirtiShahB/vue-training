<template>
  <div>
    <div class="container redd py-5" style="padding-top: 70px">
      <div class="row">
        <div class="col-md-6">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Your Wishlist item</span>
            <span class="badge badge-secondary badge-pill">3</span>
          </h4>
        </div>
      </div>
    </div>

    <div class="container grid">
      <div v-if="showInfoComp == false" class="row justify-content-around">
        <div
          class="row col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12 text-center"
        >
          <div
            v-if="this.wishlist.length == 0"
            class="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12"
          >
            <h4 style="margin-left: 9rem; margin-right: 9rem">
              Sorry, we can't find a product with this features
            </h4>
          </div>

          <transition-group name="fade" class="row" tag="div">
            <div
              v-for="item in wishlist"
              class="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-4 pb-3"
              :key="item.id"
            >
              <div class="card">
                <img
                  class="card-img-top"
                  :src="item.img"
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
                  <h5 class="card-title">{{ item.title }}</h5>
                  <p class="card-text">${{ item.price }}</p>
                  <button
                    class="btn btn-outline-secondary btn-sm"
                    @click="removeFromWishlist(item)"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Product from "./Product.vue";
export default {
  name: "Wishlist",
  data() {
    return {
      CardArray: [],
      itemCount: 0,
      infoItem: [],
      showInfoComp: false,
      wishlist: [],
      wishlistId: [],
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
    removeFromWishlist(item) {
      this.$store.commit("inWishlist", item);
      this.getWishlistItemId();
    },
    getWishlistItemId() {
      var item = this.wishlist;
      this.wishlistId = [];
      for (let index = 0; index < item.length; index++) {
        if (this.wishlistId.includes(item[index].id) == false) {
          this.wishlistId.push(item[index].id);
        } else {
          let getIndex = this.wishlistId.indexOf(item[index].id);
          this.wishlistId.splice(getIndex, 1);
        }
      }
    },
  },
  mounted() {
    this.showInfoComp = false;
    this.getWishlistItemId();
  },
  created() {
    this.CardArray = this.$store.state.items;
    this.itemCount = this.$store.state.items.length;
    this.wishlist = this.$store.state.wishlist;
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
</style>
