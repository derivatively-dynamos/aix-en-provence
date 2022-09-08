import axios from 'axios';

const url = process.env.NODE_ENV === 'production' ? '/api' : 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';
const auth = process.env.NODE_ENV === 'production' ? undefined : process.env.AUTH;

const api = axios.create({
  baseURL: url,
  headers: {
    Authorization: auth,
  }
})
api.interceptors.request.use(request => {
  console.log('Making request');
  return request
})

export default api;