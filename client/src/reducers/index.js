import { combineReducers } from "redux";
import contractsReducer from './contracts_reducer'

const rootReducer = combineReducers({
  contracts: contractsReducer,
});

export default rootReducer;
