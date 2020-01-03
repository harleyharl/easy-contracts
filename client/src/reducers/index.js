import { combineReducers } from "redux";
import usersReducer from './users_reducer'

const rootReducer = combineReducers({
  currentUser: usersReducer
});

export default rootReducer;
