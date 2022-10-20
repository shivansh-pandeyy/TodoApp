import { combineReducers } from 'redux';
import postReducer from './reducers/posts';
import userReducer from './reducers/user';
import todoReducer from './reducers/todo';

const rootReducer = combineReducers({
  userReducer: userReducer,
  postReducer: postReducer,
  todoReducer: todoReducer,
});

export default rootReducer;
