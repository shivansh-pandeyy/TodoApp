import { PostPayloadProps, CommentType } from './../constants/posts';
import {
  getPostsList as getPostsListApi,
  createPost as createPostApi,
} from '../../api/posts';
import { ActionDefTypes } from '../constants/posts';
import { AppDispatch } from '../store';

export const getPostsList = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: ActionDefTypes.IS_POSTS_LIST_LOADING });
    const res = await getPostsListApi(id);
    dispatch({ type: ActionDefTypes.GET_POSTS_LIST, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost =
  (id: string, payload: PostPayloadProps, callback: () => void) =>
  async (dispatch: AppDispatch) => {
    try {
      await createPostApi(id, payload);
      dispatch({ type: ActionDefTypes.CREATE_POST, payload: payload });
      callback();
    } catch (error) {
      console.log(error);
    }
  };

export const addCommentToPost =
  (payload: CommentType) => async (dispatch: AppDispatch) => {
    dispatch({ type: ActionDefTypes.ADD_COMMENT_TO_POST, payload });
  };
