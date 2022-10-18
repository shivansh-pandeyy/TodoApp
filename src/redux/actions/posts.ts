import { getPostsList as getPostsListApi } from '../../api/posts';
import { ActionDefTypes } from '../constants/posts';
import { AppDispatch } from '../store';

export const getPostsList = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: ActionDefTypes.GET_POSTS_LIST_START });
    const res = await getPostsListApi(id);
    dispatch({ type: ActionDefTypes.GET_POSTS_LIST_END, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
