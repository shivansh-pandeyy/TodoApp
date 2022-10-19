import axios from 'axios';
import UserDef from '../helpers/userDef';
import { url } from './baseUrl';

export const addUser = (payload: UserDef) =>
  axios.post(`${url}/users`, payload);

export const getUsersList = () => axios.get(`${url}/users`);

export const getUser = (id: string) => axios.get(`${url}/users/${id}`);

export const editUser = (id: string, payload: UserDef) =>
  axios.put(`${url}/users/${id}`, payload);
