export enum ActionDefTypes {
  IS_POSTS_LIST_LOADING = 'IS_POSTS_LIST_LOADING',
  GET_POSTS_LIST = 'GET_POSTS_LIST',
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
