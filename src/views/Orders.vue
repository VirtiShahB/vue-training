<template>
  <Main>
    <template #breadcrumbItems> Orders </template>

    <template #content>
      <h1>All orders ({{ myOrders.length }})</h1>
      <hr />
      <div v-if="myOrders.length > 0">
        <div class="mb-3 card" v-for="order in myOrders" :key="order.orderID">
          <div v-b-toggle="order.orderID" class="card-header">
            <small class="float-right">
              Order date : {{ order.date.toString() }}
            </small>
            <div class="card-title p-0">
              #<b>{{ order.orderID }}</b>
            </div>
          </div>
          <b-collapse
            :id="order.orderID"
            accordion="my-accordion"
            role="tabpanel"
          >
            <div visible id="collapse-1" class="card-body">
              <h5>Billing details</h5>
              <hr />
              <div class="row">
                <div class="ml-4 col-6 shadow-sm bg-gray card">
                  <div class="card-body">
                    <p>
                      <b>Customer Name:</b>
                      {{
                        order.billingDetails.firstName +
                        " " +
                        order.billingDetails.lastName
                      }}
                    </p>
                    <p><b>Phone:</b> {{ order.billingDetails.phone }}</p>
                    <p><b>Email:</b> {{ order.billingDetails.email }}</p>
                    <p>
                      <b>Address:</b> {{ order.billingDetails.address }},
                      {{ order.billingDetails.city }},
                      {{ order.billingDetails.state }},
                      {{ order.billingDetails.country }}, ({{
                        order.billingDetails.pincode
                      }})
                    </p>
                  </div>
                </div>

                <div class="ml-4 col-5 shadow-sm bg-gray card">
                  <div class="card-body">
                    <p>
                      <b>Order ID:</b>
                      {{ order.orderID }}
                    </p>
                    <p>
                      <b>Total items:</b>
                      {{ order.items.length }}
                    </p>
                    <p>
                      <b>Total qty:</b>
                      {{ order.items.reduce((a, b) => +a + +b.qty, 0) }}
                    </p>
                    <p>
                      <b>Total:</b>
                      ${{ order.items.reduce((a, b) => +a + +b.price, 0) }}
                    </p>
                  </div>
                </div>

                <div class="mt-3 col-md-12">
                  <h5>Items ({{ order.items.length }})</h5>
                  <hr />
                  <div
                    class="shadow-sm mb-3 card"
                    v-for="product in order.items"
                    :key="product.id"
                  >
                    <div class="card-body">
                      <p>
                        <b>Product:</b> {{ product.product }} x
                        {{ product.qty }}
                      </p>
                      <p><b>Price:</b> ${{ product.price }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-collapse>
        </div>
      </div>
      <div v-else>
        <h4 class="text-center">
          Your order list is empty ! keep shopping
          <b-icon-emoji-smile></b-icon-emoji-smile>
        </h4>
        <div class="mt-3 text-center">
          <router-link
            class="rounded-lg btn btn-sm btn-outline-primary"
            :to="{ name: 'home' }"
          >
            <b-icon-house></b-icon-house> Home
          </router-link>
        </div>
      </div>
    </template>
  </Main>
</template>

<script>
import Main from "@/views/Header.vue";
export default {
  components: {
    Main,
  },
  data() {
    return {
      myOrders: [],
    };
  },
  mounted() {
    this.myOrders = JSON.parse(localStorage.getItem("myOrders"));

    if (this.myOrders != null && this.myOrders.length > 0) {
      this.myOrders = this.myOrders.filter(
        (order) => order.billingDetails.userid.match(this.$store.getters.fetchLoginUser.id)
      );

      this.myOrders = this.myOrders.sort((a, b) => {
        let fa = a.date,
          fb = b.date;
        if (fa > fb) {
          return -1;
        }
        if (fa < fb) {
          return 1;
        }
        return 0;
      });
    } else {
      this.myOrders = [];
    }
  },
};
</script>

<style></style>
