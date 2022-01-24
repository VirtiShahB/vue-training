<template>
    <b-card class="container">
        <b-alert :variant="variant" :show="show">{{ showmsg }}</b-alert>
    <div class="card">
        <div class="row">
            <aside class="col-sm-5">
                <article class="gallery-wrap">
                    <div class="img-big-wrap">
                        <b-img src="../../public/images/earphone.jpeg" alt="Earphone" fluid-grow></b-img>
                    </div>
                </article>
            </aside>
        <div class="col-sm-7">
            <div class="card-body p-5">
                <h3 class="title mb-3">{{ pro_name }}</h3>
                <p class="price-detail-wrap"> 
                    <span class="price h3 text-warning"> 
                    <span class="price">${{ price }}</span>
                    </span>
                </p>
                <dl>
                    <dt>Description</dt>
                    <dd><p>{{ description }}</p></dd>
                </dl>
                <dl>
                    <dt>Model#</dt>
                    <dd>{{ model }}</dd>
                </dl>
                <dl>
                    <dt>Color</dt>
                    <dd>{{ color }}</dd>
                </dl>
                <hr>
                <div class="row">
                    <div class="col-sm-5">
                    <b-input-group>
                        <b-input-group-prepend>
                            <b-btn variant="outline-info" @click="quantity--">-</b-btn>
                        </b-input-group-prepend>
                        <b-form-input type="number" min="0.00" v-model="quantity" class="cart-quantity"></b-form-input>
                        <b-input-group-append>
                            <b-btn variant="outline-secondary" @click="quantity++">+</b-btn>
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
                </div>
                <hr>
                <b-button class="buy-now text-uppercase" variant="primary" @click="addToCart(quantity,'buy')"> Buy now </b-button>
                <b-button  class="text-uppercase" @click="addToCart(quantity,'cart')" variant="success"> <b-icon icon="cart"></b-icon> Add to cart </b-button>
            </div>
        </div>
    </div>
</div>
    </b-card>  
</template>
<script>
export default {
    name:"Product",
    data() {
        return {
            pro_name : 'Bolt headphone',
            price: '25.99',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.BoAt Bassheads 900 Wired On Ear Headphones with Mic",
            quantity: 0,
            model: 'Bolt',
            color:'Black and white',
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
        addToCart: function(quantity,action){
            this.show = true;
            if( quantity == 0 ){
                this.variant="danger";
                this.showmsg = "Please select at least 1 quantity.";
            }
             else if( this.selected == null ) {
                this.variant="danger";
                this.showmsg = "Please select any size.";
            } else {
                localStorage.setItem("pro_name", this.pro_name);
                localStorage.setItem("price", this.price);
                localStorage.setItem("quantity", this.quantity);
                localStorage.setItem("size", this.selected);
                this.variant="success";

                if( action == 'cart' ) {
                    this.showmsg = "Product added in cart successfully.";
                } else {
                    this.showmsg = "Continue to be checkout (Next page in progress).";
                }
            }
            
            setTimeout(()=>{
                this.show = false;
            },3000);
        }
    },
    watch:{
        quantity: function(newValue) {

            if( this.quantity == 0 ) {

                localStorage.setItem("pro_name", '');
                localStorage.setItem("price", '');
                localStorage.setItem("quantity", '');
                localStorage.setItem("size", '');
                
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
</style>