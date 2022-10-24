import produce from 'immer';
import {
  ActionDefTypes,
  UserListEndObj,
  UserListInitialStateType,
} from './../constants/user';

const INITIAL_STATE: UserListInitialStateType = {
  isProcessing: false,
  info: [],
  runEffect: true,
};

interface ActionUserListStart {
  type: ActionDefTypes.IS_USERS_LIST_LOADING;
  payload?: string;
}

interface ActionUserListEnd {
  type: ActionDefTypes.GET_USERS_LIST;
  payload: UserListEndObj[];
}

interface ActionCreateUser {
  type: ActionDefTypes.CREATE_USER;
  payload: UserListEndObj;
}

type ActionDef = ActionUserListStart | ActionUserListEnd | ActionCreateUser;

const userReducer = (state = INITIAL_STATE, action: ActionDef) => {
  return produce(state, (draftState) => {
    const { type, payload } = action;
    switch (type) {
      case ActionDefTypes.IS_USERS_LIST_LOADING:
        draftState.isProcessing = true;
        break;
      case ActionDefTypes.GET_USERS_LIST:
        draftState.isProcessing = false;
        draftState.info = [...draftState.info, ...payload];
        break;
      case ActionDefTypes.CREATE_USER:
        draftState.runEffect = false;
        draftState.info.unshift({ ...payload, id: Date.now() });
        break;
      default:
        break;
    }
  });
};

export default userReducer;
