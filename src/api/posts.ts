import axios from 'axios';
import { PostPayloadType } from '../redux/constants/posts';
import { url } from './baseUrl';

export const getPostsList = (id: string) =>
  axios.get(`${url}/users/${id}/posts`);

export const createPost = (id: string, payload: PostPayloadType) =>
  axios.post(`${url}/users/${id}/posts`, payload);
