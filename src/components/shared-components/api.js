import {GIT_AUTH, API_URL} from '../../../config';
import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    Authorization: GIT_AUTH
  }
})
api.interceptors.request.use(request => {
  console.log('Making request');
  return request
})

export default api;