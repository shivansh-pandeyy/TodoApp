export enum ActionDefTypes {
  GET_POSTS_LIST_START = 'GET_POSTS_LIST_START',
  GET_POSTS_LIST_END = 'GET_POSTS_LIST_END',
}

export interface PostObj {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostsInitialState {
  isProcessing: boolean;
  info: PostObj[];
}
