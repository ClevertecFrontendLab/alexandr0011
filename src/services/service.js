import axios from 'axios';

const URL = 'https://strapi.cleverland.by/api/';

export const service = axios.create({
  baseURL: URL,
});
