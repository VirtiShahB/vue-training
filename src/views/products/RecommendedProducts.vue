<template>
  <b-row class="" v-if="availableRecommendedProducts.length > 0">
    <b-col sm="12">
      <h1 class="my-5 text-center">
        <span class="text-primary">R</span>ecommended
        <span class="text-primary">P</span>roducts
      </h1>
      <b-carousel indicators class="m-3">
        <b-carousel-slide
          v-for="(slide, index) in availableRecommendedProducts"
          :key="index"
        >
          <template v-slot:img>
            <b-row class="justify-content-center">
              <b-col
                cols="12"
                md="3"
                class="mb-3"
                v-for="(imgsrc, indexKey) in slide"
                :key="indexKey"
              >
                <b-card :img-src="imgsrc.image" img-top no-body style="">
                  <b-card-body class="text-center">
                    <b-card-title>{{ imgsrc.name }}</b-card-title>
                  </b-card-body>
                </b-card>
              </b-col>
            </b-row>
          </template>
        </b-carousel-slide>
      </b-carousel>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "RecommendedProducts",
  props: {
    productId: Number,
  },
  data() {
    return {
      recommendedProducts: [],
    };
  },
  methods: {
    async getRecommendedProducts(productId) {
      var availableRecommendedProducts =
        await this.$api.products.getRecommendedProducts(productId);
      if (availableRecommendedProducts) {
        this.recommendedProducts = availableRecommendedProducts;
      }
    },
  },
  mounted() {
    this.getRecommendedProducts(this.productId);
  },
  computed: {
    availableRecommendedProducts() {
      var i,
        j,
        chunk = 4;
      let temporaryArr = [];
      for (i = 0, j = this.recommendedProducts.length; i < j; i += chunk) {
        temporaryArr.push(this.recommendedProducts.slice(i, i + chunk));
      }
      return temporaryArr;
    },
  },
};
</script>

<style>
.carousel-indicators > li {
  background-color: blue;
}

.card-img-top {
  min-height: 200px;
  object-fit: cover;
}
</style>