import axios from 'axios';

let url = '/api';
let auth = undefined;
try{
  if(typeof process.env.AUTH !== 'undefined') {
    url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';
    auth = process.env.AUTH;
  }
} catch (err) {
  console.log('Running off server')
}

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