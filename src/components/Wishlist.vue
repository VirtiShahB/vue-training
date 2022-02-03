<template>
  <div>
    <h3 class="text-left">Wishlist</h3>
    <b-row>
      <b-col
        cols="3"
        v-for="(item, index) of wishList"
        :key="index"
        class="p-0 mt-5 item_block"
      >
        <router-link
          :to="{ name: 'ProductDetail', params: { id: item.id, item: item } }"
        >
          <img
            :src="require('@/assets/images/' + item.image)"
            alt="book image"
            class="img-fluid mb-2"
            v-bind="mainProps"
          />
        </router-link>
        <span class="wishlist_block">
          <b-icon
            icon="heart-fill"
            variant="danger"
            @click="removeFromWishlist(item, wishListItemId)"
            font-scale="1.5"
            class="wishlist_icon"
          ></b-icon>
        </span>
        <div class="book_detail_block">
          <router-link
            :to="{ name: 'ProductDetail', params: { id: item.id, item: item } }"
          >
            <p class="mb-0 book_title">{{ item.title }}</p>
          </router-link>
          <p class="book_author mb-0">
            <b-icon-chevron-right scale="0.7"></b-icon-chevron-right
            >{{ item.author }}
          </p>
          <p class="red mt-2 mb-2">{{ "₹ " + item.price }}</p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mixin } from "../mixin";
export default {
  mixins: [mixin],
  name: "WishList",
  data() {
    return {
      mainProps: { blank: true, class: "m1" },
      wishList: [],
      wishListItemId: [],
    };
  },
  beforeMount() {
    this.getWishList();
  },
};
</script>

<style scoped>
.item_block {
  cursor: pointer;
  height: 100%;
  margin: 0 20px;
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
.item_block .book_detail_block {
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
