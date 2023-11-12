import { FaRegBell } from "react-icons/fa";
import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import userImg from "../assets/userpic.png";
import CategoryDistribution from "../components/CategoryDistribution";
import WidgetItem from "../components/WidgetItems";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWidgets, fetchCategoryDistribution } from "../actions/actions";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.widgets);

  useEffect(() => {
    dispatch(fetchWidgets());
    dispatch(fetchCategoryDistribution());
  }, [dispatch]);

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
                <WidgetItem data={data} />
              </>
            )}
          </section>

          <section className="graph-container">
            <div className="revenue-chart">
              <h2>Category Distribution</h2>
              {/* Grapph here */}
              <CategoryDistribution />
            </div>

            <div className="dashboard-categories">
              <h2>Inventory</h2>
              <div>
                {/* {data.categories.map((i) => (
                  <CategoryItem
                    key={i.heading}
                    heading={i.heading}
                    value={i.value}
                    color={`hsl(${i.value * 4},${i.value}%,50%)`}
                  />
                ))} */}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}

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
