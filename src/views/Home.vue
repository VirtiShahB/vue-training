<template>
  <div class="home">
    <toast :message="message" :show.sync="showToast" />
    <main-header
      :productCount="productCount"
      :is-products-dialog-active.sync="isProductsDialogActive"
    />
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Welcome to the Ecommerce App</h1>
          <h2 class="subtitle">
            Make sure you check out our upcoming products below
          </h2>
          
        </div>
      </div>
    </section>
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
  <footer-page />
  </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from '@/components/MainHeader.vue';
import FooterPage from '@/components/Footer.vue';
import ProductList from '@/components/ProductList.vue';
import Toast from '@/components/Toast.vue';
import products from '@/data/products.js';

export default {
  name: 'Home',
  components: {
    MainHeader,
    ProductList,
    Toast,
    FooterPage,
  },
  data() {
    return {
      allProducts: [...products], // All products from json file.
      selectedProducts: [], // Selected products list.
      productCount: 0, // Total selected product count.
      showToast: false, // Showed when any product is added.
      message:""
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
        console.log(localStorage.loginArray);
      }
      this.productCount += product.piece;
      this.message =  "Product added to cart";      
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
      this.message =  "Product added to cart";
      console.log(this.message);
      this.showToast = true;
    },
    
    
  },
}
</script>
<style scoped>
.prod-card-wrapper{
  padding: 20px;
}
 .hero {
    text-align: center;
    background-image: url('https://cdn.shopify.com/s/files/1/0067/6901/6943/files/home3-slider2.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 400px;
  }
  .hero-body .title {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
    padding: 40px 0 20px 0;
    font-size: 60px;
  }
  .subtitle {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
    font-size: 30px;
  }
  
</style>