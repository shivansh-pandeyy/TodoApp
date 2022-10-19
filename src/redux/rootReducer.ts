import { combineReducers } from "redux";
import userReducer from "./reducers/user";

const rootReducer = combineReducers({
  userReducer: userReducer,
});

export default rootReducer;