import {
  addUser as addUserApi,
  getUsersList as getUsersListApi,
  editUser as editUserApi,
} from '../../api/users';
import UserDef from '../../helpers/userDef';
import { ActionDefTypes } from '../constants/user';
import { AppDispatch } from '../store';

export const addUser = async (payload: UserDef) => {
  try {
    await addUserApi(payload);
  } catch (e) {
    console.log(e);
  }
};

export const getUsersList = () => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: ActionDefTypes.IS_USERS_LIST_LOADING });
    const res = await getUsersListApi();
    dispatch({ type: ActionDefTypes.GET_USERS_LIST, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const editUser = async (
  id: string,
  payload: UserDef,
  callback: () => void
) => {
  try {
    await editUserApi(id, payload);
    callback();
  } catch (e) {
    console.log(e);
  }
};
