export const fetchDataResponseSuccess = (data) => ({
  type: "FETCH_DATA_RESPONSE_SUCCESS",
  payload: data,
});

export const fetchDataResponseFailure = (error) => ({
  type: "FETCH_DATA_RESPONSE_FAILURE",
  payload: error,
});

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("/data.json");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      dispatch(fetchDataResponseSuccess(data));
    } catch (error) {
      dispatch(
        fetchDataResponseFailure(`Error fetching data: ${error.message}`)
      );
    }
  };
};
