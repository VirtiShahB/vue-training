<template>
  <div class="ProductDetail">
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="4" class="border-right">
          <article class="card-body gallery-wrap">
            <div class="img-big-wrap">
              <div>
                <img
                  src="https://rukminim1.flixcart.com/image/416/416/ky65wnk0/mobile/k/2/l/-original-imagagj2qbchngbh.jpeg?q=70"
                />
              </div>
            </div>
          </article>
        </b-col>

        <b-col sm="8" class="col-sm-7">
          <b-card class="text-left">
            <b-card-body>
              <b-card-title
                >Moto G71 5G (Neptune Green, 128 GB) (6 GB RAM)</b-card-title
              >

              <p class="price-detail-wrap">
                <span class="price h3 text-primary">
                  Price : <span class="currency">US $</span
                  ><span class="num">{{ price }}</span>
                </span>
              </p>

              <b-card-title>Description</b-card-title>
              <b-card-text>
                <p>
                  Enjoy playing smooth and lag-free online games on this moto
                  g71 mobile phone. This mobile phone comes with a 16.25 cm
                  (6.4) AMOLED FHD display so that you get realistic and clear
                  visuals, thus turning it a delight to watch videos, play
                  games, and do more. Also, thanks to the massive 5000 mAh
                  battery, you can enjoy using your mobile phone without
                  worrying about low-battery interruptions. Furthermore, you can
                  also get enhanced protection from malware, clunky viruses, and
                  ads as this mobile phone supports a near-stock Android
                  operating system.
                </p>
              </b-card-text>

              <dl class="param param-feature">
                <dt>Model#</dt>
                <dd>12345611</dd>
              </dl>

              <dl class="param param-feature">
                <dt>Color</dt>
                <dd>Black and white</dd>
              </dl>

              <dl class="param param-feature">
                <dt>Delivery</dt>
                <dd>Ahmedabad,Surat</dd>
              </dl>

              <hr />
              <div class="row">
                <div class="col-sm-5">
                  <dl class="param param-inline">
                    <dt>Quantity:</dt>
                    <dd>
                      <b-form-spinbutton
                        id="quantity"
                        v-model="quantity"
                        min="0"
                        max="100"
                      ></b-form-spinbutton>
                    </dd>
                  </dl>
                </div>
              </div>

              <div>
                <b-button squared variant="success" @click="onAddCart"
                  >Add to Cart</b-button
                >

                &nbsp;
                {{ Msg }}
              </div>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  props: {
    msg: String,
  },
  data() {
    return {
      quantity: 0,
      price: 180,
      Msg: "",

      methods: {
        onAddCart() {
          console.log(this.quantity);
          if (this.quantity == 0) {
            this.Msg = "Removed from cart";
          } else {
            this.Msg = `Product added with qty ${this.quantity} in a cart`;
          }
        },
      },
    };
  },
};
</script>
