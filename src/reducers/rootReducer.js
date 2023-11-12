import { combineReducers } from "redux";
import widgetReducer from "./widgetReducer";
import categoryReducer from "./categoryReducer";

const rootReducer = combineReducers({
  widgets: widgetReducer,
  category: categoryReducer,
});

export default rootReducer;
