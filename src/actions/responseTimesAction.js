export const fetchResponseSuccess = (data) => ({
  type: "FETCH_RESPONSE_SUCCESS",
  payload: data,
});

export const fetchResponseFailure = (error) => ({
  type: "FETCH_RESPONSE_FAILURE",
  payload: error,
});

export const fetchResponse = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("/data.json");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      dispatch(fetchResponseSuccess(data.response_times));
    } catch (error) {
      dispatch(fetchResponseFailure(`Error fetching data: ${error.message}`));
    }
  };
};
