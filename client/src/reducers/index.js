import { combineReducers } from "redux";
import contractsReducer from './contracts_reducer'
import usersReducer from './users_reducer'

const rootReducer = combineReducers({
  contracts: contractsReducer,
  currentUser: usersReducer
});

export default rootReducer;
