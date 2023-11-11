import { FaRegBell } from "react-icons/fa";
import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import userImg from "../assets/userpic.png";
import { BarChart, DoughnutChart } from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi";
import WidgetItem from "../components/WidgetItems";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWidgets } from "../actions/actions";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.widgets);

  useEffect(() => {
    dispatch(fetchWidgets());
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
              <h2>Revenue & Transaction</h2>
              {/* Grapph here */}
              <BarChart
                data_2={[300, 144, 433, 655, 237, 755, 190]}
                data_1={[200, 444, 343, 556, 778, 455, 990]}
                title_1="Revenue"
                title_2="Transaction"
                bgColor_1="rgb(0,115,255)"
                bgColor_2="rgba(53,162,235,0.8)"
              />
            </div>
          </section>

          <section className="transaction-container">
            <div className="gender-chart">
              <h2>Gender Ratio</h2>

              <DoughnutChart
                labels={["Female", "Male"]}
                data={[12, 19]}
                backgroundColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.8)"]}
                cutout={90}
              />

              <p>
                <BiMaleFemale />
              </p>
            </div>
          </section>
        </main>{" "}
      </div>
    </div>
  );
};

export default Dashboard;
