<template>
    <Main>
        <template #iteminbread>
            Cart
        </template>
        <template #content>
            <div v-if="!loading" class="row">
                <div class="col-md-6">
                    <center>
                        <carousel :items="1" :loop="true" :autoplay="true" :nav="false">

                            <img width="300px" class="img-owl img-fluid" :src="product.image">

                        </carousel>
                    </center>
                </div>

                <div class="col-md-6">

                    <h4 class="d-flex justify-content-between">
                        {{ product.title }}
                    </h4>

                    <div class="d-flex">
                        <label class="mr-2 mt-1 badge badge-success">
                            {{product.rating.rate}}
                        </label>
                        <div class="ratings">
                            <div class="empty-stars"></div>
                            <div class="full-stars" :style="{width : `${width}%` }"></div>
                        </div>
                        &nbsp;

                        <a class="mr-1" href="#">Write a review</a> (<span
                            class="mr-1 font-weight-bold">{{product.rating.count}}</span> reviews)

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
                        {{ product.description }}
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
                            <input @change="reflectprice()" type="text" class="form-control" v-model="quantity">
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
                            <button @click.prevent="addtocart()" class="btn btn-md btn-danger">
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
                            <button v-if="!in_wishlist" title="Add to wishlist" @click.prevent="addtowishlist(product)"
                                class="btn btn-secondary">
                                <i class="text-white fa fa-heart-o"></i>
                            </button>
                            <button v-else title="Remove from wishlist" @click.prevent="removefromwishlist(product)"
                                class="btn btn-secondary">
                                <i class="text-white fa fa-heart"></i>
                            </button>
                        </span>

                    </div>

                    <div class="mt-3 d-flex">

                        <label class="p-1">Size</label>
                        <select name="size" id="size" v-model="size" class="ml-15 w-50 form-control">
                            <option value="">Please select size</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>

                    </div>

                    <div class="mt-3 d-flex">

                        <label class="p-1">Color</label>


                    </div>

                    <div class="p-1 mt-1 d-flex">

                        <div @click.prevent="colorchooser('1','Yellow')" :class="{ active_c : active == 1 }"
                            class="border box-yellow">
                            &nbsp;
                        </div>

                        <div @click.prevent="colorchooser('2','White')" :class="{ active_c : active == 2 }"
                            class="ml-8 border bg-white-custom">
                            &nbsp;
                        </div>
                    </div>

                </div>
            </div>
            <div v-else>
                <b-row>
                    <b-col>
                        <b-skeleton-img animation="throb" height="500px"></b-skeleton-img>
                    </b-col>
                    <b-col>
                        <b-skeleton height="30px"></b-skeleton>
                        <b-skeleton class="mt-2" width="30%"></b-skeleton>

                        <b-skeleton class="mt-5" width="30%"></b-skeleton>
                        <b-skeleton class="mt-2" width="30%"></b-skeleton>

                        <hr>
                        <b-skeleton animation="throb" width="85%"></b-skeleton>
                        <b-skeleton animation="throb" width="55%"></b-skeleton>
                        <b-skeleton animation="throb" width="70%"></b-skeleton>

                        <b-skeleton class="mt-3" type="button"></b-skeleton>

                        <hr>

                        <b-skeleton animation="throb" height="30px"></b-skeleton>
                        <br>
                        <div class="clearfix">
                            <b-skeleton class="pull-left" type="avatar"></b-skeleton>
                            <b-skeleton class="ml-2 pull-left" type="avatar"></b-skeleton>
                            <b-skeleton class="ml-2 pull-left" type="avatar"></b-skeleton>
                        </div>

                        <p class="mt-3">
                            <b-skeleton width="200px" height="30px"></b-skeleton>
                            <b-skeleton width="200px" height="30px"></b-skeleton>
                        </p>

                    </b-col>

                </b-row>
            </div>
        </template>
    </Main>
</template>

<script>
    import Main from './Main.vue';
    import axios from 'axios';
    import carousel from 'vue-owl-carousel';
    import { bus } from '../eventBus';
    export default {
        components: {
            Main,
            carousel
        },
        data() {
            return {
                product: {},
                price: 0,
                orignal_price: 0,
                quantity: 1,
                size: '',
                color: '',
                active: 0,
                width: 0,
                loading: true,
                in_wishlist: '',
            }
        },
        methods: {

            increment() {

                this.quantity = this.quantity + 1;
                this.price = this.orignal_price * this.quantity;


            },
            reflectprice() {

                this.quantity = this.quantity == 0 ? 1 : this.quantity;

                console.log(this.quantity);

                this.price = this.orignal_price * this.quantity;

            },
            decrement() {

                this.price = this.price / this.quantity;

                let customqty = this.quantity - 1;

                this.price = customqty != 0 ? this.price * customqty : this.price * 1;

                this.quantity = customqty != 0 ? customqty : 1;

            },
            addtocart() {

                if (this.size == '') {
                    alert('Please select size');
                    return false;
                }

                if (this.color == '') {
                    alert('Please choose color');
                    return false;
                }

                let cart = JSON.parse(localStorage.getItem('cart_storage'));

                cart = cart != null ? cart : [];

                let index = cart.findIndex(c => c.product == this.product && c.size == this.size && c.color == this
                    .color);

                if (index !== -1) {
                    cart.splice(index, 1);
                }


                cart.push({
                    qty: this.quantity,
                    price: this.price,
                    size: this.size,
                    color: this.color,
                    product: this.product.title
                });

                localStorage.setItem('cart_storage', JSON.stringify(cart));

                this.$router.push('/checkout');

            },
            colorchooser(id, value) {
                this.color = value;
                this.active = id;
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

                this.in_wishlist = true;

                this.$bvToast.toast('Item is added to wishlist !', {
                    title : 'Added !',
                    variant: 'success',
                    solid: true
                });

                bus.$emit('wishlist');


            },
            removefromwishlist(product) {

                let wishlist = JSON.parse(localStorage.getItem('wishlist'));

                /** check if wishlist is not empty or not null */

                if (wishlist != null && wishlist.length > 0) {

                    /** Check if wishlist has already have this product */

                    let index = wishlist.findIndex(c => c.id == product.id);

                    /** if has then remove it  */

                    if (index !== -1) {
                        wishlist.splice(index, 1);
                        localStorage.setItem('wishlist', JSON.stringify(wishlist));
                        this.in_wishlist = false;
                        this.$bvToast.toast('Item is removed from wishlist !', {
                            title : 'Removed !',
                            variant: 'success',
                            solid: true
                        });

                        

                    }

                    bus.$emit('wishlist');

                }

            }

        },
        async mounted() {
            await axios.get('https://fakestoreapi.com/products/' + this.$route.params.id)
                .then(res => {

                    this.product = res.data;
                    this.orignal_price = res.data.price;
                    this.price = res.data.price;
                    this.width = (res.data.rating.rate / 5) * 100;

                    let get_wishlist = JSON.parse(localStorage.getItem('wishlist'));

                    /** get item wishlist and check if item is in wishlist*/

                    let in_wishlist = get_wishlist != null && get_wishlist.length > 0 ? get_wishlist.findIndex(
                        wish => wish.id == this.product.id) : null;

                    this.in_wishlist = in_wishlist != null && in_wishlist !== -1 ? true : false

                    this.loading = false;

                })
                .catch(err => {
                    console.log('error : ' + err)
                })
        }
    }
</script>
<style scoped>
    .active_c {
        border: 1px solid red !important;
    }
</style>