import axios from 'axios';
console.log(process.env.NODE_ENV);

const url = process.env.NODE_ENV === 'production' ? '/api' : 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';

const api = axios.create({
  baseURL: url,
  headers: {
    Authorization: process.env.AUTH
  }
})
api.interceptors.request.use(request => {
  console.log('Making request');
  return request
})

export default api;