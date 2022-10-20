import { ActionDefTypes } from '../constants/todo';
import { AppDispatch } from '../store';
import { getTodoList as getTodoListApi } from '../../api/todo';

export const getTodoList = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: ActionDefTypes.IS_TODOS_LIST_LOADING });
    const res = await getTodoListApi(id);
    dispatch({ type: ActionDefTypes.GET_TODOS_LIST, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
