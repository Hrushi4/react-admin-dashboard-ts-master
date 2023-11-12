import { combineReducers } from "redux";
import widgetReducer from "./widgetReducer";
import categoryReducer from "./categoryReducer";
import responseReducer from "./responseReducer";

const rootReducer = combineReducers({
  widgets: widgetReducer,
  category: categoryReducer,
  response: responseReducer,
});

export default rootReducer;
