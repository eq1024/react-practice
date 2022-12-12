import axios from 'axios';

const serve = axios.create({
  timeout: 10000,
});
serve.interceptors.request.use((config) => config);
serve.interceptors.response.use((res) => res);
export default serve;
