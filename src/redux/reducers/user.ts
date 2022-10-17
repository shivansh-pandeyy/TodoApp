import produce from 'immer';
import {
  ActionDefTypes,
  UserListEndObj,
  UserListInitialStateType,
} from './../constants/user';

const INITIAL_STATE: UserListInitialStateType = {
  isProcessing: false,
  info: [],
};

interface ActionUserListStart {
  type: ActionDefTypes.GET_USERS_LIST_START;
  payload?: string;
}

interface ActionUserListEnd {
  type: ActionDefTypes.GET_USERS_LIST_END;
  payload: UserListEndObj[];
}

type ActionDef = ActionUserListStart | ActionUserListEnd;

const userReducer = (state = INITIAL_STATE, action: ActionDef) => {
  const { type, payload } = action;
  switch (type) {
    case ActionDefTypes.GET_USERS_LIST_START:
      return produce(state, (draftState) => {
        draftState.isProcessing = true;
      });
    case ActionDefTypes.GET_USERS_LIST_END:
      return produce(state, (draftState) => {
        draftState.isProcessing = false;
        draftState.info = payload;
      });
    default:
      return state;
  }
};

export default userReducer;
