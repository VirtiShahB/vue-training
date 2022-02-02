import Vue from 'vue'

Vue.filter('capitalize', function (value) {
  if (!value) {
    return ''
  }
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.filter('toFixed', function (price, limit) {
  if (price) { return price.toFixed(limit) }
  return '0.00'
})

Vue.filter('toUSD', function (price) {
  return `$${price}`
})
