import produce from 'immer';
import {
  ActionDefTypes,
  CommentType,
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

interface ActionAddComment {
  type: ActionDefTypes.ADD_COMMENT_TO_POST;
  payload: CommentType;
}

type ActionDef = ActionPostsListStart | ActionPostsListEnd | ActionAddComment;

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
      case ActionDefTypes.ADD_COMMENT_TO_POST:
        draftState.info.filter((post) => {
          if (post.id === payload.postId) {
            if (post.comments && post.comments.length > 0) {
              post.comments.push(payload);
            } else {
              post.comments = [payload];
            }
          }
        });
        break;
      default:
        break;
    }
  });
};

export default postReducer;
