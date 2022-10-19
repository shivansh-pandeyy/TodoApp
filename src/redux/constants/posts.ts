export enum ActionDefTypes {
  IS_POSTS_LIST_LOADING = 'IS_POSTS_LIST_LOADING',
  GET_POSTS_LIST = 'GET_POSTS_LIST',
  ADD_COMMENT_TO_POST = 'ADD_COMMENT_TO_POST',
}

export interface PostObj {
  userId: number;
  id: number;
  title: string;
  body: string;
  comments?: CommentType[];
}

export interface PostsInitialState {
  isProcessing: boolean;
  info: PostObj[];
}

export interface PostPayloadType {
  title: string;
  body: string;
}

export interface CommentType {
  id: string;
  name: string;
  postId: number;
  email: string;
  body: string;
}
