import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.breakingbadapi.com/api/',
  method: 'GET',
});

export default api;
