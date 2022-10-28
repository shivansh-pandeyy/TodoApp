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
  runEffect: true,
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
interface ActionCreatePost {
  type: ActionDefTypes.CREATE_POST;
  payload: PostObj;
}

type ActionDef =
  | ActionPostsListStart
  | ActionPostsListEnd
  | ActionAddComment
  | ActionCreatePost;

const postReducer = (state = INITIAL_STATE, action: ActionDef) => {
  return produce(state, (draftState) => {
    const { type, payload } = action;
    switch (type) {
      case ActionDefTypes.IS_POSTS_LIST_LOADING:
        draftState.isProcessing = true;
        break;
      case ActionDefTypes.GET_POSTS_LIST:
        draftState.isProcessing = false;
        draftState.info = [...draftState.info, ...payload];
        break;
      case ActionDefTypes.ADD_COMMENT_TO_POST:
        draftState.info.filter((post) => {
          if (post.id === payload.postId) {
            if (!!post?.comments?.length) {
              post.comments.push(payload);
            } else {
              post.comments = [payload];
            }
          }
        });
        break;
      case ActionDefTypes.CREATE_POST:
        draftState.runEffect = false;
        draftState.info.unshift({ ...payload, id: Date.now() });
        break;
      default:
        break;
    }
  });
};

export default postReducer;
