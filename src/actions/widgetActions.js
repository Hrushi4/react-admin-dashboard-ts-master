export const fetchWidgetsSuccess = (data) => ({
  type: "FETCH_WIDGETS_SUCCESS",
  payload: data,
});

export const fetchWidgetsFailure = (error) => ({
  type: "FETCH_WIDGETS_FAILURE",
  payload: error,
});

export const fetchWidgets = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("/data.json");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      dispatch(fetchWidgetsSuccess(data.insight_summary));
    } catch (error) {
      dispatch(fetchWidgetsFailure(`Error fetching data: ${error.message}`));
    }
  };
};
