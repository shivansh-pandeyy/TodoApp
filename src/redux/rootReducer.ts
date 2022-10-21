import { combineReducers } from 'redux';
import postReducer from './reducers/posts';
import userReducer from './reducers/user';

const rootReducer = combineReducers({
  userReducer: userReducer,
  postReducer: postReducer,
});

export default rootReducer;
