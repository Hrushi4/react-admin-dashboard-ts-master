import UsageStatisticsChart from "../components/UsageChart";
import AdminSidebar from "../components/AdminSidebar";

const UsageStatistics = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="chart-container">
        <UsageStatisticsChart />
      </main>
    </div>
  );
};

export default UsageStatistics;
