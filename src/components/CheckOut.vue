<template>
  <div class="row">
    <div class="offset-md-1 col-md-5">
      <b-card class="mt-3" header="Shipping Details">
        <b-form @submit="onSubmit">
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="Enter email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Your Name:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.name"
              placeholder="Enter name"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Food:" label-for="input-3">
            <b-form-select
              id="input-3"
              v-model="form.food"
              :options="foods"
              required
            ></b-form-select>
          </b-form-group>
          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </b-card>
    </div>

    <div class="col-md-5">
      <b-card class="mt-3" header="Shoping Cart Details">
        <div class="d-flex flex-column">
          <div
            class="col-12 px-1 mt-3"
            style="max-height: 600px; overflow: auto"
          >
            <div v-if="cartItems && cartItems.length > 0">
              <div
                v-for="(item, index) in cartItems"
                :key="index"
                class="d-flex flex-row justify-content-between my-3"
              >
                <div class="col-3 px-0 text-center">
                  <img
                    :src="item.image"
                    alt="product Image"
                    width="70%"
                    height="50px"
                    style="object-fit: cover; border-radius: 10px"
                  />
                </div>
                <div class="col-8 px-1 d-flex flex-column">
                  <div>
                    <span style="font-size: 14px" class="text-muted">
                      {{ item.title }}
                    </span>
                  </div>
                  <div>
                    <span style="font-size: 15px" class="text-muted">
                      ${{ parseFloat(item.price).toFixed(2) }} X
                      {{ item.quantity }}
                    </span>
                    <span style="font-weight: 700">
                      <!-- ${{ calcPrice(item) }} -->
                    </span>
                  </div>
                </div>
                <div class="col-1 px-1">
                  <span @click="deleteItem(item, index)">
                    <img src="/assets/icon-delete.svg" alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div v-else>
              <div
                class="row justify-content-center align-items-center"
                style="min-height: 200px"
              >
                <div class="col-12 text-center">
                  <span class="text-muted" style="font-weight: 700">
                    Your cart is empty.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Checkout",
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      cartItems: JSON.parse(localStorage.getItem("myCart")),
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
};
</script>
