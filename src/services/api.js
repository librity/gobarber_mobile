import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gog.net.br',
});

export default api;
