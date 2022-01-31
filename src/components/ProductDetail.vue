<template>
    <b-card class="container">
        <b-alert :variant="variant" :show="show">{{ showmsg }}</b-alert>
    <div class="card">
        <div class="row">
            <div class="col-sm-4">
                <b-img v-bind:src="'../../images/' + ImgName" alt="Earphone" fluid-grow></b-img>
            </div>
        <div class="col-sm-7">
            <div class="card-body p-5">
                <h3 class="title mb-3">{{ ProductName }}</h3>
                <p class="price-detail-wrap"> 
                    <span class="price h3 text-warning"> 
                    <span class="price">${{ Price }}</span>
                    </span>
                </p>
                <dl>
                    <dt>Description</dt>
                    <dd><p>{{ Description }}</p></dd>
                </dl>
                <dl>
                    <dt>Model#</dt>
                    <dd>{{ Model }}</dd>
                </dl>
                <dl>
                    <dt>Color</dt>
                    <dd>{{ Color }}</dd>
                </dl>
                <hr>
                <div class="row">
                    <div class="col-sm-5">
                    <b-input-group>
                        <b-input-group-prepend>
                            <b-btn variant="outline-info" @click="Quantity--">-</b-btn>
                        </b-input-group-prepend>
                        <b-form-input type="number" min="0.00" v-model="Quantity" class="cart-quantity"></b-form-input>
                        <b-input-group-append>
                            <b-btn variant="outline-secondary" @click="Quantity++">+</b-btn>
                        </b-input-group-append>
                    </b-input-group>
                    </div>
                    <div class="col-sm-7">
                     <div>
                        <b-form-select v-model="selected" :options="options" class="mb-3">
                        <template #first>
                            <b-form-select-option :value="null" disabled>-- Please select size --</b-form-select-option>
                        </template>
                        </b-form-select>
                    </div>
                    </div>
                    <input type="hidden" :val="this.$route.params.id" class="proid">
                </div>
                <hr>
                <b-button class="buy-now text-uppercase" variant="primary" @click="addToCart(Quantity,'buy')"> Buy now </b-button>
                <b-button  class="text-uppercase" @click="addToCart(Quantity,'cart')" variant="success"> <b-icon icon="cart"></b-icon> Add to cart </b-button>
            </div>
        </div>
    </div>
</div>
    </b-card>  
</template>
<script>
export default {
    name:"ProductDetail",
    data() {
        return {
            ProductName : '',
            Price: '',
            Description: "",
            Quantity: 0,
            Model: '',
            Color:'',
            ImgName: '',
            selected: null,
            options: [
                { value: 'sm', text: 'SM' },
                { value: 'md', text: 'MD' },
                { value: 'xxl', text: 'XXL' }
            ],
            variant:'',
            show:false,
            showmsg:''
        }
    },
    methods: {
        addToCart(quantity,action){
            this.show = true;
            if( quantity == 0 ){
                this.variant="danger";
                this.showmsg = "Please select at least 1 quantity.";
            }
             else if( this.selected == null ) {
                this.variant="danger";
                this.showmsg = "Please select any size.";
            } else {
                localStorage.setItem("ProductName", this.ProductName);
                localStorage.setItem("Price", this.Price);
                localStorage.setItem("Quantity", this.Quantity);
                localStorage.setItem("Size", this.selected);
                this.variant="success";

                if( action == 'cart' ) {
                    this.showmsg = "Product added in cart successfully.";
                } else {
                    this.showmsg = "Continue to be checkout (Next page in progress).";
                }
                this.$router.push('/checkout'); 
            }
            setTimeout(()=>{
                this.show = false;
            },3000);
        }
    },
    watch:{
        quantity(newValue) {
            if( this.quantity == 0 ) {
                localStorage.setItem("ProductName", '');
                localStorage.setItem("Price", '');
                localStorage.setItem("Quantity", '');
                localStorage.setItem("Size", '');
                this.variant="danger";
                this.show = true;
                this.showmsg = "Removed item from cart.";
                 setTimeout(()=>{
                    this.show = false;
                },3000);
            }
            if( newValue <= -1 ) {
                this.quantity = 0;
            }
        }
    },
    created(){
        var index = this.$route.params.id - 1;
        var items = localStorage.getItem("items"); // From localstorage
        var itemsObject = JSON.parse(items);
        for (var key in itemsObject) {
            if ( key == index){
                this.ProductName = itemsObject[key].ProductName;
                this.Price = itemsObject[key].Price;
                this.Description = itemsObject[key].Description;
                this.Model = itemsObject[key].Model;
                this.Color = itemsObject[key].Color;
                this.ImgName = itemsObject[key].Image;
            }
        }
      }
}
</script>
<style scoped>
.gallery-wrap .img-big-wrap img {
    height: fit-content;
    width: auto;
    display: inline-block;
}

.gallery-wrap .img-small-wrap {
    text-align: center;
}
.buy-now{
    margin-right: 10px;
}
.card-body.p-5 {
    text-align: initial;
}
div img.img-fluid.w-100 {
    object-fit: fill;
    width: 100%;
    height: 100%;
}
</style>