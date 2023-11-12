import { combineReducers } from "redux";
import dataResponseReducer from "./dataResponseReducer";

const rootReducer = combineReducers({
  data: dataResponseReducer,
});

export default rootReducer;
