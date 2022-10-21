import produce from 'immer';
import { ActionDefTypes, TodoObj, TodoInitialState } from './../constants/todo';

const INITIAL_STATE: TodoInitialState = {
  isProcessing: false,
  info: [],
};

interface ActionTodoListStart {
  type: ActionDefTypes.IS_TODOS_LIST_LOADING;
  payload?: string;
}

interface ActionTodoListEnd {
  type: ActionDefTypes.GET_TODOS_LIST;
  payload: TodoObj[];
}

type ActionDef = ActionTodoListStart | ActionTodoListEnd;

const todoReducer = (state = INITIAL_STATE, action: ActionDef) => {
  return produce(state, (draftState) => {
    const { type, payload } = action;
    switch (type) {
      case ActionDefTypes.IS_TODOS_LIST_LOADING:
        draftState.isProcessing = true;
        break;
      case ActionDefTypes.GET_TODOS_LIST:
        draftState.isProcessing = false;
        draftState.info = [...draftState.info, ...payload];
        break;
      default:
        break;
    }
  });
};

export default todoReducer;
