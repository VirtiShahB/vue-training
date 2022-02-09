<template>
  <div class="container">
    <div class="row product-list">
      <h2>
        <p><strong>Products</strong></p>
      </h2>
      <div class="col-sm-3" v-for="(item, index) in items" :key="index">
        <b-img
          thumbnail
          v-bind:src="'../../images/' + item.Image"
          alt="Earphone"
          fluid
          class="img-section"
        ></b-img>
        <div class="product-outline">
          <h1>{{ item.ProductName }}</h1>
          <div
            v-if="item.Favorite == 0"
            class="h2 mb-0 fav_items"
            @click="AddToFavorite(item, index)"
          >
            <b-icon icon="heart"></b-icon>
          </div>
          <div
            v-else
            class="h2 mb-0 fav_items"
            @click="RemoveFromFavorite(item, index)"
          >
            <b-icon icon="heart-fill"></b-icon>
          </div>

          <p class="price">${{ item.Price }}</p>
          <p>{{ item.Description }}</p>
          <router-link :to="'product/detail/' + item.Id">
            <p class="view-button">
              <b-button class="form-control">View</b-button>
            </p>
          </router-link>
        </div>
      </div>
    </div>
    <RecommendedProduct v-if="this.recommendedProduct.length > 0" />
  </div>
</template>
<script>
import list from "../assets/js/ProductItems";
import toastMessage from "../mixins/ToastMessage";
import RecommendedProduct from "../views/RecommendedProduct.vue";

const items = list.slice(0, 4);

export default {
  name: "ProductList",
  mixins: [toastMessage],
  components: { RecommendedProduct },
  data() {
    return {
      items: items,
      ArrWishList: [],
      recommendedProduct: [],
    };
  },
  methods: {
    AddToFavorite(item, index) {
      if (
        localStorage.getItem("loginnedUser") !== null &&
        localStorage.getItem("loginnedUser") != ""
      ) {
        this.items[index].Favorite = 1;
        this.ArrWishList.push(item);

        const parsedObject = JSON.parse(localStorage.getItem("items"));
        parsedObject[index].Favorite = 1;

        const modifiedndstrigifiedForStorage = JSON.stringify(parsedObject);
        localStorage.setItem("items", modifiedndstrigifiedForStorage);

        localStorage.setItem("WishListitems", JSON.stringify(this.ArrWishList));
        this.makeToastMessage("Product added in Wishlist.", "success");
        // Recommended product
        const relatedProducts = parsedObject.filter(function (product) {
          if (item.Tag == product.Tag) {
            return true;
          }
        });
        relatedProducts.forEach((element) => {
          this.recommendedProduct.push(element);
        });
        localStorage.setItem(
          "recommendedProduct",
          JSON.stringify(this.recommendedProduct)
        );
      } else {
        this.$router.push("/login");
      }
    },
    RemoveFromFavorite(item, index) {
      if (
        localStorage.getItem("loginnedUser") !== null &&
        localStorage.getItem("loginnedUser") != ""
      ) {
        var WishedList = JSON.parse(localStorage.getItem("WishListitems"));
        this.items[index].Favorite = 0;
        WishedList.splice(index, 1);
        localStorage.setItem("WishListitems", JSON.stringify(WishedList));
        const parsedObject = JSON.parse(localStorage.getItem("items"));

        parsedObject[index].Favorite = 0;
        const modifiedndstrigifiedForStorage = JSON.stringify(parsedObject);
        localStorage.setItem("items", modifiedndstrigifiedForStorage);

        this.makeToastMessage("Product removed from wishlist.", "primary");
        // Removed recommended product
        const recommendedProduct = JSON.parse(
          localStorage.getItem("recommendedProduct")
        );
        if (recommendedProduct.length > 0) {
          const relatedProducts = recommendedProduct.filter(function (product) {
            return product.Tag !== item.Tag;
          });
          this.recommendedProduct = relatedProducts;
          localStorage.setItem(
            "recommendedProduct",
            JSON.stringify(this.recommendedProduct)
          );
        }
      } else {
        this.$router.push("/login");
      }
    },
  },
  created() {
    if (JSON.parse(localStorage.getItem("recommendedProduct")) == null) {
      this.recommendedProduct = [];
    } else {
      this.recommendedProduct = JSON.parse(
        localStorage.getItem("recommendedProduct")
      );
    }
  },
};
</script>
<style scoped>
.price {
  color: rgb(251 3 83);
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}
.view-button {
  background-color: #747b74 !important;
}

.card button:hover {
  opacity: 0.7;
}
p.cart-btn {
  margin-top: 10px;
}
.cart-quantity {
  height: auto;
}
.cart-btn {
  background-color: #181f18 !important;
}
.product-list {
  margin-top: 10%;
  text-align: center;
}
.img-section {
  height: 35%;
  width: 100%;
}
.product-outline {
  border: 1px outset;
}
svg.bi-heart.b-icon.bi {
  cursor: pointer;
}
.fav_items {
  position: absolute;
  bottom: 0px;
  top: 5px;
  right: 15px;
  left: 215px;
}
</style>
