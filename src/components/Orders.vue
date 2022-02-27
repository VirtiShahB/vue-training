<template>
  <section class="vh-100" style="background-color: #fdccbc">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <p>
            <span class="h2">Order List</span>
          </p>
          <div>
            <span>Order Id : {{ Orders[0].orderId }}</span
            >, <span>Total : ${{ Orders[0].total }}</span
            >,
            <span>Discount : ${{ Orders[0].discount }}</span>
          </div>

          <div class="card mb-4">
            <div
              class="card-body p-4"
              v-for="products in Orders[0].pro"
              :key="products.PID"
              :id="products.PID"
            >
              <div class="row align-items-center">
                <div class="col-md-2">
                  <img
                    :src="products.PIMAGE"
                    class="img-fluid"
                    alt="Generic placeholder image"
                  />
                </div>
                <div class="col-md-4 d-flex justify-content-center">
                  <div>
                    <p class="small text-muted mb-4 pb-2">Name</p>
                    <p class="lead fw-normal mb-0">
                      {{ products.PNAME }}
                    </p>
                  </div>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                  <div>
                    <p class="small text-muted mb-4 pb-2">Price</p>
                    <p class="lead fw-normal mb-0">${{ products.RealPrice }}</p>
                  </div>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                  <div>
                    <p class="small text-muted mb-4 pb-2">Color</p>
                    <p class="lead fw-normal mb-0">{{ products.PCOLOR }}</p>
                  </div>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                  <div>
                    <p class="small text-muted mb-4 pb-2">Quantity</p>
                    <p class="lead fw-normal mb-0">
                      ${{ products.RealPrice }}x{{ products.QUANTITY }}
                    </p>
                  </div>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                  <div>
                    <p class="small text-muted mb-4 pb-2">Total</p>
                    <p class="lead fw-normal mb-0">${{ products.PPRICE }}</p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      Orders: [],
    };
  },
  created() {
    this.Orders = this.$store.state.orders;
    var Products = this.Orders[0].products;
    var productList = JSON.parse(localStorage.getItem("PROLIST"));
    this.Orders[0].products = [];
    productList.forEach((element) => {
      var Objects = {};
      var Flag = Products.includes(element.PID);
      if (Flag == true) {
        Objects["image"] = element.PIMAGE;
        Objects["price"] = element.PPRICE;
        Objects["name"] = element.PNAME;
        this.Orders[0].products.push(Objects);
      }
    });
  },
};
</script>
