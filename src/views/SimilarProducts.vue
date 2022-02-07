<template>
  <div>
    <h3>{{ tagLine }}</h3>

    <b-carousel
      id="productSlider"
      :interval="4000"
      controls
      indicators
      img-width="300"
      img-height="100"
      style="text-shadow: 1px 1px 2px #333"
    >
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img v-for="(sp,index) in similarProducts" :key="index"s
            class="d-block"
            width="480"
            height="600"
            :src="sp.image"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  props: ["tagLine", "similarProducts"],
  created() {
    console.log(this.similarProducts);
  },
};
</script>
