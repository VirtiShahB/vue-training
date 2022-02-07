import store from '../store/store'
export default class CartServices {
  addToCart (id, qty) {
    store.commit('addToCart', { id: id, qty: qty })
  }
  totalCartValue () {
    return (this.totalCartItems).length
  }
  totalCartItems () {
    return window.localStorage.getItem('totalCartItems')
      ? JSON.parse(window.localStorage.getItem('totalCartItems'))
      : []
  }
  getCartData (productsData) {
    const totalCartItems = this.totalCartItems()
    const cartSummary = productsData.filter(function (o1) {
      return totalCartItems.some(function (o2) {
        o1.qty = o2.qty
        return o1.id === o2.id
      })
    })
    return cartSummary
  }
  flushCart () {
    localStorage.removeItem('totalCartItems')
    store.commit('flushCart')
  }
}
