import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  Filler
);

interface UsageStatisticsChart {}

const UsageStatisticsChart: React.FC<UsageStatisticsChart> = () => {
  const [usageChartType, setUsageChartType] = useState("by_platform");

  const data = useSelector((state) =>
    usageChartType === "by_platform"
      ? state.data.data.usage_statistics.by_platform
      : state.data.data.usage_statistics.by_country
  );
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: "Usage Statistics",
        data: Object.values(data),
        backgroundColor: [
          "rgb(0, 115, 255)",
          "rgb(0, 198, 202)",
          "rgb(255, 196, 0)",
          "rgb(76, 0, 255)",
        ],
        barThickness: "flex" as const,
        barPercentage: 1,
        categoryPercentage: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "Number of Users",
        },
        beginAtZero: true,
        grid: {
          display: false,
        },
        max: 1000,
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const handleUsageChartSelectChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setUsageChartType(event.target.value);
  };

  return (
    <>
      <div className="">
        <div style={{ display: "flex" }}>
          <h1>
            <label>Select Usage Chart Type:</label>
          </h1>
          <select
            onChange={handleUsageChartSelectChange}
            value={usageChartType}
          >
            <option value="by_platform">By Platform</option>
            <option value="by_country">By Country</option>
          </select>
        </div>
        <Bar options={options} data={chartData} />
      </div>
    </>
  );
};

export default UsageStatisticsChart;
