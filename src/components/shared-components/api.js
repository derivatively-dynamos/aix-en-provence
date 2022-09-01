import {GIT_AUTH, API_URL} from '../../../config';
import axios from 'axios';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: GIT_AUTH
  }
})

export default api;