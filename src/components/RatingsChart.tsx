import React from "react";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ArcElement,
  PointElement,
  Filler,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(Title, Tooltip, Legend, ArcElement, PointElement, Filler);

interface RatingsChartProps {}
export const PieChart: React.FC<RatingsChartProps> = () => {
  const data = useSelector(
    (state) => state.data.data.user_satisfaction.ratings
  );

  const ratingsChartData = {
    labels: data.map(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (item: { rating: { toString: () => any } }) =>
        `${item.rating.toString()} Stars`
    ),
    datasets: [
      {
        label: "Rating Count",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data: data.map((item: { count: any }) => item.count),
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 205, 86)",
          "rgb(54, 162, 235)",
          "rgb(75, 192, 192)",
          "rgb(153, 102, 255)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const ratingsChartOptions: ChartOptions<"pie"> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  };

  return <Pie data={ratingsChartData} options={ratingsChartOptions} />;
};
