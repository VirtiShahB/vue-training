<template>

    <div :class="block[product.id]" class="h-100 card">
       
        <div class="border-primay bg-primary card-header">
            <h5 class="card-title">
                <router-link class="text-light" active-class="active"
                    :to="{ name: 'view.product', params: { id: product.id, name : product.title.replace(' ','-') }}">
                    {{product.title}}
                </router-link>
            </h5>
        </div>
        <a v-if="temp_wishlist.findIndex(x => x == product.id) == -1" title="Add to wishlist" class="p-3" @click.prevent="addtowishlist(product)">
            <i class="float-right text-danger" :class="not_in_wish_icon"></i>
        </a>
        <a v-else title="Remove from wishlist" class="p-3" @click.prevent="removefromwishlist(product)">
            <i class="float-right text-danger" :class="in_wish_icon"></i>
            
        </a>
        <router-link :to="{ name: 'view.product', params: { id: product.id, name : product.title.replace(' ','-') }}">
            <img :src="product.image" class="card-img-custom card-img-top" alt="...">
        </router-link>
        <div class="card-body">

            <p class="card-text">

                {{ product.description.length > 100 ? product.description.substring(0, 100) + '...' : product.description }}

            </p>

            <p class="card-text">
                In : <span class="font-weight-normal">{{ product.category.toUpperCase() }}</span>
            </p>


            <div class="d-inline mr-2">{{product.rating.rate}}</div>
            <div class="ratings">
                <div class="empty-stars"></div>
                <div class="full-stars" :style="{width : `${product.rating.width}%` }"></div>
            </div>

            <p class="card-text">

                ({{`${product.rating.count} reviews`}})

            </p>

        </div>
        <div class="card-footer">
            <a @click.prevent="addtocart(1,product.price,'L','White',product.title)" class="btn btn-success btn-md">
                <i class="fa fa-cart-plus"></i> ADD TO CART
            </a>

            <h4 class="text-danger pull-right">
                ${{product.price.toFixed(2)}}
            </h4>
        </div>
    </div>
</template>

<script>
    import { bus } from '../eventBus';
    export default {
        props : ['product'],
        data(){
            return {
                in_wish_icon     : 'fa fa-heart',
                not_in_wish_icon : 'fa fa-heart-o',
                temp_wishlist    : [],
                block            : [],
            }
        },
        methods: {
            addtocart(qty, price, size, color, product) {

                /** Fetch existing cart from storage */

                let cart = JSON.parse(localStorage.getItem('cart_storage'));

                cart = cart != null ? cart : [];

                /** Check if cart has already have this product */

                let index = cart.findIndex(c => c.product == product);

                /** if has then remove it  */

                if (index !== -1) {
                    cart.splice(index, 1);
                }

                /** Push the item in cart */

                cart.push({

                    qty: qty,
                    price: price,
                    size: size,
                    color: color,
                    product: product

                });

                /** Push cart in localstorage */

                localStorage.setItem('cart_storage', JSON.stringify(cart));

                this.$bvToast.toast('Item is added to cart !', {
                    title: 'Added',
                    variant: 'success',
                    solid: true
                });

            },
            addtowishlist(product) {


                let wishlist = JSON.parse(localStorage.getItem('wishlist'));

                wishlist = wishlist != null ? wishlist : [];

                /** Check if wishlist has already have this product */

                let index = wishlist.findIndex(c => c.id == product.id);

                /** if has then remove it  */

                if (index !== -1) {
                    wishlist.splice(index, 1);
                }

                /** Push the item in wishlist array */

                wishlist.push(product);

                /** Push cart in localstorage */

                localStorage.setItem('wishlist', JSON.stringify(wishlist));

                this.$bvToast.toast('Item is added to wishlist !', {
                    title: 'Added',
                    variant: 'success',
                    solid: true
                });

                this.temp_wishlist.push(product.id);

                bus.$emit('wishlist');


            },
            removefromwishlist(product) {



                if(this.$route.name == 'wishlist'){
                    this.block[product.id] = 'd-none';
                }

                let wishlist = JSON.parse(localStorage.getItem('wishlist'));

                /** check if wishlist is not empty or not null */

                if (wishlist != null && wishlist.length > 0) {

                    /** Check if wishlist has already have this product */

                    let index = wishlist.findIndex(c => c.id == product.id);

                    /** if has then remove it  */

                    if (index !== -1) {

                        wishlist.splice(index, 1);

                        localStorage.setItem('wishlist', JSON.stringify(wishlist));

                        this.$bvToast.toast('Item is removed from wishlist !', {
                            title: 'Removed',
                            variant: 'success',
                            solid: true
                        });

                    }

                }

                if (this.temp_wishlist != null && this.temp_wishlist.length > 0) {

                    let index = this.temp_wishlist.findIndex(w => w == product.id);

                    if (index !== -1) {
                        this.temp_wishlist.splice(index, 1);
                    }

                }

                bus.$emit('wishlist');

            }
        },
        
        mounted(){

            if(this.product.in_wishlist == true){
                this.temp_wishlist.push(this.product.id);
            }
            
        }
    }
</script>
<style scoped>
    .card-img-custom {
        width: 200px;
        height: 200px;
        object-fit: scale-down;
        align-items: center;
        position: relative;
        left: 70px;
        padding: 15px;
    }
</style>