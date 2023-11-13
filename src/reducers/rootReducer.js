import { combineReducers } from "redux";
import dataResponseReducer from "./dataResponseReducer";

// Combine multiple reducers into a single rootReducer
const rootReducer = combineReducers({
  data: dataResponseReducer,
});

export default rootReducer;
