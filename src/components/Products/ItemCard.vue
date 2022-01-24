<template>
  <div>
    <b-card no-body class="overflow-hidden" style="max-width: 540px">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img
            :src="product.image"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body title="Title">
            <b-row no-gutters>
              <b-card-text> {{ product.description }} </b-card-text>
            </b-row>
            <b-row no-gutters>
              <b><h3>${{ product.price }}</h3></b></b-row
            >
            <hr />
            <b-row no-gutters class="mt-3">
              <b-col md="5">
                <b-input-group>
                  <b-input-group-append>
                    <b-button @click="removeItem">-</b-button>
                  </b-input-group-append>
                  <b-form-input
                    type="text"
                    v-model="itemCount"
                    disabled
                  ></b-form-input>
                  <b-input-group-append>
                    <b-button @click="addItem">+</b-button>
                  </b-input-group-append>
                </b-input-group>
              </b-col>
              <b-col md="1"></b-col>
              <b-col md="6">
                <b-button variant="danger" @click="addToCart(product.id)"
                  >Add to cart</b-button
                >
              </b-col>
            </b-row>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  components: {},
  props: ['product'],
  data () {
    return {
      itemCount: 1
    }
  },
  methods: {
    addItem () {
      this.itemCount += 1
    },
    removeItem () {
      if (this.itemCount <= 1) {
        this.itemCount = 1
      } else {
        this.itemCount -= 1
      }
    },
    addToCart (productId) {
      if (this.itemCount > 0) {
        const selectedProducts = { id: productId, qty: this.itemCount }
        this.$emit('cartListener', selectedProducts)
      }
    }
  }
}
</script>
<style scoped>
.input-group  {
  width: 107% !important;
}
</style>
