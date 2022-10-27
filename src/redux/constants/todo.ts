export enum ActionDefTypes {
  IS_TODOS_LIST_LOADING = 'IS_TODOS_LIST_LOADING',
  GET_TODOS_LIST = 'GET_TODOS_LIST',
}

export interface TodoObj {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoInitialState {
  isProcessing: boolean;
  info: TodoObj[];
}
