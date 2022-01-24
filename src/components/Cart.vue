<template>
  <div>
    <section class="cart-section section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <b-table :items="items" class="mt-3">
              <template #cell(image)="data">
                <span v-html="data.value"></span>
              </template>
              <template #cell(action)="data">
                <span v-html="data.value"></span>
              </template>
            </b-table>
          </div>
        </div>
        <div class="row" style="float: right">
          <div class="col-12">
            <b-button variant="warning"> Check Out </b-button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      items: [
        {
          image:
            '<img height="100" width="100" src="https://developers.google.com/shopping-content/images/shirt.jpg" />',
          productName: 'MacDonald',
          price: 40,
          action:
            '<b-icon icon="x-circle" scale="2" variant="danger"></b-icon>',
          total: '100'
        }
      ]
    }
  }
}
</script>
