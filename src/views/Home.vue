<template>
  <div class="home">
    <toast message="Product added to cart" :show.sync="showToast" />
    <main-header
      :productCount="productCount"
      :is-products-dialog-active.sync="isProductsDialogActive"
    />
    <section class="pv-wrapper">
    
    <main class="pv-container">
        <div>
          <div class="card-main-title">
           
          </div>
          <div class="cards-main">
            <div
              class="prod-card-wrapper"              
            >
            <b-row>
              <product-list 
                v-for="(product, i) in allProducts"
                :key="i"
                :product="product"
                @add-to-chart="addToChard"
                @add-to-whislist="addToWhislist"
              />
            </b-row>
            </div>
          </div>

        </div>
    </main>
  </section>
  </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from '@/components/MainHeader.vue';
import ProductList from '@/components/ProductList.vue';
import Toast from '@/components/Toast.vue';
import products from '@/data/products.js';

export default {
  name: 'Home',
  components: {
    MainHeader,
    ProductList,
    Toast,
  },
  data() {
    return {
      allProducts: [...products], // All products from json file.
      selectedProducts: [], // Selected products list.
      productCount: 0, // Total selected product count.
      showToast: false, // Showed when any product is added.
    };
  },
  methods: {
    /**
     * Add products to list
     * @param {Object} product - Product at selectedProducts array
     */
    addToChard(product) {
      let sameProduct = this.selectedProducts.find((item) => item.id === product.id);
      if (sameProduct) {
        const findedSize = sameProduct.sizes.find(
          (item) => item.number === product.sizes[0].number
        );
        if (findedSize) {
          findedSize.piece += product.sizes[0].piece;
        } else {
          sameProduct.sizes.push({
            number: product.sizes[0].number,
            piece: product.sizes[0].piece,
          });
        }

        sameProduct.piece += product.piece;
        sameProduct.price += product.price;
      } else {
        this.selectedProducts.push(product);
      }
      this.productCount += product.piece;
      this.showToast = true;
    },
    addToWhislist(product) {
      let sameProduct = this.selectedProducts.find((item) => item.id === product.id);
      if (sameProduct) {
        const findedSize = sameProduct.sizes.find(
          (item) => item.number === product.sizes[0].number
        );
        if (findedSize) {
          findedSize.piece += product.sizes[0].piece;
        } else {
          sameProduct.sizes.push({
            number: product.sizes[0].number,
            piece: product.sizes[0].piece,
          });
        }

        sameProduct.piece += product.piece;
        sameProduct.price += product.price;
      } else {
        this.selectedProducts.push(product);
      }
      this.productCount += product.piece;
      this.showToast = true;
    },
    
    
  },
}
</script>
<style scoped>
.prod-card-wrapper{
  padding: 20px;
}
</style>