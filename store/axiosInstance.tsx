import axios from 'axios';

export const BASE_URL = 'https://app.mymently.com';

export const api = axios.create({
  baseURL: BASE_URL,
});