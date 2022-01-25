<template>
  <Main>
    <template #iteminbread>
      Cart
    </template>
    <template #content>
      <div class="row">
        <div class="col-md-6">
            <center>
              <carousel items="1" autoplay="true" :nav="false">

                <img class="img-owl" src="https://placeimg.com/200/200/any?1">

                <img class="img-owl" src="https://placeimg.com/200/200/any?2">

                <img class="img-owl" src="https://placeimg.com/200/200/any?3">

                <img class="img-owl" src="https://placeimg.com/200/200/any?4">

            </carousel>
            </center>
        </div>

        <div class="col-md-6">

          <h4 class="d-flex justify-content-between">
            PRINTED SUMMER DRESS
          </h4>

          <div class="d-flex">
            <div>
              <span class="text-warning fa fa-star checked"></span>
              <span class="text-warning fa fa-star checked"></span>
              <span class="text-warning fa fa-star checked"></span>
              <span class="text-warning fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
            &nbsp;
            <a href="#">
              Write a review
            </a>
          </div>

          <br>

          <p class="d-flex">
            Reference : <span class="ml-8 text-danger">demo_42</span>

          </p>

          <p class="d-flex">
            Condition : <span class="ml-8 text-danger">New Product</span>
          </p>

          <hr>

          <p class="d-flex">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, amet!
          </p>

          <h4 class="text-danger d-flex">
            ${{ price.toFixed(2) }}
          </h4>

          <hr>

          <div class="d-flex row">
            <div class="col-2">
              Quantity
            </div>

            <div class="col-2">
              <input type="text" class="form-control" v-model="quantity">
            </div>

            <div class="col-1">
              <button @click.prevent="increment()" class="btn btn-md btn-secondary">
                +
              </button>
            </div>

            <div class="col-1">
              <button @click.prevent="decrement()" class="btn btn-md btn-secondary">
                -
              </button>
            </div>

            <div class="col-4">
              <button class="btn btn-md btn-danger">
                <i class="fa fa-cart-plus"></i> ADD TO CART
              </button>
            </div>
          </div>

          <div class="mt-3 d-flex">

            <button class="btn btn-secondary">
              <i class="text-white fa fa-envelope"></i>
            </button>

            <button class="ml-8 btn btn-secondary">
              <i class="text-white fa fa-print"></i>
            </button>

            <span class="ml-8">
              <button class="btn btn-secondary">
                <i class="text-white fa fa-heart"></i>
              </button>
            </span>
            
          </div>

          <div class="mt-3 d-flex">

            <label class="p-1">Size</label>
            <select name="size" id="size" class="ml-15 w-50 form-control">
              <option value="">Please select size</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
            </select>
            
          </div>

          <div class="mt-3 d-flex">

            <label class="p-1">Color</label>
           
            
          </div>

          <div class="p-1 mt-1 d-flex">
             
            <div class="border box-yellow">
              &nbsp;
            </div>

            <div class="ml-8 border bg-white-custom">
              &nbsp;
            </div>
          </div>

        </div>
      </div>
    </template>
  </Main>
</template>

<script>
  import Main from './Main.vue';
  import carousel from 'vue-owl-carousel';

  export default {
    data(){
      return {
        quantity : 1,
        price    : 30.50,
        images: [
          'https://img.freepik.com/free-psd/close-up-wood-texture-mockup_23-2149160964.jpg',
          'https://image.freepik.com/free-psd/book-mockup-with-shadow-overlay_23-2149209545.jpg',
          'https://image.freepik.com/free-psd/minimalist-book-cover-mock-up_23-2148622915.jpg',
        ]
      }
    },
    components: {
      Main,
      carousel
    },
    methods : {
        increment(){
          this.quantity += 1;
          this.price = this.price * this.quantity;
        },
        decrement(){

          this.price = this.price / this.quantity;
          
          let customqty = this.quantity-1;

          this.quantity = customqty != 0 ? customqty : 1;
          
          
        }
    }
  }
</script>

<style>

</style>