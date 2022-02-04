<template>
  <div class="row">
    <div class="offset-md-1 col-md-5">
      <b-card class="mt-5 mb-5" header="Billing Details">
        <h4>Billing Details</h4>
        <div class="row">
          <div class="mb-1 col-md-6">
            <b-form-group
              id="input-group-1"
              label="First Name:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.name"
                type="text"
                placeholder="Enter first name"
                required
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="mb-1 col-md-6">
            <b-form-group
              id="input-group-1"
              label="Last Name:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.last_name"
                type="text"
                placeholder="Enter last name"
                required
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-md-6">
            <b-form-group id="input-group-1" label="Phone:" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.phone"
                type="text"
                placeholder="Enter phone number"
                required
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="mb-1 col-md-6">
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
          </div>

          <div class="mb-1 col-md-12">
            <b-form-group
              id="input-group-1"
              label="Country:"
              label-for="input-1"
            >
              <b-form-select
                id="input-3"
                v-model="form.country"
                :options="country"
                required
              ></b-form-select>
            </b-form-group>
          </div>

          <div class="mb-1 col-md-12">
            <b-form-group
              id="input-group-1"
              label="Enter State:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.state"
                type="text"
                placeholder="Enter state"
                required
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="mb-1 col-md-12">
            <b-form-group
              id="input-group-1"
              label="Enter City:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.city"
                type="text"
                placeholder="Enter city"
                required
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="mb-1 col-md-12">
            <b-form-group
              id="input-group-1"
              label="Enter Address:"
              label-for="input-1"
            >
              <b-form-textarea
                id="textarea"
                v-model="form.address"
                placeholder="Enter Address"
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </b-form-group>
          </div>

          <div class="mb-1 col-md-12">
            <b-form-group
              id="input-group-1"
              label="Enter Postal Code:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.postal_code"
                type="number"
                placeholder="Enter postal code"
                required
              ></b-form-input>
            </b-form-group>
          </div>
        </div>
      </b-card>
    </div>

    <div class="col-md-5">
      <b-card class="mt-5" header="Shopping Cart Details">
        <div class="flex-column">
          <div class="col-12 px-1 mt-3" style="height: 600px; overflow: auto">
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
                <div class="col-9 px-1 d-flex flex-column">
                  <div>
                    <span style="font-size: 14px" class="text-muted">
                      {{ item.title }}
                    </span>
                  </div>
                  <div style="font-weight: 500"> 
                    <span style="font-size: 15px" class="text-muted">
                      ${{ parseFloat(item.price).toFixed(2) }} X
                      {{ item.quantity }}
                    </span>
                    <span>
                      = ${{ calcPrice(item) }}
                    </span>
                  </div>
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
      form: {},
      country: [
        { text: "Select Country", value: null },
        "India",
        "USA",
        "Dubai",
        "Canada",
      ],
      cartItems: JSON.parse(localStorage.getItem("myCart")),
    };
  },
  methods: {
    calcPrice(item) {
      return parseFloat(
        parseFloat(item.price).toFixed(2) * item.quantity
      ).toFixed(2);
    },
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
};
</script>
