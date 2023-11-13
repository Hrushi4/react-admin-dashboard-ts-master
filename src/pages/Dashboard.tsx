import { FaRegBell } from "react-icons/fa";
import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import userImg from "../assets/userpic.png";
import CategoryDistribution from "../components/CategoryDistribution";
import WidgetItem from "../components/WidgetItems";
import { useSelector } from "react-redux";

const Dashboard: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { data, error } = useSelector((state) => state.data);

  return (
    <div className="admin-container">
      <AdminSidebar />
      <div>
        <main className="dashboard">
          <div className="bar">
            <BsSearch />
            <input type="text" placeholder="Search for data, users, docs" />
            <FaRegBell />
            <img src={userImg} alt="User" />
          </div>

          <h2>Insights Summary</h2>
          <section className="widget-container">
            {error ? (
              <div className="error-message">{error}</div>
            ) : (
              <>
                <WidgetItem data={data.insight_summary} />
              </>
            )}
          </section>

          <section className="graph-container">
            <div className="dashboard-categories">
              <h3>Category Distribution</h3>
              <CategoryDistribution />
            </div>

            <div className="dashboard-categories">
              <h2>Inventory</h2>
              <div>
                {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  data.categories.map((i) => (
                    <CategoryItem
                      key={i.heading}
                      heading={i.heading}
                      value={i.value}
                      color={`hsl(${i.value * 4},${i.value}%,50%)`}
                    />
                  ))
                }
              </div>
            </div>
            <div className="dashboard-categories">
              <h2>Inventory</h2>
              <div></div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

// Props interface for CategoryItem component
interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}
// CategoryItem component definition
const CategoryItem = ({ color, value, heading }: CategoryItemProps) => (
  <div className="category-item">
    <h5>{heading}</h5>
    <div>
      <div
        style={{
          backgroundColor: color,
          width: `${value}%`,
        }}
      ></div>
    </div>
    <span>{value}%</span>
  </div>
);

export default Dashboard;
