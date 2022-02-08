import store from '../store/store'
import { getStore } from '../../config/util'
export default class CartServices {
  addToCart (id, qty) {
    store.commit('addToCart', { id: id, qty: qty })
  }
  totalCartValue () {
    return (this.totalCartItems).length
  }
  totalCartItems () {
    return getStore('totalCartItems')
  }
  getCartData (productsData) {
    const totalCartItems = this.totalCartItems()
    let cartSummary = []
    if (totalCartItems) {
      cartSummary = productsData.filter(function (o1) {
        return totalCartItems.some(function (o2) {
          o1.qty = o2.qty
          return o1.id === o2.id
        })
      })
    }
    return cartSummary
  }
  flushCart () {
    store.commit('flushCart')
  }
  removeFromCart (productId) {
    const totalCartItems = getStore('totalCartItems')
    let cartSummary = []
    if (totalCartItems) {
      cartSummary = totalCartItems.filter(e => e.id !== productId)
    }
    store.commit('removeFromCart', cartSummary)
  }
}
