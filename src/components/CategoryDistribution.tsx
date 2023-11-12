import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { fetchCategoryDistribution } from "../actions/categoryActions";
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

interface CategoryDistributionProps {}

const CategoryDistribution: React.FC<CategoryDistributionProps> = () => {
  const dispatch = useDispatch();
  const { categoryData, error } = useSelector(
    (state: RootState) => state.category
  );

  useEffect(() => {
    dispatch(fetchCategoryDistribution());
  }, [dispatch]);

  interface RootState {
    category: {
      categoryData: Record<string, number>;
      error: string | null;
    };
  }

  const chartData = {
    labels: Object.keys(categoryData),
    datasets: [
      {
        label: "Category Distribution",
        data: Object.values(categoryData),
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
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 50,
          max: 1000,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div>
      {error ? (
        <div className="error-message">{error}</div>
      ) : (
        <Bar options={options} data={chartData} />
      )}
    </div>
  );
};

export default CategoryDistribution;
