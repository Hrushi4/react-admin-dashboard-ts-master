import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  ArcElement,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

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

interface DataPoint {
  date?: string;
  week?: string;
  average_time: number;
}
interface LineChartProps {
  data: DataPoint[];
  label: string;
  backgroundColor: string;
  borderColor: string;
  isWeekWise?: boolean;
}

export const LineChart = ({
  data,
  label,
  backgroundColor,
  borderColor,
  isWeekWise = false,
}: LineChartProps) => {
  const labels = isWeekWise
    ? data.map((entry) => entry.week || "")
    : data.map((entry) => entry.date || "");

  const options: ChartOptions<"line"> = {
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
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const lineChartData: ChartData<"line", number[], string> = {
    labels,
    datasets: [
      {
        fill: true,
        label,
        data: data.map((entry) => entry.average_time),
        backgroundColor,
        borderColor,
      },
    ],
  };

  return <Line options={options} data={lineChartData} />;
};
