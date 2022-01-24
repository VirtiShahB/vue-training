<template>
  <div>
      <b-card :img-src="product.image" img-alt="Card image" img-left class="mb-3">
          <b-card-title class="font-weight-bold">{{product.title}}</b-card-title>
          <b-card-sub-title class="font-weight-bold mt-3">Description</b-card-sub-title>
          <b-card-text class="text-muted">{{product.description}}</b-card-text>
          <b-card-sub-title class="font-weight-bold mt-3">Price</b-card-sub-title>
          <h4 class="text-danger font-weight-bolder">$ {{product.price}}</h4>
          <b-row>
              <b-col>
                  <b-form-spinbutton id="quantity" v-model="quantity" min="0" max="100"></b-form-spinbutton>
              </b-col>
              <b-col>
                  <b-button variant="success" @click="onAddToCart"><b-icon-cart></b-icon-cart> Add To Cart</b-button>
              </b-col>
          </b-row>
           <b-alert v-model="showDismissibleAlert" :variant="alertType" class="mt-3" dismissible>
               {{alertMsg}}
            </b-alert>
      </b-card>
  </div>
</template>

<script>
export default {
    name:'ProductDetailComponent',
    props:{
        product: Object,
    },
    data(){
        return {
            quantity:0,
            showDismissibleAlert:false,
            alertType:'success',
            alertMsg:""
        }
    },
    methods:{
        onAddToCart(){
            if(this.quantity==0){
                this.alertMsg = "Removed item from cart"
            }else{
                this.alertMsg = `Product added of quantity ${this.quantity} in a cart`
            }
            this.showDismissibleAlert = true;
        }
    }
}
</script>

<style>

</style>