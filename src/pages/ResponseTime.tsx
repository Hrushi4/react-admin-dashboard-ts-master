import React, { useState } from "react";
import { useSelector } from "react-redux";
import AdminSidebar from "../components/AdminSidebar";
import { LineChart } from "../components/LineChart";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import userImg from "../assets/userpic.png";

const ResponseTime = () => {
  const [chartType, setChartType] = useState("day_wise");
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const data = useSelector((state) => state.data.data.response_times);

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

        <section>
          <label>Select Chart Type:</label>
          <select onChange={handleSelectChange} value={chartType}>
            <option value="day_wise">Day Wise</option>
            <option value="week_wise">Week Wise</option>
          </select>

          <div className="graph-container">
            <LineChart
              data={data[chartType] || []}
              label="Average Time"
              borderColor="rgb(53, 162, 255)"
              backgroundColor="rgba(53, 162, 255, 0.5)"
              isWeekWise={chartType === "week_wise"}
            />
          </div>
        </section>
        <h2>
          {chartType === "day_wise" ? "Day Wise" : "Week Wise"} Response Time
        </h2>
      </main>
    </div>
  );
};

export default ResponseTime;
