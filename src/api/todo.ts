import axios from 'axios';
import { url } from './baseUrl';

export const getTodoList = (id: string) =>
  axios.get(`${url}/users/${id}/todos`);
