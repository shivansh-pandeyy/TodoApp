export enum ActionDefTypes {
  IS_USERS_LIST_LOADING = 'IS_USERS_LIST_LOADING',
  GET_USERS_LIST = 'GET_USERS_LIST',
}

export interface UserListInitialStateType {
  info: UserListEndObj[];
  isProcessing: boolean;
}

export interface UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface UserListEndObj {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
}
