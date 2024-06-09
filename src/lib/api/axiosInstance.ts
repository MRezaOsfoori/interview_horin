// src/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://interview.hsg-stage.ir'
});

export default axiosInstance;