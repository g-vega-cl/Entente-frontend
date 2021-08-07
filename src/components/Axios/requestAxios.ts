import axios from 'axios';

// `${process.env.REACT_APP_API_URL}`
const requestAxios = axios.create({
  baseURL: 'http://localhost:5000/',
  timeout: 10000,
});

export default requestAxios;