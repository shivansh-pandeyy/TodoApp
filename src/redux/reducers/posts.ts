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
  type: ActionDefTypes.GET_POSTS_LIST_START;
  payload?: string;
}

interface ActionPostsListEnd {
  type: ActionDefTypes.GET_POSTS_LIST_END;
  payload: PostObj[];
}

type ActionDef = ActionPostsListStart | ActionPostsListEnd;

const postReducer = (state = INITIAL_STATE, action: ActionDef) => {
  const { type, payload } = action;
  switch (type) {
    case ActionDefTypes.GET_POSTS_LIST_START:
      return produce(state, (draftState) => {
        draftState.isProcessing = true;
      });
    case ActionDefTypes.GET_POSTS_LIST_END:
      return produce(state, (draftState) => {
        draftState.isProcessing = false;
        draftState.info = payload;
      });
    default:
      return state;
  }
};

export default postReducer;
