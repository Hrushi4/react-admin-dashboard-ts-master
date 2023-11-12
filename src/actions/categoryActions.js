export const fetchCategoryDistributionSuccess = (data) => ({
  type: "FETCH_CATEGORY_DISTRIBUTION_SUCCESS",
  payload: data,
});

export const fetchCategoryDistributionFailure = (error) => ({
  type: "FETCH_CATEGORY_DISTRIBUTION_FAILURE",
  payload: error,
});

export const fetchCategoryDistribution = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("/data.json"); // Adjust the path accordingly
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      dispatch(fetchCategoryDistributionSuccess(data.category_distribution));
    } catch (error) {
      dispatch(
        fetchCategoryDistributionFailure(
          `Error fetching data: ${error.message}`
        )
      );
    }
  };
};
