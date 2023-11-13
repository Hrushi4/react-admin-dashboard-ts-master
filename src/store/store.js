import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

// Configured the Redux store using configureStore
const store = configureStore({
  reducer: rootReducer, // Set the rootReducer to manage the state
  middleware: [thunk], // Used redux-thunk middleware for handling asynchronous actions
});

export default store;
