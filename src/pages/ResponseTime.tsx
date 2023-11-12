import React, { useState } from "react";

import AdminSidebar from "../components/AdminSidebar";
import { LineChart } from "../components/LineChart";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const ResponseTime = () => {
  const [chartType, setChartType] = useState("day_wise");

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
          <LineChart
            data={
              chartType === "day_wise"
                ? [
                    { date: "2023-05-01", average_time: 0.4 },
                    { date: "2023-05-02", average_time: 0.42 },
                    { date: "2023-05-03", average_time: 0.35 },
                    { date: "2023-05-04", average_time: 0.5 },
                    { date: "2023-05-05", average_time: 0.47 },
                  ]
                : [
                    { week: "18", average_time: 0.45 },
                    { week: "19", average_time: 0.43 },
                    { week: "20", average_time: 0.5 },
                    { week: "21", average_time: 0.46 },
                    { week: "22", average_time: 0.41 },
                  ]
            }
            label="Average Time"
            borderColor="rgb(53, 162, 255)"
            backgroundColor="rgba(53, 162, 255, 0.5)"
            labels={chartType === "day_wise" ? months : undefined}
          />
        </section>
      </main>
    </div>
  );
};

export default ResponseTime;
