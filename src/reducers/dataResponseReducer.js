// Initial state for the data response reducer
const initialState = {
  data: [],
  error: null,
};

// Reducer function for handling data response actions
const dataResponseReducer = (state = initialState, action) => {
  switch (action.type) {
    // Case for successful data response
    case "FETCH_DATA_RESPONSE_SUCCESS":
      return {
        ...state,
        data: action.payload,
        error: null,
      };

    // Case for data response failure
    case "FETCH_DATA_RESPONSE_FAILURE":
      return {
        ...state,
        data: [],
        error: action.payload,
      };

    // Default case for handling unknown action types
    default:
      return state;
  }
};

export default dataResponseReducer;
