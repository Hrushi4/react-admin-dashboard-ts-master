const initialState = {
  responseData: [],
  error: null,
};

const responseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_RESPONSE_SUCCESS":
      return {
        ...state,
        responseData: action.payload,
        error: null,
      };
    case "FETCH_RESPONSE_FAILURE":
      return {
        ...state,
        responseData: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default responseReducer;
