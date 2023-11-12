const initialState = {
  categoryData: [],
  error: null,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CATEGORY_DISTRIBUTION_SUCCESS":
      return {
        ...state,
        categoryData: action.payload,
        error: null,
      };
    case "FETCH_CATEGORY_DISTRIBUTION_FAILURE":
      return {
        ...state,
        categoryData: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
