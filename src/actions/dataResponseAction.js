// Action creator for successful data fetch response
export const fetchDataResponseSuccess = (data) => ({
  type: "FETCH_DATA_RESPONSE_SUCCESS",
  payload: data,
});

// Action creator for data fetch failure response
export const fetchDataResponseFailure = (error) => ({
  type: "FETCH_DATA_RESPONSE_FAILURE",
  payload: error,
});

// Thunk action creator for asynchronous data fetching
export const fetchData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("/data.json");

      // Check if the response status is not okay and throw an error
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the response JSON and dispatch a success action
      const data = await response.json();
      dispatch(fetchDataResponseSuccess(data));
    } catch (error) {
      // Dispatch a failure action if an error occurs during data fetching
      dispatch(
        fetchDataResponseFailure(`Error fetching data: ${error.message}`)
      );
    }
  };
};
