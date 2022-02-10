/**
 * Set localStorage
 */
import store from '../store/store'
export default {

  setStore (name, content) {
    if (!name) return
    if (typeof content !== 'string') {
      content = JSON.stringify(content)
    }
    return window.localStorage.setItem(name, content)
  },
  /**
    * Get localStorage
  */
  getStore (name) {
    if (window.localStorage.getItem(name)) { return JSON.parse(window.localStorage.getItem(name)) }
    return []
  },
  /**
   * Clear localStorage
  */
  removeStore (name) {
    if (!name) return
    return window.localStorage.removeItem(name)
  },
  /**
   * Validate Email address
   */
  isValidEmail (value) {
    return !(value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,64},$/i.test(value))
  },

  /**
   * Cart modification services
   */
  addToCart (id, qty) {
    store.commit('addToCart', { id: id, qty: qty })
  },
  totalCartValue () {
    return (this.totalCartItems).length
  },
  totalCartItems () {
    return this.getStore('totalCartItems')
  },
  getCartData (productsData) {
    let totalCartItems = this.totalCartItems()
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
  },
  flushCart () {
    store.commit('flushCart')
  },
  removeFromCart (productId) {
    let totalCartItems = this.getStore('totalCartItems')
    let cartSummary = []
    if (totalCartItems) {
      cartSummary = totalCartItems.filter(e => e.id !== productId)
    }
    store.commit('removeFromCart', cartSummary)
  },
  addToWishList (productId) {
    store.commit('addTowishList', productId)
  },
  deleteFromWishList (productId) {
    store.commit('removeFromWishList', productId)
  }
}
