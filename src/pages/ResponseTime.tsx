import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import AdminSidebar from "../components/AdminSidebar";
import { LineChart } from "../components/LineChart";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { fetchResponse } from "../actions/actions";

// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "Aug",
//   "Sept",
//   "Oct",
//   "Nov",
//   "Dec",
// ];

const ResponseTime = () => {
  const [chartType, setChartType] = useState("day_wise");
  const dispatch = useDispatch();
  const { response_times, error } = useSelector((state) => state?.response);

  console.log(response_times);
  useEffect(() => {
    console.log("useEfffect");
    dispatch(fetchResponse());
  }, [dispatch]);

  const handleSelectChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setChartType(event.target.value);
  };
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="chart-container">
        <h2>
          {chartType === "day_wise" ? "Day Wise" : "Week Wise"} Response Time
        </h2>
        <section>
          <label>Select Chart Type:</label>
          <select onChange={handleSelectChange} value={chartType}>
            <option value="day_wise">Day Wise</option>
            <option value="week_wise">Week Wise</option>
          </select>
          {error ? (
            <div className="error-message">{error}</div>
          ) : (
            <>
              <LineChart
                data={response_times[chartType] || []}
                label="Average Time"
                borderColor="rgb(53, 162, 255)"
                backgroundColor="rgba(53, 162, 255, 0.5)"
                isWeekWise={chartType === "week_wise"}
              />
              <h2>
                {chartType === "day_wise" ? "Day Wise" : "Week Wise"} Response
                Time
              </h2>
            </>
          )}{" "}
        </section>
      </main>
    </div>
  );
};

export default ResponseTime;
