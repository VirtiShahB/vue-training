import axios from 'axios'
import store from '../store/index'
let config = {
  headers: {
    Authorization:
      'Bearer ' +
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL3Z1ZS10cmFpbmluZy1iYWNrZW5kXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjQzMjg0ODMyLCJleHAiOjE2NDMyODg0MzIsIm5iZiI6MTY0MzI4NDgzMiwianRpIjoieFA0MkpFckdnUW9kY0tLeSIsInN1YiI6MiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.8-LgxP6vtWLz0UHywaNVpvkqmlWyY0TZY6cn5Og3BWk',
  },
}
export default () => ({
  async getProducts() {
    const promise = axios.get(
      'http://localhost/vue-training-backend/api/products',
      config,
    )
    // using .then, create a new promise which extracts the data
    var productsData = await promise.then((response) => response.data)
    store.dispatch('setInitialProducts', {
      productsData,
    })
  },
})
