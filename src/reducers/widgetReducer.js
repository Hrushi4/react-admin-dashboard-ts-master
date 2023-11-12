// src/reducers/widgetReducer.js
const initialState = {
  data: [],
  error: null,
};

const widgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_WIDGETS_SUCCESS":
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case "FETCH_WIDGETS_FAILURE":
      return {
        ...state,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default widgetReducer;
