<template>
  <div class="RecommandProducts" v-if="RecommandIds.length > 0">
    <h3>Recommanded Products</h3>
    <div class="row px-sm-2 px-0 pt-3">
      <div
        v-for="products in RecommandIds"
        :key="products.PID"
        class="col-md-4 offset-md-0 offset-sm-2 offset-1 col-sm-8 col-10 offset-sm-2 offset-1 mb-3"
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
            class="d-flex align-items-center justify-content-start rating border-top border-bottom py-2"
          ></div>
          <div
            class="d-flex align-items-center justify-content-between py-2 px-3"
          >
            <div class="h4"><span>$</span>{{ products.PPRICE }}</div>
            <div
              class="wish-list"
              v-if="!wishList.includes(products.PID)"
              @click="AddToWishList(products.PID)"
            >
              <i class="far fa-heart" aria-hidden></i>
            </div>
            <div v-else class="wish-list">
              <i class="fas fa-heart"></i>
            </div>
            <div>
              <button
                @click="AddTOCart(products.PID)"
                class="btn btn-dark text-uppercase"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommandProducts",
  data() {
    return {
      wishList: [],
      RecommandIds: [],
    };
  },
  created() {
    var Likedproduct = JSON.parse(localStorage.getItem("wishProduct"));
    this.wishList = Likedproduct;
    var tags = "";
    var id = "";
    var ProdcutList = JSON.parse(localStorage.getItem("PROLIST"));
    ProdcutList.forEach((element) => {
      if (Likedproduct.includes(element.PID)) {
        tags = element.PTAGS;
        id = element.PID;
      }
      if (element.PTAGS == tags && element.PID != id) {
        var objects = {};
        objects["PID"] = element.PID;
        objects["PNAME"] = element.PNAME;
        objects["PIMAGE"] = element.PIMAGE;
        objects["PPRICE"] = element.PPRICE;
        this.RecommandIds.push(objects);
      }
    });
  },
};
</script>
