import axios from 'axios';

const baseURL="https://fakestoreapi.com";

const $axios = axios.create({
    baseURL: baseURL
  })

  export default $axios;