const initialState = {
  data: [],
  loading: true,
  error: null,
};

const widgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_WIDGETS_SUCCESS":
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_WIDGETS_FAILURE":
      return {
        ...state,
        data: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default widgetReducer;
