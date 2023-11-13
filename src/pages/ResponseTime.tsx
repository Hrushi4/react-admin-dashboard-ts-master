import React, { useState } from "react";
import { useSelector } from "react-redux";
import AdminSidebar from "../components/AdminSidebar";
import { LineChart } from "../components/LineChart";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import userImg from "../assets/userpic.png";

interface SectionProps {
  // Define any additional props here
}

const ResponseTime: React.FC<SectionProps> = () => {
  // State to manage the selected chart type (day_wise or week_wise)
  const [chartType, setChartType] = useState("day_wise");

  // Fetch response time data from the Redux state
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const data = useSelector((state) => state.data.data.response_times);

  // Event handler for chart type selection change
  const handleSelectChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setChartType(event.target.value);
  };
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell />
          <img src={userImg} alt="User" />
        </div>
        <h2>
          {chartType === "day_wise" ? "Day Wise" : "Week Wise"} Response Time
        </h2>
        <div className="line-chart-heading">
          <select
            style={{
              borderRadius: "10%",
              alignItems: "center",
              border: "3px solid",
            }}
            onChange={handleSelectChange}
            value={chartType}
          >
            <option value="day_wise">Day Wise</option>
            <option value="week_wise">Week Wise</option>
          </select>
        </div>
        <div className="line-chart">
          <LineChart
            data={data[chartType] || []}
            label="Average Time"
            borderColor="rgb(53, 162, 255)"
            backgroundColor="rgba(53, 162, 255, 0.5)"
            isWeekWise={chartType === "week_wise"}
          />
        </div>
      </main>
    </div>
  );
};

export default ResponseTime;
