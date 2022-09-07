import {GIT_AUTH, API_URL} from '../../../config';
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    Authorization: process.env.AUTH
  }
})
api.interceptors.request.use(request => {
  console.log('Making request');
  return request
})

export default api;