import axios from 'axios';
import { url } from './baseUrl';

export const getPostsList = (id: string) =>
  axios.get(`${url}/users/${id}/posts`);
