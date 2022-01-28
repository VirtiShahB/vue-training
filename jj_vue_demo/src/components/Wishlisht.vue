<template>
  <b-container>
    <b-row class="mt-4">
      <b-col>
        <b-card
          v-for="wishlisht in wishlishts"
          :key="wishlisht.id"
          img-src="https://placekitten.com/300/300"
          img-alt="Card image"
          img-left
          class="mb-3 mt-4"
        >
          <b-card-text>
            <h3>{{ wishlisht.name }}</h3>
            <hr />
            <h5>{{ wishlisht.description }}</h5>
            <h5>${{ wishlisht.price }}</h5>
            <!-- <b-col sm="2">
              <b-button
                variant="outline-primary"
                class="mt-3 mr-md-5"
                style="margin-right: 10px"
                @click="incQty()"
                >+</b-button
              >
              <span class="cart__quantity">{{ wishlisht.quantity }}</span>
              <b-button
                variant="outline-primary"
                class="mt-3 mr-3"
                @click="decQty()"
                >-</b-button
              >
            </b-col> -->
            <b-button
              variant="outline-primary"
              class="mt-3 mr-3"
              style="margin-right: 10px"
              @click="showProduct(wishlisht)"
              >View Product</b-button
            >
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Wishlisht",
  data() {
    return {
      fields: [
        "name",
        {
          key: "price",
          formatter: (value) => {
            return "$" + value;
          },
        },
      ],
      wishlishts: [],
    };
  },
  mounted() {
    this.wishlishts = this.$store.state.wishlistProducts;
  },
  methods: {
      showProduct(wishlist){
          console.log(wishlist);
          this.$router.push({
        name: "productDetail",
        params: { data: wishlist },
      });
      }
  }
};
</script>
