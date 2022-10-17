export enum ActionDefTypes {
  GET_USERS_LIST_START = 'GET_USERS_LIST_START',
  GET_USERS_LIST_END = 'GET_USERS_LIST_END',
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
