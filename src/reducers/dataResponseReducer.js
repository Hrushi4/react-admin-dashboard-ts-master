const initialState = {
  data: [],
  error: null,
};

const dataResponseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_RESPONSE_SUCCESS":
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case "FETCH_DATA_RESPONSE_FAILURE":
      return {
        ...state,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dataResponseReducer;
