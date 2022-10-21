import produce from 'immer';
import {
  ActionDefTypes,
  PostObj,
  PostsInitialState,
} from './../constants/posts';

const INITIAL_STATE: PostsInitialState = {
  isProcessing: false,
  info: [],
};

interface ActionPostsListStart {
  type: ActionDefTypes.IS_POSTS_LIST_LOADING;
  payload?: string;
}

interface ActionPostsListEnd {
  type: ActionDefTypes.GET_POSTS_LIST;
  payload: PostObj[];
}

type ActionDef = ActionPostsListStart | ActionPostsListEnd;

const postReducer = (state = INITIAL_STATE, action: ActionDef) => {
  return produce(state, (draftState) => {
    const { type, payload } = action;
    switch (type) {
      case ActionDefTypes.IS_POSTS_LIST_LOADING:
        draftState.isProcessing = true;
        break;
      case ActionDefTypes.GET_POSTS_LIST:
        draftState.isProcessing = false;
        draftState.info = payload;
        break;
      default:
        break;
    }
  });
};

export default postReducer;
