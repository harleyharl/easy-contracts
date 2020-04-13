import { combineReducers } from "redux";
import usersReducer from './users_reducer'
import contractsReducer from './contracts_reducer'

const rootReducer = combineReducers({
  currentUser: usersReducer,
  contracts: contractsReducer,
});

export default rootReducer;
