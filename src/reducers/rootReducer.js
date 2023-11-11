import { combineReducers } from "redux";
import widgetReducer from "./widgetReducer";

const rootReducer = combineReducers({
  widgets: widgetReducer,
});

export default rootReducer;
