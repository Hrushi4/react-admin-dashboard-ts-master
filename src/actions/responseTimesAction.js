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
    console.log(dispatch);
    try {
      const response = await fetch("/data.json");
      console.log(response);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      dispatch(fetchResponseSuccess(data.response_times));
    } catch (error) {
      console.log("Im here");
      dispatch(fetchResponseFailure(`Error fetching data: ${error.message}`));
    }
  };
};
